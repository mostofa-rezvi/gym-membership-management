export interface PaymentStatus {
  status: 'Paid' | 'Due Soon' | 'Overdue' | 'No Payments';
  lastPaymentDate: Date | null;
  cssClass: string;
}
