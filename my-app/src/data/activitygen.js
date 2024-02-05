import React from 'react'

export const activitygenDetails = () => {
  return (
    <div className="my-5">
      <div className="mb-4">
        <h2>Project Overview</h2>
        <p>
          The Activity Generator is a web application designed to suggest
          activities to users based on their preferences and available
          resources. It addresses the common problem of finding new and
          interesting things to do during free time. By inputting parameters
          such as available time, interests, and materials at hand, users
          receive tailored activity suggestions to enhance their leisure time.
        </p>
      </div>

      <div className="mb-4">
        <h2>My Role and Contributions</h2>
        <p>
          As the sole developer on this project, I was responsible for the
          entire web application development lifecycle. This included designing
          the user interface with HTML, CSS, and JavaScript, and implementing
          the backend logic to communicate with an external API for activity
          data. Utilizing jQuery significantly streamlined the process of making
          API requests and manipulating the DOM based on user input.
        </p>
      </div>

      <div className="mb-4">
        <h2>Technologies and Tools Used</h2>
        <p>
          The project was built using a combination of technologies including
          HTML, CSS, JavaScript, and jQuery for frontend development, and a
          backend that communicates with an external API for fetching activity
          suggestions.
        </p>
      </div>

      <div className="mb-4">
        <h2>Challenges and Solutions</h2>
        <p>
          One of the main challenges was my initial unfamiliarity with
          JavaScript and jQuery. Through dedicated learning and application
          development, I was able to overcome these hurdles and gain a
          comprehensive understanding of full-stack development, enhancing my
          skills in both frontend and backend web development.
        </p>
      </div>

      <div className="mb-4">
        <h2>Project Results</h2>
        <p>
          The Activity Generator was successfully developed and functioned as
          intended, providing users with personalized activity suggestions.
          Although the project is not yet deployed, it served as a significant
          learning experience in full-stack application development. The
          deployment is planned for the near future.
        </p>
      </div>

      {/* Additional information such as project duration, team size, etc. */}
      <div className="mb-4">
        <h2>Additional Information</h2>
        <p>
          This project was a solo endeavor completed over the course of one
          semester (approximately 5 months), as part of the 67-328 Full Stack
          Application and Development course. It was an invaluable experience
          that significantly contributed to my growth as a full-stack developer.
        </p>
      </div>
    </div>
  );
}


export const activitygen = {
  title: "Activity Generator",
  category: ["code"],
  active: true,
  course: "67-328 Full Stack Application and Development",
  description: "The \"Activity Generator\" is a web app I developed to suggest personalized activities to users based on their preferences. Using HTML, CSS, JavaScript, and jQuery, I built this full-stack project in 5 months, enhancing my skills in web development.",
  details: activitygenDetails,
};