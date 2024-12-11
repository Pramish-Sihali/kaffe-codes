// components/layout/Header.tsx
"use client";

import React from 'react';
import Navbar from '../home/Navbar';
import CategoryIcons from '../home/CategoryIcons';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <Navbar />
      <CategoryIcons />
    </header>
  );
};

export default Header;