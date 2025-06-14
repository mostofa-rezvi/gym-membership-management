import { Injectable, signal, WritableSignal, computed } from '@angular/core';
import { Member } from '../models/member.model';
import { Payment } from '../models/payment.model';
import { MembershipType } from '../models/enum/membershipType.enum';
import { ServiceType } from '../models/enum/serviceType.enum';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private apiUrl = 'http://localhost:8090/api/members';

  // --- State Signals ---
  private membersSignal: WritableSignal<Member[]> = signal<Member[]>([]);
  private membersByTypeSignal: WritableSignal<any[]> = signal([]);
  private monthlyRevenueSignal: WritableSignal<any[]> = signal([]);

  // --- Public Readonly Signals for Components ---
  public members = this.membersSignal.asReadonly();
  public membersByType = this.membersByTypeSignal.asReadonly();
  public monthlyRevenue = this.monthlyRevenueSignal.asReadonly();

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  // --- Data Loading ---
  loadInitialData(): void {
    this.loadMembers();
    this.loadStats();
  }

  loadMembers(): void {
    this.http
      .get<Member[]>(this.apiUrl)
      .pipe(
        tap((members) => this.membersSignal.set(members)),
        catchError((err) => {
          console.error('Failed to load members', err);
          return of([]);
        })
      )
      .subscribe();
  }

  loadStats(): void {
    // Load members by type
    this.http
      .get<any[]>(`${this.apiUrl}/stats/by-type`)
      .pipe(
        tap((data) => this.membersByTypeSignal.set(data)),
        catchError((err) => {
          console.error('Failed to load members by type stats', err);
          return of([]);
        })
      )
      .subscribe();

    // Load monthly revenue
    this.http
      .get<any[]>(`${this.apiUrl}/stats/monthly-revenue`)
      .pipe(
        tap((data) => this.monthlyRevenueSignal.set(data)),
        catchError((err) => {
          console.error('Failed to load monthly revenue stats', err);
          return of([]);
        })
      )
      .subscribe();
  }

  // --- CRUD Operations ---

  addMember(newMember: Omit<Member, 'id' | 'payments'>) {
    this.http
      .post<Member>(this.apiUrl, newMember)
      .pipe(
        tap((createdMember) => {
          this.membersSignal.update((members) => [...members, createdMember]);
          this.loadStats(); // Reload stats after adding a member
        }),
        catchError((err) => {
          console.error('Failed to add member', err);
          return of(null);
        })
      )
      .subscribe();
  }

  addPayment(memberId: number, payment: Omit<Payment, 'id'>) {
    this.http
      .post<Member>(`${this.apiUrl}/${memberId}/payments`, payment)
      .pipe(
        tap((updatedMember) => {
          // Find and update the member in the signal for immediate UI feedback
          this.membersSignal.update((members) =>
            members.map((m) => (m.id === updatedMember.id ? updatedMember : m))
          );
          this.loadStats(); // Reload stats after a payment
        }),
        catchError((err) => {
          console.error('Failed to add payment', err);
          return of(null);
        })
      )
      .subscribe();
  }

  updateMember(memberToUpdate: Member) {
    this.http
      .put<Member>(`${this.apiUrl}/${memberToUpdate.id}`, memberToUpdate)
      .pipe(
        tap((updatedMember) => {
          this.membersSignal.update((members) =>
            members.map((m) => (m.id === updatedMember.id ? updatedMember : m))
          );
          this.loadStats();
        }),
        catchError((err) => {
          console.error('Failed to update member', err);
          return of(null);
        })
      )
      .subscribe();
  }

  deleteMember(memberId: number): void {
    this.http
      .delete<void>(`${this.apiUrl}/${memberId}`)
      .pipe(
        tap(() => {
          this.membersSignal.update((members) =>
            members.filter((m) => m.id !== Number(memberId))
          );
          this.loadStats(); // Reload stats after deleting a member
        }),
        catchError((err) => {
          console.error('Failed to delete member', err);
          return of(null);
        })
      )
      .subscribe();
  }
}
