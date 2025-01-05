import React from "react"
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs"

export default function Header() {
  return (
    <div className="container mx-auto max-w-[1200px] px-4 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 items-center">
        {/* Bagian Nama */}
        <div
          className="text-gradient font-secondary"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a href="/" aria-label="Home">
            <h1 className="text-[30px] leading-none font-bold">Portofolio</h1>
          </a>
        </div>

        {/* Bagian Ikon */}
        <div
          className="flex items-center space-x-4"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a
            href="https://www.instagram.com/muhammadravil2/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="text-xl text-pink-600 hover:text-pink-800 transition"
          >
            <BsInstagram />
          </a>
          <a
            href="https://wa.me/6281992589299"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="text-xl text-green-600 hover:text-green-800 transition"
          >
            <BsWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ravil-49a066319/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-xl text-blue-700 hover:text-blue-900 transition"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}
