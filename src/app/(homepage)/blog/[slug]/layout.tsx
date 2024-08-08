"use client";
import { useState } from "react";
import { LogoutButton } from "@/components/custom/LogoutButton";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return <div>{children}</div>;
}
