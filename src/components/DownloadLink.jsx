// src/components/DownloadLink.js
import React from 'react';

const DownloadLink = () => {
  return (
    <a
      href="/Prince_Resume.pdf" // Ensure this path is correct
      download="Prince_Resume.pdf"
      className="bg-[#915EFF] text-white py-2 px-4 rounded-full shadow-lg hover:bg-[#7a4bcc] transition duration-300 cursor-pointer"
    >
     Resume
    </a>
  );
};

export default DownloadLink;
