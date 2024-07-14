import React from "react";
import mitigatingImg from "../images/mitigating.jpg";

const mitigatingDetails = () => {
  return (
    <div className="my-5">
      <div className="mb-4">
        <h2>Project Overview</h2>
        <p>
          This project aimed to limit toxic behaviors on Instagram by
          introducing design prototypes to reduce trolling and spam. Our goal
          was to create a safer and more welcoming environment for users by
          implementing strategic features that encourage positive interactions
          and content moderation.
        </p>
      </div>

      <div className="mb-4">
        <h2>My Role and Contributions</h2>
        <p>
          My primary responsibility in this project was conducting user research
          to understand the nuances of toxic behavior on the platform and
          ideating solutions. I also designed and prototyped badges using Figma.
          These badges were part of a feature to promote user moderation, akin
          to Reddit karma, where users earn badges as achievements for their
          contributions to maintaining a positive community atmosphere.
        </p>
      </div>

      <div className="mb-4">
        <h2>Technologies and Tools Used</h2>
        <p>
          The main tool I used for designing and prototyping the features was
          Figma, which facilitated the creation of interactive design prototypes
          to visualize our concepts effectively.
        </p>
      </div>

      <div className="mb-4">
        <h2>Project Results</h2>
        <p>
          We developed three key features to foster a better environment for
          Instagram users:
        </p>
        <ul>
          <li>
            <strong>Content Warning Tags:</strong> Tags to inform users about
            the nature of sensitive content, allowing them to make an informed
            choice about viewing it.
          </li>
          <li>
            <strong>User Moderation Badges:</strong> A system where users earn
            badges for actively moderating content, encouraging a
            community-driven approach to maintain a positive space.
          </li>
          <li>
            <strong>Comment Section Filtering:</strong> Enhanced comment
            filtering options, allowing users to tailor their interaction by
            filtering comments based on their network or preferences.
          </li>
        </ul>
      </div>

      {/* Additional sections or information can be added here */}
    </div>
  );
}


export const mitigating = {
  title: "Mitigating Toxic Behaviors Instagram Feature",
  category: ["uiux"],
  active: true,
  description:
    "Worked with a team of 6 to create a few features to limit trolling and spam. Involved user research, wireframing, and prototyping.",
  sourceCodeUrl:
    "https://www.figma.com/proto/4tKa0IRr4iJ6KdWhGRVSj4/conTROLLers-Prototype?type=design&node-id=44-3228&t=QMQZL3149g1XWreD-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=44%3A3228&show-proto-sidebar=1&mode=design",
  embed: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4tKa0IRr4iJ6KdWhGRVSj4%2FconTROLLers-Prototype%3Ftype%3Ddesign%26node-id%3D44-3228%26t%3DQMQZL3149g1XWreD-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D44%253A3228%26show-proto-sidebar%3D1%26mode%3Ddesign" allowfullscreen></iframe>`,
  imageUrl: mitigatingImg,
  details: mitigatingDetails,
  course: "05-320 Social Web",
};