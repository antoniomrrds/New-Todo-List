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
};
