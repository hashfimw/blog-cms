import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex lg:flex-wrap justify-between items-center mx-auto lg:max-w-[1200px] h-[60px] lg:p-4 p-2">
      {children}
    </div>
  );
}
