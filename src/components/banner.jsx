import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-5 items-center"
    >
      <div className="w-full" data-aos="zoom-in">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello, I am
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Muhammad Ravil",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "IT Support",
                3000,
                "Web Developer",
                3000,
                "Machine Learning",
                3000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", display: "inline-block" }}
              className="ml-3 text-secondary"
            />
          </div>
        </div>
        <div className="max-w-[750px] text-center mx-auto mt-5">
          an IT enthusiast focusing on web development and IT support. I have
          experience in building user-friendly websites and managing technical
          systems. With a passion for learning and solving problems, I aim to
          create effective solutions that enhance productivity and user
          experience.
        </div>
      </div>
    </div>
  )
}
