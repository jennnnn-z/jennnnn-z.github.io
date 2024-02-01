import React from 'react'

const pptDetails = () => {
  return (
    <div className="my-5">
      <div className="mb-4">
        <h2>Project Overview</h2>
        <p>As part of a team of three, I worked on enhancing the Pittsburghers for Public Transit website. Our focus was on increasing user engagement through calls to action, integrating an event list, and improving overall website accessibility.</p>
      </div>

      <div className="mb-4">
        <h2>My Role and Contributions</h2>
        <p>I was primarily responsible for integrating the event list into the website using WordPress. This task involved collaborating with EveryAction, the platform where the client managed their data and calendar events. I faced challenges with displaying the events in a calendar format on the website, requiring negotiations and creative problem-solving with the client due to limitations of EveryAction. Additionally, I played a significant role in drafting the proposal for the client, outlining our team's planned improvements to the website.</p>
      </div>

      <div className="mb-4">
        <h2>Technologies and Tools Used</h2>
        <p>Throughout the project, I utilized WordPress for website development and integration, and EveryAction for managing and accessing event data.</p>
      </div>

      <div className="mb-4">
        <h2>Challenges and Solutions</h2>
        <p>The primary challenge was the integration of the event list due to limitations with EveryAction's format compatibility. Additionally, early team dynamics presented challenges in collaboration. We overcame this by dividing the project into smaller, individual components, allowing each team member to focus on specific aspects of the solution. This approach not only resolved the team collaboration issue but also streamlined our workflow, leading to a more efficient project execution.</p>
      </div>

      {/* Include any additional sections or information if needed */}
    </div>
  )
}


export const ppt = {
  title: "Pittsburghers for Public Transit Website Improvement",
  category: ["uiux"],
  active: true,
  description:
    "Worked with a team of 2 to improve the Pittsburghers for Public Transit website, including increased calls to action, event list integration, and improved accessibility. ",
  details: pptDetails,
};