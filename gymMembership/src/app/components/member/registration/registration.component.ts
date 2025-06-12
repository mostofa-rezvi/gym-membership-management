import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from '../../models/member.model';
import { MembershipType } from '../../models/enum/membershipType.enum';
import { ServiceType } from '../../models/enum/serviceType.enum';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  @Input() membershipTypes: MembershipType[] = [];
  @Input() serviceTypes: ServiceType[] = [];
  @Output() memberCreated = new EventEmitter<Omit<Member, 'id' | 'payments'>>();

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      joinDate: [this.getTodayString(), Validators.required],
      membershipType: [MembershipType.BRONZE, Validators.required],
      services: this.fb.array(this.serviceTypes.map(() => new FormControl(false)))
    });
  }

  get servicesFormArray() {
    return this.registrationForm.get('services') as FormArray;
  }

  getTodayString(): string {
    return new Date().toISOString().split('T')[0];
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const formValue = this.registrationForm.value;
    const selectedServices = formValue.services
      .map((checked: boolean, i: number) => (checked ? this.serviceTypes[i] : null))
      .filter((v: ServiceType | null) => v !== null);

    const newMember: Omit<Member, 'id' | 'payments'> = {
      name: formValue.name,
      email: formValue.email,
      dob: new Date(formValue.dob),
      joinDate: new Date(formValue.joinDate),
      membershipType: formValue.membershipType,
      services: selectedServices,
    };

    this.memberCreated.emit(newMember);
    this.registrationForm.reset({
      joinDate: this.getTodayString(),
      membershipType: MembershipType.BRONZE,
      services: this.serviceTypes.map(() => false) // Reset checkboxes
    });
  }
}