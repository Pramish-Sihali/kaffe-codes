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
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-semibold mb-8">My Account</h1>

      <div className="grid md:grid-cols-12 gap-6">
        {/* Profile Image Section */}
        <div className="md:col-span-3">
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
              className="text-sm text-brown-600 hover:text-brown-700"
            >
              Change Profile
            </button>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="md:col-span-4 bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Personal Details</h2>
            <button
              onClick={() => onUpdateProfile('personal')}
              className="text-sm text-brown-600 hover:text-brown-700"
            >
              Edit
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-gray-500">Name :</label>
              <p>{profile.name}</p>
            </div>
            <div>
              <label className="text-gray-500">Gender :</label>
              <p>{profile.gender}</p>
            </div>
            <div>
              <label className="text-gray-500">DOB :</label>
              <p>{profile.dob}</p>
            </div>
            <div>
              <label className="text-gray-500">Mobile :</label>
              <p>{profile.mobile}</p>
            </div>
            <div>
              <label className="text-gray-500">Email :</label>
              <p>{profile.email}</p>
            </div>
          </div>
        </div>

        {/* Billing/Shipping Address Section */}
        <div className="md:col-span-4 bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Billing/Shipping Address</h2>
            <button
              onClick={() => onUpdateProfile('address')}
              className="text-sm text-brown-600 hover:text-brown-700"
            >
              Edit
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-gray-500">Address :</label>
              <p>{profile.address}</p>
            </div>
            <div>
              <label className="text-gray-500">ZIP Code :</label>
              <p>{profile.zipCode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}