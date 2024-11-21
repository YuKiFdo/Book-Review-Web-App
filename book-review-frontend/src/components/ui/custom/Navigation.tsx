'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {

    setIsAuthenticated(true);
  }, []); 

  const handleLogout = () => {
    setIsAuthenticated(false); 
    setMenuOpen(false); 
  };

  return (
    <nav className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">
            <svg
              width="35"
              height="31"
              viewBox="0 0 35 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7523 30.6702C16.559 29.7503 15.2744 29.0082 13.8986 28.4439C12.5227 27.8793 11.0838 27.597 9.58192 27.597C8.59179 27.597 7.62341 27.7321 6.67676 28.0024C5.73037 28.2726 4.81653 28.6396 3.93524 29.1032C3.22495 29.4705 2.52952 29.4546 1.84896 29.0556C1.16865 28.6569 0.828491 28.0708 0.828491 27.2974V9.57564C0.828491 9.1108 0.934261 8.67568 1.1458 8.27029C1.35734 7.8649 1.67452 7.55914 2.09736 7.35301C3.25529 6.77736 4.45548 6.35244 5.69794 6.07825C6.94014 5.8043 8.21392 5.66733 9.51927 5.66733C10.972 5.66733 12.3872 5.8516 13.7648 6.22013C15.1424 6.58867 16.4507 7.16235 17.6897 7.94119V26.4656C18.9427 25.6934 20.2501 25.0898 21.612 24.655C22.9741 24.2201 24.3692 24.0027 25.7974 24.0027C26.6819 24.0027 27.5514 24.0868 28.4059 24.2551C29.2607 24.4234 30.111 24.655 30.9569 24.9498V6.42688C31.3532 6.54973 31.7504 6.68916 32.1484 6.84517C32.5462 7.00118 32.9379 7.17046 33.3237 7.35301C33.7605 7.53138 34.0742 7.83026 34.2649 8.24965C34.4555 8.6688 34.5509 9.1108 34.5509 9.57564V27.6099C34.5509 28.3275 34.2142 28.8512 33.5407 29.1809C32.8673 29.5104 32.1684 29.4845 31.4441 29.1032C30.5628 28.6396 29.649 28.2726 28.7026 28.0024C27.756 27.7321 26.7876 27.597 25.7974 27.597C24.3233 27.597 22.9087 27.8827 21.5538 28.4542C20.1988 29.0257 18.9316 29.7643 17.7523 30.6702ZM20.638 22.6538V7.94119L28.0086 0.424561V15.8533L20.638 22.6538Z"
                fill="#F1F8FF"
              />
            </svg>
          </span>
          <span className="font-semibold text-xl">LitLens</span>
        </Link>
        {isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white font-medium flex items-center gap-2"
            >
              <Image
                src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />

            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#333] p-3 rounded-md shadow-lg">
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-white"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login" className="text-white font-medium">
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}
