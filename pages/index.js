import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <p>Home Page</p>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default Home;
