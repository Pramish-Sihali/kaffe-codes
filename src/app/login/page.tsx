// app/login/page.tsx
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;