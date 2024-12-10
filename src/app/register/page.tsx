// app/register/page.tsx
import React from 'react';
import RegistrationForm from '@/components/auth/RegistrationForm';

const RegistrationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;