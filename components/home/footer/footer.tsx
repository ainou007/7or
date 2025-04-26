import React from "react";
import TopFooter from "./top-footer";

const Footer = () => {
  return (
    <footer className="mt-20 border-t">
      <TopFooter />
      <div className="border">
        <div className="container flex flex-col items-center justify-between py-5 text-center md:h-14 md:flex-row">
          <p>جميع الحقوق محفوظة © 2025</p>
          <div>
            تصميم وبرمجة:{" "}
            <a href="" target="_blank" rel="noopener noreferrer">
              عبد المنعم عينو{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
