import React from "react";
// import Radio from "./Radio";
import Qualification from "./Qualification";

function About() {
  return (
    <div
      id="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl mb-5">About</h1>
        <p>
          Aspiring Web developer with a passion for creating visually stunning
          and user-friendly websites.
        </p>
        <br />

        {/* Education & Training Section */}
        <div>
          <Qualification />
          <h1 className="text-green-600 font-semibold text-xl">
            Education & Training
          </h1>
          <span>
            1. Mern FullStack Web Developer → Quality Software Technology → 2024
            <br />
            2. Bsc in Botany → Ramnirajan Junjunwala College → 2023
          </span>
          {/* <Radio /> */}
        </div>

        <br />

        {/* Skills & Expertise Section */}
        <div className="flex items-center justify-between gap-5 mb-10">
          <div>
            <h1 className="text-green-600 font-semibold text-xl">
              Skills & Expertise
            </h1>
            <span>
              1. Frontend Development: React.js, HTML5, CSS3, Tailwind CSS,
              Bootstrap
              <br />
              2. Backend Development: Node.js, Express.js, RESTful API design
              <br />
              3. Database: MongoDB, Mongoose ORM State Management: Redux,
              Context API
              <br />
              4. Control: Git, GitHub Deployment: Heroku, Vercel, Netlify, AWS,
              Cloudflare
              <br />
              5. Authentication: JWT, OAuth Testing: Jest, Postman, React
              Testing
              <br />
              6. Soft Skills: Problem-solving, effective communication,
              continuous learning
            </span>
          </div>
        </div>

        {/* Professional Experience */}
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          1. Developed and maintained web applications using the MERN stack
          (MongoDB, Express.js, React.js, Node.js).
          <br />
          2. Built RESTful APIs for seamless integration between frontend and
          backend, ensuring high performance and scalability.
          <br />
          3. Deployed applications to cloud platforms like Heroku, Vercel, and
          Netlify.
          <br />
          4. Managed version control using Git and GitHub, enabling efficient
          collaboration.
          <br />
          5. Optimized frontend performance using best practices in React.
        </span>
        <br />
        <br />

        {/* Achievements & Awards */}
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <a
            href="https://skillsoft.digitalbadges.skillsoft.com/46027e79-7200-4c19-a7f6-7ce675fd76ce#acc.4YPn61hg"
            target="_blank"
            className="text-red-600"
          >
            <strong>1. Web Development Basics</strong>
          </a>
          from Springboard (by Infosys).
          <br />
          <a
            href="https://skillsoft.digitalbadges.skillsoft.com/51441f46-7db9-4a4e-9622-a207bce0e5da#acc.xYakFzwR"
            target="_blank"
            className="text-red-600"
          >
            <strong>2. JavaScript Novice to Professional</strong>
          </a>{" "}
          course by Infosys Springboard.
        </span>
        <br />
        <br />

        {/* Mission Statement */}
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          As a <strong>MERN Full-Stack Web Developer</strong>, my mission is to
          create efficient, scalable, and user-centric web applications using
          MongoDB, Express.js, React.js, and Node.js.
        </p>
      </div>
    </div>
  );
}

export default About;
