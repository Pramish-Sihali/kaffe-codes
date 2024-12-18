import React from 'react';
import Link from 'next/link';
import { CheckCircle, Truck, HelpCircle, RefreshCcw } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: '100% authentic',
    description: 'Find a curated selection of 100% authentic products, ensuring trust and quality with every purchase'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Free Shipping',
    description: 'On all orders above Rs. 5000'
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: 'Experts Tips & Advice',
    description: 'All products are cruelty free'
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: 'Easy returns',
    description: 'Enjoy effortless pickups and hassle-free refunds with our service'
  }
];

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Features Section with white background */}
      <div className="bg-white">
        <div className="flex flex-wrap justify-between px-10 md:px-20 py-5 rounded-lg max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-3 p-4 w-full sm:w-1/2 lg:w-1/4">
              <div className="text-gray-700">
                {feature.icon}
              </div>
              <h3 className="font-medium text-xl mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 lg:pr-12 font-normal text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content with black background */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Info */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <img src="/images/logo2.svg" alt="Kaffe Codes" className="w-auto h-12" />
              </div>
              <p className="text-gray-400 mb-4">
                Kaffe Codes is the platform to run a successful online business in Nepal.
              </p>
              <p className="text-gray-400 mb-2">Bishalnagar, kathmandu</p>
              <p className="text-gray-400">+977 981234578</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                {['About', 'Contact', <Link href="/blogs" legacyBehavior><a className="text-gray-400 hover:text-[#DEB887] transition-colors">Blogs</a></Link>,
                 'Help Center', 'Conditions', <Link href="/policy" legacyBehavior>
                  <a className="text-gray-400 hover:text-[#DEB887] transition-colors">Privacy Policy</a></Link>].map((item, index) => (
                  <li key={index}>
                    {typeof item === 'string' ? (
                      <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">{item}</a>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Bakery', 'Coffee', 'Tea', 'Utensils', 'Machineries', 'Cakes'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours & Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4">Working Hours</h3>
              <p className="text-gray-400 mb-4">Monday - Friday: 9:00 AM - 6:00 PM</p>
              
              <h3 className="text-lg font-bold mb-4">Let&apos;s Join To Our Newsletters</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white text-black"
                />
                <button className="px-6 py-2 bg-custom-green text-white rounded-r-lg hover:bg-[#A0522D] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;