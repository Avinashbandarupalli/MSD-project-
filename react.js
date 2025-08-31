import React from "react";

export default function Login() {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute w-full h-full bg-white bg-opacity-70"></div>

      {/* Login Container */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg w-80 text-center z-10">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Login to YouTube Summarizer
        </h2>

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-sm focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-sm focus:outline-none"
        />

        <button className="w-full p-3 bg-red-500 text-white text-base font-medium rounded-lg hover:bg-red-600 transition">
          Login
        </button>

        {/* Divider */}
        <div className="relative my-5 text-gray-500 text-sm">
          <span className="bg-white px-2 relative z-10">OR</span>
          <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 -z-0"></div>
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 border border-gray-300 p-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Logo"
              className="w-5"
            />
            Login with Google
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-300 p-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
              alt="Facebook Logo"
              className="w-5"
            />
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}