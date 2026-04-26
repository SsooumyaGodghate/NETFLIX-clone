import React from "react";

const Footer = () => {
  return (
    <div className="mt-40 px-6 pb-12 text-[#737373] md:mt-52 md:px-10">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="mb-6 flex flex-wrap items-center justify-start gap-16 text-white">
            <a
              className="inline-flex"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" style={{ fontSize: 24 }}></i>
            </a>
            <a
              className="inline-flex"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook" style={{ fontSize: 24 }}></i>
            </a>
            <a
              className="inline-flex"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter" style={{ fontSize: 24 }}></i>
            </a>
            <a
              className="inline-flex"
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube" style={{ fontSize: 24 }}></i>
            </a>
          </div>
      <p className="pb-5">Questions? Contact us.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 text-sm pb-10 max-w-5xl">
        <ul className="flex flex-col space-y-2">
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>

        <ul className="flex flex-col space-y-2">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>

        <ul className="flex flex-col space-y-2">
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>

        <ul className="flex flex-col space-y-2">
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <p className="pt-2 text-sm text-red-600">@netflix copyright</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;