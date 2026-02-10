"use client";
import { UserButton } from "@clerk/nextjs";
import { Cookie, Refrigerator } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserDropdown = () => {
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          href="/recipes"
          label="My Recipes"
          labelIcon={<Cookie size={16} />}
        />
        <UserButton.Link
          href="/pantry"
          label="My Pantry"
          labelIcon={<Refrigerator size={16} />}
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserDropdown;
