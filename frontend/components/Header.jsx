import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0  w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
      <nav className="container mx-auto px-4 h-16 flex justify-between items-center">
        logo
        <div>nav links</div>
        <div className="flex items-center space-x-4">
          {/* Show the user button when the user is signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* when signed out  */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium cursor-pointer"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button
                variant="primary"
                className="rounded-full px-6 cursor-pointer"
              >
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
