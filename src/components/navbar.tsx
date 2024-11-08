import React from "react";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-[90px] top-0 flex justify-center items-center">
      <Link href={"/"}>
        <Image src="/Hlogo.png" alt="hlogo" width={70} height={70}></Image>
      </Link>
      <h1 className="text-2xl ">Hlogger.</h1>
    </div>
  );
}
