export interface LoginFormProps {
  userName: string;
  password: string;
}

export enum AuthRole {
  ADMIN = 'admin',
  USER = 'user',
}

export interface RegisterFormProps {
  userName: string;
  phone: string;
  email: string;
  fullName: string;
  password: string;
  passwordConfirmation: string;
}

export interface ForgotPasswordFormProps {
  email: string;
}

export interface ResetPasswordFormProps {
  code: string;
  password: string;
  passwordConfirmation: string;
}

export interface LoginSuccessProps {
  accessToken: string;
}

export interface AuthProfileProps {
  avatar: string;
  email: string;
  fullName: string;
  phone: string;
  userName: string;
  role?: AuthRole;
  _id: string;
}
