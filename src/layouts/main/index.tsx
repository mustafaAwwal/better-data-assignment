import { FC, ReactNode, useState } from "react";
import { Header, SideNav } from "../../components";

export const MainLayout: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[min-content_1fr]">
      <SideNav open={sideNavOpen} onClose={() => setSideNavOpen(false)} />
      <div>
        <Header onHamburgerClick={() => setSideNavOpen(true)} />
        <div className={`p-4 ${className}`}>{children}</div>
      </div>
    </div>
  );
};
