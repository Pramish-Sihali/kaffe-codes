// components/account/AccountProfile.tsx
import Image from 'next/image';
import { useState } from 'react';

interface ProfileData {
  name: string;
  gender: string;
  dob: string;
  mobile: string;
  email: string;
  image: string;
  address: string;
  zipCode: string;
}

interface AccountProfileProps {
  profile: ProfileData;
  onUpdateProfile: (type: 'profile' | 'personal' | 'address') => void;
}

export default function AccountProfile({ profile, onUpdateProfile }: AccountProfileProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-medium mb-8">My Account</h1>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Profile Image Section */}
        <div className="md:col-span-3">
          <div className="bg-gray-200 p-6 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image
                  src={profile.image || "/images/default-avatar.png"}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <button
                onClick={() => onUpdateProfile('profile')}
                className="text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                Change Profile
              </button>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="md:col-span-5 bg-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Personal Details</h2>
            <button
              onClick={() => onUpdateProfile('personal')}
              className="px-4 py-1 border border-gray-300 rounded bg-white text-gray-700 text-sm hover:border-gray-400"
            >
              Edit
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-gray-600">Name : </span>
              <span className="ml-2">{profile.name}</span>
            </div>
            <div>
              <span className="text-gray-600">Gender : </span>
              <span className="ml-2">{profile.gender}</span>
            </div>
            <div>
              <span className="text-gray-600">DOB : </span>
              <span className="ml-2">{profile.dob}</span>
            </div>
            <div>
              <span className="text-gray-600">Mobile : </span>
              <span className="ml-2">{profile.mobile}</span>
            </div>
            <div>
              <span className="text-gray-600">Email : </span>
              <span className="ml-2">{profile.email}</span>
            </div>
          </div>
        </div>

        {/* Billing/Shipping Address Section */}
        <div className="md:col-span-4 bg-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Billing/ Shipping Address</h2>
            <button
              onClick={() => onUpdateProfile('address')}
              className="px-4 py-1 border border-gray-300 rounded bg-white text-gray-700 text-sm hover:border-gray-400"
            >
              Edit
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-gray-600">Address : </span>
              <span className="ml-2">{profile.address}</span>
            </div>
            <div>
              <span className="text-gray-600">ZIP Code : </span>
              <span className="ml-2">{profile.zipCode}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}