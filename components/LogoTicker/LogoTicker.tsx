import React from "react";
import ntbLogo from "@/public/Ticker/ntb.png";
import nepgovLogo from "@/public/Ticker/nep-gov.png";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white ">
      <div className="container overflow-hidden">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex animate-ticker gap-14 flex-none">
            <Image src={ntbLogo} alt="NTB Logo" className="logo-ticker-image" />
            <Image
              src={nepgovLogo}
              alt="Nep gov Logo"
              className="logo-ticker-image"
            />
            <Image src={ntbLogo} alt="NTB Logo" className="logo-ticker-image" />
            <Image
              src={nepgovLogo}
              alt="Nep gov Logo"
              className="logo-ticker-image"
            />
            <Image src={ntbLogo} alt="NTB Logo" className="logo-ticker-image" />
            <Image
              src={nepgovLogo}
              alt="Nep gov Logo"
              className="logo-ticker-image"
            />
            <Image src={ntbLogo} alt="NTB Logo" className="logo-ticker-image" />
            <Image
              src={nepgovLogo}
              alt="Nep gov Logo"
              className="logo-ticker-image"
            />
            <Image src={ntbLogo} alt="NTB Logo" className="logo-ticker-image" />
            <Image
              src={nepgovLogo}
              alt="Nep gov Logo"
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
