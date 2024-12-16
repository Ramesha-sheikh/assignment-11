import React from 'react';
import Navbar from '@/components/Navbar';

const Page = () => {
  const navData = {
    logo: 'FashionHub',
    list: [
      { text: 'Home', href: '/home' },
      { text: 'About', href: '/about' },
      { text: 'Services', href: '/services' },
      { text: 'Contact Us', href: '/contact-us' },
    ],
    button: 'Sign Up',
  };

  return (
    <div>
      {/* Passing navData to the Navbar component */}
      <Navbar 
      logo={navData.logo} 
      list={navData.list} 
       />
    </div>
  );
};

export default Page;
