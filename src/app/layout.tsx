'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animateToCenter, setAnimateToCenter] = useState(false);

  useEffect(() => {
    if (pathname === '/MyStory') {
      setAnimateToCenter(true);
    } else {
      setAnimateToCenter(false);
    } 
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className={`hidden 2xl:fixed 2xl:block z-50 transition-all duration-700
        ${animateToCenter ? 'top-30 p-20 ml-40 font-normal text-3xl text-white' : 'text-white text-7xl top-0 left-0 p-20 ml-40 opacity-0 font-bold w-1/2'}`}>
          <div className="relative h-max mb-10">
            <div className={`absolute transition-all ${animateToCenter ? 'left-0 top-0 duration-1000 delay-500' : 'left-0 top-0 duration-500'}`}>
              Darrel
            </div>
            <div className={`absolute transition-all ${animateToCenter ? 'left-22 top-0 opacity-100 duration-1000 delay-500' : 'left-0 top-18 opacity-500 duration-500'}`}>
              Gautama
            </div>
          </div>
      </div>
        {children}
      </body>
    </html>
  );
}
