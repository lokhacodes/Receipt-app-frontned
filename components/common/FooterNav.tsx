"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  DollarSign,
  ReceiptText,
  FileText,
  User,
  Plus,
  X,
} from "lucide-react";
import { useState } from "react";

export default function FooterNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menu = [
    {
      name: "Home",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Expenses",
      href: "/dashboard/expense",
      icon: ReceiptText,
    },
    {
      name: "Reports",
      href: "/dashboard/reports",
      icon: FileText,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
  ];

  return (
    <>
      {open && (
        <div className="footer-popup">
          <Link
            href="/dashboard/expense/create-expense"
            onClick={() => setOpen(false)}
            className="footer-popup-card"
          >
            <div className="footer-popup-icon footer-popup-icon-expense">
              <DollarSign size={22} />
            </div>

            <h3 className="footer-popup-title">
              Add Expense
            </h3>

            <p className="footer-popup-subtitle">
              Scan Receipt
            </p>
          </Link>

          <Link
            href="/dashboard/create-report"
            onClick={() => setOpen(false)}
            className="footer-popup-card"
          >
            <div className="footer-popup-icon footer-popup-icon-report">
              <FileText size={20} />
            </div>

            <h3 className="footer-popup-title">
              New Report
            </h3>

            <p className="footer-popup-subtitle">
              Submit Report
            </p>
          </Link>
        </div>
      )}

      <footer className="footer-nav">
        <button
          onClick={() => setOpen(!open)}
          className="footer-fab"
        >
          {open ? <X size={28} /> : <Plus size={30} />}
        </button>

        <div className="footer-nav-content">
          {menu.map((item, index) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`footer-nav-item ${
                  index === 1
                    ? "footer-nav-item-left"
                    : index === 2
                    ? "footer-nav-item-right"
                    : ""
                }`}
              >
                {active && (
                  <span className="footer-nav-active-line" />
                )}

                <Icon
                  size={23}
                  className={
                    active
                      ? "footer-nav-icon-active"
                      : "footer-nav-icon"
                  }
                />

                <span
                  className={
                    active
                      ? "footer-nav-text footer-nav-text-active"
                      : "footer-nav-text"
                  }
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </footer>
    </>
  );
}