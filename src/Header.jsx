import React from 'react';

function Header() {
  return (
    <header className="bg-[#131921] text-white text-sm flex items-center justify-between px-4 py-2">
      {/* Left - Logo and Location */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-orange-400">amazon.ca</div>
        <div className="flex items-center space-x-1 text-xs">
          <span className="material-icons">location_on</span>
          <div>
            <p className="text-gray-300">Delivering to</p>
            <p className="font-bold">Calgary T2T</p>
          </div>
        </div>
      </div>

      {/* Right - Info */}
      <div className="flex items-center space-x-6 text-xs">
        <div className="flex items-center">
          <img
            src="https://flagcdn.com/16x12/ca.png"
            alt="Canada Flag"
            className="mr-1"
          />
          EN
        </div>
        <div>
          <p>Hello, sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>
        <div>
          <p>Returns</p>
          <p className="font-bold">& Orders</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
