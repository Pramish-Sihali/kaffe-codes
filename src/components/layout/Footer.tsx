export default function Footer() {
    return (
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Info */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <img src="/images/logo.png" alt="Kaffe Codes" className="h-8" />
              </div>
              <p className="text-gray-400 mb-4">
                Kaffe Codes is the platform to run a successful online business in Nepal.
              </p>
              <p className="text-gray-400 mb-2">Bshnehopi, kathmandu</p>
              <p className="text-gray-400">+977 981234578</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
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
                    <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Working Hours & Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4">Working Hours</h3>
              <p className="text-gray-400 mb-4">Monday - Friday: 9:00 AM - 6:00 PM</p>
              
              <h3 className="text-lg font-bold mb-4">Let's Join To Our Newsletters</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white text-black"
                />
                <button className="px-6 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">Copyright © 2024 Digitbox.Guru. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }