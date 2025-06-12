import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Member } from '../models/member.model';
import { MemberService } from '../services/member.service';
import { Payment } from '../models/payment.model';

// This is crucial for interacting with Bootstrap's JS
declare var bootstrap: any;

@Component({
  selector: 'app-payment-tracking',
  templateUrl: './payment-tracking.component.html',
  styleUrl: './payment-tracking.component.css'
})
export class PaymentTrackingComponent implements AfterViewInit {
  @Input() member!: Member;
  @Output() close = new EventEmitter<void>();
  @ViewChild('paymentModal') modalEl!: ElementRef;

  private bsModal: any;

  paymentAmount: number | null = null;
  paymentDate: string = new Date().toISOString().split('T')[0];

  constructor(private memberService: MemberService) {}

  ngAfterViewInit(): void {
    this.bsModal = new bootstrap.Modal(this.modalEl.nativeElement);
    this.bsModal.show();

    // Listen for the Bootstrap modal close event to emit our own event
    this.modalEl.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.close.emit();
    });
  }

  submitPayment(): void {
    if (!this.paymentAmount || this.paymentAmount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    const newPayment: Payment = {
      amount: this.paymentAmount,
      date: new Date(this.paymentDate)
    };
    this.memberService.addPayment(this.member.id, newPayment);
    this.bsModal.hide(); // This will trigger the close event
  }

  closeModal(): void {
    this.bsModal.hide();
  }
}