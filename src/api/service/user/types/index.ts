type Base = {
  name: string;
  email: string;
};

export type User = Base & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UserWithoutPassWord = User;
