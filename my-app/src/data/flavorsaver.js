import React from "react";
// import flavorSaverImg1 from "../images/flavorsaver.mp4";
import flavorSaverImg2 from "../images/Flavor Saver Poster.png";

const flavorSaverDetails = () => {
  return (
    <div className="my-5">
      <div className="mb-4">
        <h2>Project Overview</h2>
        <p>
          Flavor Saver is a revolutionary cooking app designed to make cooking
          easier for everyday chefs and students. It integrates recipes from
          various sources, allowing users to access their favorite creators'
          recipes in one place. The app was developed based on extensive user
          feedback and unique ideas from the team, focusing on the most
          sought-after features in a cooking app.
        </p>
      </div>

      <div className="mb-4">
        <h2>Target Audience</h2>
        <p>
          Our primary audience includes students and everyday chefs who
          frequently encounter recipes from diverse sources and seek a unified
          platform to manage their culinary exploration.
        </p>
      </div>

      <div className="mb-4">
        <h2>Key Features</h2>
        <ul>
          <li>Recipe recommendations based on user preferences.</li>
          <li>User and creator profiles for personalized experiences.</li>
          <li>Advanced search by ingredient, recipe, or cuisine.</li>
          <li>Voice-controlled Cooking Mode for step-by-step guidance.</li>
          <li>Customizable folders to save and organize recipes.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2>Design and User Experience</h2>
        <p>
          The app features a minimalist design, mirroring the aesthetic of the
          iPhone's photos app, to keep the focus on the cooking experience.
        </p>
      </div>

      <div className="mb-4">
        <h2>Technology Used</h2>
        <ul>
          <li>SwiftUI and Swift for iOS app development.</li>
          <li>Figma for UI/UX design.</li>
          <li>Firebase for backend services.</li>
          <li>Spoonacular API for recipe data.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2>Challenges and Solutions</h2>
        <p>
          The team, new to Swift, faced the challenge of a competitive cooking
          app market. This was addressed by adopting a user-centric development
          approach, focusing on the features most desired by the target
          audience.
        </p>
      </div>
    </div>
  );
}

export const flavorSaver = {
  title: "Flavor Saver",
  category: ["code"],
  active: true,
  imageUrl: flavorSaverImg2,
  // videoURL: flavorSaverImg1,
  description:
    "I collaborated with CMU students to develop an iOS cooking application, managing project timelines and tasks, and creating robust front-end interfaces with Swift for optimal user experience.",
  sourceCodeUrl: "https://github.com/jgao08/FlavorSaver",
  course: "67-443 Mobile Application Development",
  details: flavorSaverDetails,
};
