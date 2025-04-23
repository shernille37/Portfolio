"use client";

import { useState } from "react";
import Image from "next/image";

export default function LightBox({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className="w-32 cursor-pointer rounded shadow"
        onClick={() => setIsOpen(true)}
        width={150}
        height={80}
      />

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-secondary bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <Image
            width={1000}
            height={1000}
            src={src}
            alt={alt}
            className="animate-fade-in max-w-[90%] max-h-[90%] rounded shadow-lg duration-300"
          />
        </div>
      )}
    </div>
  );
}
