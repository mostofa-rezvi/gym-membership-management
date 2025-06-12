import { MembershipType } from "./enum/membershipType.enum";
import { ServiceType } from "./enum/serviceType.enum";
import { Payment } from "./payment.model";

export interface Member {
  id: number;
  name: string;
  email: string;
  dob: Date;
  joinDate: Date;
  membershipType: MembershipType;
  services: ServiceType[];
  payments: Payment[];
}
