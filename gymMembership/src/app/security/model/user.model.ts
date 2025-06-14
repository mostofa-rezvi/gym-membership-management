export class UserModel {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  address!: string;

  role!: Role;
}

export enum Role {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

export const UserRoleMap: { value: Role; label: string }[] = [
  { value: Role.ADMIN, label: 'Admin' },
  { value: Role.MEMBER, label: 'Member' },
];
