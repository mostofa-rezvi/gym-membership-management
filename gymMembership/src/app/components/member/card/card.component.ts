import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Member } from '../../models/member.model';
import { MembershipType } from '../../models/enum/membershipType.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() member!: Member;
  @Output() addPaymentClicked = new EventEmitter<Member>();
  @Output() deleteClicked = new EventEmitter<number>(); // Emit the ID for deletion
  @Input() summary: boolean = false;
  
  membershipType = MembershipType;

  onAddPayment(): void {
    this.addPaymentClicked.emit(this.member);
  }

  onDelete(): void {
    if (confirm(`Are you sure you want to delete ${this.member.name}?`)) {
      // Convert this.member.id to a number before emitting
      this.deleteClicked.emit(Number(this.member.id));
    }
  }
}
