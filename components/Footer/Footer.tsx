import React from "react";
import Link from "next/link";
import { footerData } from "@/constants/constant";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-12">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Activities and Trip Style */}
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-surface-dark">
              {footerData.activitiesAndStyle.title}
            </h2>

            <div className="grid grid-cols-2 gap-8">
              {footerData.activitiesAndStyle.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-content mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <Link
                          href={link.href}
                          className="text-content hover:text-primary-dark transition-colors"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-surface-dark mb-6">
              {footerData.company.title}
            </h2>
            <ul className="space-y-2">
              {footerData.company.links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-content hover:text-primary-dark transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold text-surface-dark mb-4">
              Subscribe Newsletter
            </h2>
            <p className="text-content mb-4">
              To receive tour packages, news, updates, departures and offers via
              email.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First name*"
                className="w-full px-4 py-2 rounded-lg border border-primary  focus:border-warm-dark focus:ring-1 focus:ring-primary-dark outline-none"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="w-full px-4 py-2 rounded-lg border border-primary focus:border-warm-dark focus:ring-1 focus:ring-primary-dark outline-none"
              />
              <input
                type="email"
                placeholder="Email ID*"
                className="w-full px-4 py-2 rounded-lg border border-primary focus:border-warm-dark focus:ring-1 focus:ring-primary-dark outline-none"
              />
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded-lg transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-warm-light py-8 flex items-center justify-between gap-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {footerData.contactInfo.regions.map((region) => (
              <div key={region.name} className="flex items-center gap-3">
                <span className="text-2xl">{region.flag}</span>
                <div>
                  <p className="text-sm text-content-muted">{region.name}</p>
                  <p className="text-content font-semibold">{region.phone}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <Facebook className="w-6 h-6 text-content hover:text-primary-dark cursor-pointer" />
            <Twitter className="w-6 h-6 text-content hover:text-primary-dark cursor-pointer" />
            <Instagram className="w-6 h-6 text-content hover:text-primary-dark cursor-pointer" />
            <Youtube className="w-6 h-6 text-content hover:text-primary-dark cursor-pointer" />
            <Linkedin className="w-6 h-6 text-content hover:text-primary-dark cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright and Payment Methods */}
      <div className="bg-primary-dark text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} - G.B Travels Inc. RE-PRODUCED OR
              COPY OF ANY PORTION OF THIS WEBSITE IS STRICTLY PROHIBITED.
            </p>
            {/* <div className="flex gap-2">
              {footerData.paymentMethods.map((method) => (
                <div
                  key={method}
                  className="w-10 h-6 bg-white rounded flex items-center justify-center text-xs text-primary-dark"
                >
                  {method}
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
