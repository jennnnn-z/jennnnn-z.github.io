import React from "react";

const gpboDetails = () => {
  return (
    <div className="container my-5">

      <div className="mb-4">
        <h2>Project Overview</h2>
        <p>
          This project was undertaken with the goal of learning Ruby on Rails
          and understanding the MVC (Model-View-Controller) structure of
          application development. I developed the Great Pittsburgh Baking
          Outlet application from scratch, focusing on creating an intuitive and
          functional web application.
        </p>
      </div>

      <div className="mb-4">
        <h2>My Role and Contributions</h2>
        <p>
          As the sole developer, I was responsible for the entire development
          process of the application, including designing the model, view, and
          controllers. This project allowed me to deeply engage with Ruby on
          Rails, applying its conventions to build a comprehensive web
          application.
        </p>
      </div>

      <div className="mb-4">
        <h2>Technologies and Tools Used</h2>
        <p>
          The project was developed using Ruby on Rails, leveraging its powerful
          framework to understand and implement MVC architecture effectively.
        </p>
      </div>

      <div className="mb-4">
        <h2>Challenges and Solutions</h2>
        <p>
          The main challenge I encountered was debugging complex issues. I
          tackled these problems by researching solutions online and applying
          them to my project, which significantly enhanced my problem-solving
          and debugging skills.
        </p>
      </div>

      <div className="mb-4">
        <h2>Project Results and Impact</h2>
        <p>
          Completing the Great Pittsburgh Baking Outlet project successfully
          taught me the intricacies of MVC architecture and solidified my
          understanding of Ruby on Rails, preparing me for more advanced
          software development projects.
        </p>
      </div>

      <div className="mb-4">
        <h2>Additional Information</h2>
        <p>
          This was a solo project completed over one semester as part of the
          67-272 Application Design and Development course, marking a
          significant milestone in my journey as a developer.
        </p>
      </div>
    </div>
  );
}

export const gpbo = {
  title: "Great Pittsburgh Baking Outlet",
  category: ["code"],
  active: true,
  course: "67-272 Application Design and Development",
  description: "Developed a Ruby on Rails application to understand MVC architecture, handling all aspects of model, view, and controller design. Overcame debugging challenges through research, significantly enhancing my problem-solving skills. The project, completed solo over a semester, solidified my grasp of Ruby on Rails within a practical application setting.",
  details: gpboDetails,
};