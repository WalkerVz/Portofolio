import React from "react"

export default function header() {
  return (
    <div id="portofolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
        <div
          className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="order-2 lg:order-1 mt-5">
            <h4 className="text-secondary font-secondary text-[24px]">
              Recent work
            </h4>
            <div className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
              Showcase of the projects I’ve worked on during my time at
              university and internships.
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px]">
              03
            </h2>
            <div>Completed Project</div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center"
          data-aos="fade-right"
          data-aos-easing="fade-down"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/image3.png" alt="Project 1" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h4 className="text-gradient">Badminton Court Rental</h4>
                  </div>
                  <p>
                    Developed a web-based badminton court rental system with a
                    user-friendly interface using HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/image.png" alt="Project 2" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h4 className="text-gradient">
                      Sistem Informasi Dinas ATR/BPN
                    </h4>
                  </div>
                  <p>
                    Assisted in maintaining and developing a web-based
                    information system for the Dinas ATR/BPN Pekanbaru during my
                    internship.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/image1.png" alt="Project 3" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h4 className="text-gradient">
                      Sentiment Classification System
                    </h4>
                  </div>
                  <p>
                    Developed a sentiment classification system using Naive
                    Bayes and Particle Swarm Optimization (PSO) as part of my
                    thesis project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
