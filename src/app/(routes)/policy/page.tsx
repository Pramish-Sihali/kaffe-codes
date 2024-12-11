// app/(routes)/policy/page.tsx
export default function PrivacyPolicyPage() {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: March 1, 2024</p>
  
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-700">
                Welcome to Kaffe Codes! At Kaffe Codes, we value your privacy and are committed to protecting your personal information. 
                This privacy policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
              </p>
            </section>
  
            {/* Information Collection */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Personal Information</h3>
                  <p className="text-gray-700">
                    When you place an order or interact with our website, we may collect personal information such as your name, 
                    email address, phone number, and shipping address.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Payment Details</h3>
                  <p className="text-gray-700">
                    We do not store your payment details directly. Payments are processed securely through third-party payment gateways.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Cookies</h3>
                  <p className="text-gray-700">
                    We use cookies to enhance your browsing experience and analyze website traffic. You can adjust your browser settings to manage cookies.
                  </p>
                </div>
              </div>
            </section>
  
            {/* Information Usage */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Order Processing:</span> We use your personal information to process orders, 
                  deliver products, and provide customer support.
                </li>
                <li>
                  <span className="font-medium">Marketing Communications:</span> With your consent, we may send you promotional 
                  emails about new products, special offers, and updates.
                </li>
                <li>
                  <span className="font-medium">Improving Our Services:</span> We analyze data to improve our website, products, 
                  and services.
                </li>
              </ul>
            </section>
  
            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-700">
                We take appropriate measures to protect your personal information. However, no method of transmission over the 
                internet is completely secure. Please use caution when sharing sensitive information online.
              </p>
            </section>
  
            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
              <p className="text-gray-700">
                You have the right to access, correct, or delete your personal information. If you have any requests or concerns, 
                please contact us at{' '}
                <a href="mailto:contact@kaffecodes.com" className="text-brown-600 hover:text-brown-700">
                  contact@kaffecodes.com
                </a>
                .
              </p>
            </section>
  
            {/* Policy Changes */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Changes to this Policy</h2>
              <p className="text-gray-700">
                We may update this privacy policy from time to time. The latest version will always be posted on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }