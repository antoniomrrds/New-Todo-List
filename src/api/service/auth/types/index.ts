type Base = {
  password: string;
  email: string;
};

export type SignIn = Base;
export type SignUp = Base & {
  name: string;
  confirmPassword: string;
};

export type AuthUser = {
  Name: string;
  Email: string;
  Roles: Roles[];
};

export enum Roles {
  User = 0,
  Admin = 1,
}
