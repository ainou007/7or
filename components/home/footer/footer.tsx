import React from "react";
import TopFooter from "./top-footer";

const Footer = () => {
  return (
    <footer className="mt-20 border-t">
      <TopFooter />
      <div className="border">
        <div className="container flex h-14 items-center justify-between text-center">
          <p>جميع الحقوق محفوظة © 2025</p>
          <div>
            تصميم وبرمجة:{" "}
            <a href="" target="_blank" rel="noopener noreferrer">
              أحمد محمد
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
