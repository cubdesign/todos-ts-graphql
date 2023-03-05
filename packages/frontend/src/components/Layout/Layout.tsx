import React from "react";
import { Header } from "../Header";

export type LayoutProps = {
  children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="h-screen bg-gray-100 ">{children}</div>
    </>
  );
};
