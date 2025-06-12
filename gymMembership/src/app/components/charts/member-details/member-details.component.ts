import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css',
})
export class MemberDetailsComponent {
  @Input() member!: Member;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
