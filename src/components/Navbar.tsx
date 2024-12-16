import React from 'react';
import Link from 'next/link';

interface NavData {
  logo: string;
  list: { text: string; href: string }[]; // Array of objects with text and href for links

}

const Navbar = ({ logo, list = [] }: NavData) => {
  return (
    <div>
      <header className="bg-black grid grid-cols-[1fr,auto,1fr] items-center text-white px-8 py-4 gap-8">
        {/* Logo Section */}
        <div className="text-start">
          <h1 className="text-xl font-bold text-orange-400">{logo}</h1> {/* Logo styled */}
        </div>

        {/* Navigation Section */}
        <nav>
          <ul className="grid grid-cols-4 gap-4 text-center">
            {list.map((link, index) => (
              <li key={index} className="hover:text-gray-400">
                <Link href={link.href} className="text-lg">
                {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

       
      </header>
    </div>
  );
};

export default Navbar;
