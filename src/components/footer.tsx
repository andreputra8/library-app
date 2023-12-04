import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">
          <p>
            &copy; {new Date().getFullYear()} Library App.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
