import mitigating from "../images/mitigating.jpg";
import test from "../images/project.jpg"

export const projects = [
  {
    title: "Flavor Saver",
    category: "code",
    active: true,
    imageUrl: test,
    description:
      "• Developed a cooking application for iOS with two other CMU students. \n • Managed project timelines and tasks to ensure the team’s efficiency and success. \n • Developed robust front - end interfaces with Swift, focusing on functionality and user experience. ",    
    sourceCodeUrl: "https://github.com/jgao08/FlavorSaver",
  },
  {
    title: "Pittsburghers for Public Transit Website Improvement",
    category: "uiux",
    active: true,
    description:
      "Worked with a team of 2 to improve the Pittsburghers for Public Transit website, including increased calls to action, event list integration, and improved accessibility. ",
  },
  {
    title: "Mitigating Toxic Behaviors Instagram Feature",
    category: "uiux",
    active: true,
    description:
      "Worked with a team of 6 to create a few features to limit trolling and spam. Involved user research, wireframing, and prototyping.",
    sourceCodeUrl:
      "https://www.figma.com/proto/4tKa0IRr4iJ6KdWhGRVSj4/conTROLLers-Prototype?type=design&node-id=44-3228&t=QMQZL3149g1XWreD-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=44%3A3228&show-proto-sidebar=1&mode=design",
    embed: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4tKa0IRr4iJ6KdWhGRVSj4%2FconTROLLers-Prototype%3Ftype%3Ddesign%26node-id%3D44-3228%26t%3DQMQZL3149g1XWreD-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D44%253A3228%26show-proto-sidebar%3D1%26mode%3Ddesign" allowfullscreen></iframe>`,
    imageUrl: mitigating,
  },
  {
    title: "Activity Generator",
    category: "code",
    active: true,
    description: "Created a full stack application using a RESTful API...",
  },
  {
    title: "Great Pittsburgh Baking Outlet",
    category: "code",
    active: true,
    description: "Created a mock e-commerce application using Ruby on Rails...",
  },
  {
    title: "Cross Country Connections",
    category: "other",
    active: true,
    description:
      "Research project involving two physical boards with LED strips and an array of buttons connected via Arduino and the internet. ",
  },
  {
    title: "Clawcade",
    // cateogories are physical and code
    category: ["physical", "code"],
    active: false,
    description:
      "Digital claw machine with physical buttons with Arduino. Two participants are aiming to retrieve a prize, but the stuffed bears are attempting to stop the snatching. ",
  },
];
