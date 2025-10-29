import React from 'react';

function Contact() {
  return (
    //link the contact component with the button in the home component by using id="contact"
    <main id="contact" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:gap-20">
          
          {/* Left text section */}
          <div className="text-center lg:text-left lg:w-7/12 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
             Get in touch with me
            </h1>
            <p className="text-lg text-gray-700 lg:w-10/12">
              You can reach me via email at tholakelejiyana@gmail.com <br />
              Or mobile number at +27 79 632 940 <br />
                Alternatively, fill out the form to send me a message directly for a quote or inquiry.
            </p>
          </div>

          {/* Form section */}
          <div className="w-full max-w-md lg:w-5/12">
            <form className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-4">
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
