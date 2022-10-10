import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface LayoutProps {
  tab?: string;
  hasSidebar?: boolean;
  children: React.ReactNode;
}

const Layout = ({ tab, children, hasSidebar = false }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex flex-auto flex-col md:flex-row md:max-h-[92vh]">
      {hasSidebar && <Sidebar activeTab={tab} />}
      <div className="flex flex-auto flex-col md:flex-row md:w-11/12 border border-slate-200">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
