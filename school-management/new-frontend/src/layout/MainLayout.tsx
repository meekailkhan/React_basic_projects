import React from "react";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default MainLayout;
