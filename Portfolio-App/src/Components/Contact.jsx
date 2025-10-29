import React from 'react';

function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:gap-20">
          
          {/* Left text section */}
          <div className="text-center lg:text-left lg:w-7/12 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Vertically centered hero sign-up form
            </h1>
            <p className="text-lg text-gray-700 lg:w-10/12">
              Below is an example form built entirely with form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
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
                <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="mb-4 flex items-center">
                <input type="checkbox" id="remember" className="mr-2"/>
                <label htmlFor="remember" className="text-gray-700">Remember me</label>
              </div>

              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-4">
                Sign up
              </button>

              <hr className="my-4 border-gray-300" />
              <small className="text-gray-500">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
