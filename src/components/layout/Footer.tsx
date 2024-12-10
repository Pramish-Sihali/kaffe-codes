import React from 'react';
import { Package2, Truck, HeadphonesIcon, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Package2 className="w-6 h-6" />,
    title: '100% authentic',
    description: 'Find a curated selection of 100% authentic products, ensuring trust and quality with every purchase'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Free Shipping',
    description: 'On all orders above Rs 5000'
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: 'Experts Tips & Advice',
    description: 'All products are quality free'
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Easy returns',
    description: 'Enjoy effortless pickups and hassle-free refunds with our service'
  }
];

export default function Footer() {
  return (
    <footer>
      {/* Features Section with white background */}
      <div className="bg-brown">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="
                  text-center group p-6 rounded-xl transition-all duration-300
                  hover:bg-[#F5EDE6]
                "
              >
                <div className="
                  inline-flex items-center justify-center w-12 h-12 rounded-xl
                  bg-[#F5EDE6] text-gray mb-4 
                  group-hover:scale-110 group-hover:bg-[#DEB887]
                  group-hover:text-[#8B4513]
                  transition-all duration-300
                ">
                  {feature.icon}
                </div>
                <h3 className="
                  font-medium text-lg mb-2 text-gray
                  group-hover:text-[#663300]
                  transition-colors
                ">
                  {feature.title}
                </h3>
                <p className="
                  text-sm text-gray
                  group-hover:text-[#8B4513]
                  transition-colors
                ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
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
                {['About', 'Contact', 'Blogs', 'Help Center', 'Conditions', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Bakery', 'Coffee', 'Tea', 'Utensils', 'Machineries', 'Cakes'].map((item) => (
                  <li key={item}>
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

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">Copyright © 2024 Digitbox.Guru. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">Privacy Policy</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-400 hover:text-[#DEB887] transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}