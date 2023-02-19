/* eslint-disable consistent-return */
import axiosInstance from '@api/common';
import { omit } from '@utils/functions';

import { AuthProfileProps, LoginFormProps, LoginSuccessProps, RegisterFormProps } from './types';

export const fakeLogin = () => ({
  data: {
    accessToken: '123123123112312312321',
  },
  message: {
    VI: 'Đăng nhập thành công',
    EN: 'Login success',
  },
});

export const fakeProfile = () => ({
  data: {
    avatar: '',
    email: 'hoangcp219@gmail.com',
    fullName: 'Hoang Cong Phan',
    phone: '09312312312',
    userName: 'hoangcp219',
    _id: '12312321321',
  },
});

export function promiseDelay(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const AuthenticateAPI = {
  PROFILE: async (): Promise<ResponseAPIType<AuthProfileProps>> => {
    await promiseDelay(5000);
    // const response = await axiosInstance.get(concatAuth("/auth/user"));

    return fakeProfile();
  },
  LOGIN: async (data: LoginFormProps): Promise<ResponseAPIType<LoginSuccessProps>> => {
    await promiseDelay(5000);
    return fakeLogin();

    const formData = new FormData();

    Object.keys(data).forEach((ele) => {
      formData.append(ele, data[ele as keyof LoginFormProps]);
    });
    const response = await axiosInstance.post('/auth/login', formData);
    return response.data;
  },

  REGISTER: async (data: RegisterFormProps): Promise<void> => {
    const formData = new FormData();
    const newsData = omit(data, ['passwordConfirmation']);

    Object.keys(newsData).forEach((ele) => {
      formData.append(ele, data[ele as keyof LoginFormProps]);
    });
    const response = await axiosInstance.post('/auth/register', formData);
    return response.data;
  },
};
