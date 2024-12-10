// lib/authAPI.ts
import axios, { AxiosError } from 'axios';

interface LoginResponse {
  token: string;
  message: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

const authAPI = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response = await axios.post<LoginResponse>(
        'https://kaffe.clockb.tech/api/v1/auth/login',
        credentials
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        throw new Error(axiosError.response?.data.message || 'Login failed');
      } else {
        throw error;
      }
    }
  },
};

export default authAPI;