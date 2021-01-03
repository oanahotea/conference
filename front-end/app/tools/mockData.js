const meetings = [
  {
    id: 1,
    name: "Meeting 1",
    slug: "react-auth0-authentication-security",
    speakerId: 1,
    date: "22-02-2020",
  },
  {
    id: 2,
    name: "React: The Big Picture",
    slug: "react-big-picture",
    speakerId: 1,
    date: "22-03-2020",
  },
  {
    id: 3,
    name: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    speakerId: 1,
    date: "22-03-2020",
  },
  {
    id: 4,
    name: "Building a 22-03-2020 Development Environment",
    slug: "22-03-2020-development-environment",
    speakerId: 1,
    date: "22-03-2020",
  },
  {
    id: 5,
    name: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    speakerId: 1,
    date: "22-03-2020",
  },
  {
    id: 6,
    name: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    speakerId: 1,
    date: "22-03-2020",
  },
  {
    id: 7,
    name: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    speakerId: 1,
    date: "Software Practices",
  },
  {
    id: 8,
    name: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    speakerId: 1,
    date: "Software Architecture",
  },
  {
    id: 9,
    name: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    speakerId: 1,
    date: "Career",
  },
  {
    id: 10,
    name: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    speakerId: 1,
    date: "HTML5",
  },
];

const speakers = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newSession = {
  session_name: "",
  session_description: "",
  session_length: 5,
  deleted: null,
  speaker: {},
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newSession,
  meetings,
  speakers,
};
