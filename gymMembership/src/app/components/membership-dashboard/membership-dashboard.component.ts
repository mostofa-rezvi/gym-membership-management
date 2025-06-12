import {
  Component,
  computed,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Member } from '../models/member.model';
import { MembershipType } from '../models/enum/membershipType.enum';
import { ServiceType } from '../models/enum/serviceType.enum';
import { MemberService } from '../services/member.service';
import { PaymentStatus } from '../models/paymentStatus.model';

@Component({
  selector: 'app-membership-dashboard',
  templateUrl: './membership-dashboard.component.html',
  styleUrl: './membership-dashboard.component.css',
})
export class MembershipDashboardComponent {
  members: Signal<Member[]>;
  membershipTypes = Object.values(MembershipType);
  serviceTypes = Object.values(ServiceType);

  selectedMemberForPayment: Member | null = null;
  public searchTerm: WritableSignal<string> = signal('');
  public pageSize: WritableSignal<number> = signal(5);
  public currentPage: WritableSignal<number> = signal(1);

  constructor(private memberService: MemberService) {
    this.members = this.memberService.members;
  }

  // --- COMPUTED SIGNALS FOR SEARCH AND PAGINATION ---
  public filteredMembers: Signal<Member[]> = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) {
      return this.members();
    }
    return this.members().filter(
      (member) =>
        member.name.toLowerCase().includes(term) ||
        member.email.toLowerCase().includes(term)
    );
  });

  public totalPages: Signal<number> = computed(() => {
    return Math.ceil(this.filteredMembers().length / this.pageSize());
  });

  public paginatedMembers: Signal<Member[]> = computed(() => {
    const membersToPaginate = this.filteredMembers();
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();
    return membersToPaginate.slice(start, end);
  });

  // --- EVENT HANDLERS AND METHODS ---
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
    this.currentPage.set(1);
  }

  onMemberCreated(newMember: Omit<Member, 'id' | 'payments'>): void {
    this.memberService.addMember(newMember);
    this.currentPage.set(1);
  }

  onDeleteClicked(memberId: number): void {
    this.memberService.deleteMember(memberId);
    if (this.paginatedMembers().length === 0 && this.currentPage() > 1) {
      this.goToPage(this.currentPage() - 1);
    }
  }

  goToPage(page: number): void {
    const total = this.totalPages();
    if (page >= 1 && page <= total) {
      this.currentPage.set(page);
    }
  }

  onAddPaymentClicked(member: Member): void {
    this.selectedMemberForPayment = member;
  }

  onModalClosed(): void {
    this.selectedMemberForPayment = null;
  }

  trackByMemberId(index: number, member: Member): number {
    return member.id;
  }

  public selectedMemberForDetails: WritableSignal<Member | null> = signal(null);

  onViewDetailsClicked(member: Member): void {
    this.selectedMemberForDetails.set(member);
  }

  onDetailsModalClosed(): void {
    this.selectedMemberForDetails.set(null);
  }

  getPaymentStatus(member: Member): PaymentStatus {
    if (!member.payments || member.payments.length === 0) {
      return {
        status: 'No Payments',
        lastPaymentDate: null,
        cssClass: 'bg-secondary-subtle text-secondary-emphasis',
      };
    }

    const lastPayment = [...member.payments].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];
    const lastPaymentDate = new Date(lastPayment.date);
    const today = new Date();
    const daysSinceLastPayment = Math.floor(
      (today.getTime() - lastPaymentDate.getTime()) / (1000 * 3600 * 24)
    );

    if (daysSinceLastPayment <= 30) {
      return {
        status: 'Paid',
        lastPaymentDate,
        cssClass: 'bg-success-subtle text-success-emphasis',
      };
    } else if (daysSinceLastPayment <= 45) {
      return {
        status: 'Due Soon',
        lastPaymentDate,
        cssClass: 'bg-warning-subtle text-warning-emphasis',
      };
    } else {
      return {
        status: 'Overdue',
        lastPaymentDate,
        cssClass: 'bg-danger-subtle text-danger-emphasis',
      };
    }
  }
}
