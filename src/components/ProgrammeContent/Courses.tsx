import { Grid, Box, Typography } from "@mui/material";
import { colors } from "../../assets/images/colors";
import Course from "./Course";
export const FirstYearCourses = [
  {
    title: "Term I",
    topics: [
      "Organisational Behaviour",
      "Financial Accounting",
      "Financial Markets",
      "Microeconomics",
      "Statistics I",
      "Mathematical Foundations",
      "Introduction to Excel and SQL",
      "Programming in R",
    ],
  },
  {
    title: "Term II",
    topics: [
      "Marketing Management",
      "Operations and Supply Chain",
      "Management",
      "Entrepreneurship",
      "Design Thinking and Innovation",
      "Decision Modelling",
      "Statistics II Management",
      "Information Systems",
      "Introduction to Business Analytics with Python",
    ],
  },
  {
    title: "Term III",
    topics: [
      "People Management in Organisations",
      "Strategic Management",
      "Corporate Finance",
      "Marketing Research",
      "Data Visualisation",
      "Data Science and Machine Learning",
      "Econometrics",
    ],
  },
];
export const SecondYearCourses = [
  {
    title: "Term IV",
    topics: [
      "Multivariate Data Analysis",
      "Data Management and Big Data",
      "IT for Business",
      "Electives",
      "Electives",
      "Industry Workshop (one)",
    ],
  },
  {
    title: "Term V",
    topics: [
      "Electives",
      "Electives",
      "Capstone Project (Part I)",
      "Industry Workshop (one)",
    ],
  },
  {
    title: "Term VI",
    topics: [
      "Electives",
      "Electives",
      "Simulation and Games",
      "Industry Workshop (one)",
      "Capstone Project (Part II)",
    ],
  },
];

export const TentativeList = [
  {
    title: "Analytics",
    topics: ["Infographics", "Healthcare Analytics", "Sports Analytics"],
  },
  {
    title: "Accounts & Finance",
    topics: [
      "Financial Analytics",
      "Digital Finance",
      "Financial Derivatives",
      "Financial Econometrics",
    ],
  },
  {
    title: "Communication",
    topics: [
      "Corporate Communication and Crisis Management",
      "Content Development Strategy for Social Media Campaigns",
    ],
  },
  {
    title: "Economics",
    topics: [
      "Spatial Data Science",

      "Trade Analytics and Exports-Imports",
      "Business Analytics for Public Policy",
      "Applications of Game Theory",
    ],
  },
  {
    title: "Information Technology & Systems",
    topics: [
      "Information Technology Project Management",
      "Information Technology Product Management",
      "Social Media and Web Analytics",
      "Artificial Intelligence and Deep Learning",
      "Image Analytics and Computer Vision",
      "Robotics Process Automation",
      "Cloud Computing Reinforcement Learning",
    ],
  },
  {
    title: "Operations Management & Decision Sciences",
    topics: [
      "Logistics Management",
      "Quality Management and Six Sigma",
      "Strategic Sourcing Management",
      "Management of Technology",
      "Advanced Managerial Decision Analysis",
      "Supply Chain Analytics",
      "Fuzzy Logic for Decision-making",
      "Nature-inspired Techniques for Decision-making",
      "Combinatorial Optimisation and Graph Theory",
    ],
  },
  {
    title: "Organisation Behaviour & Human Resource",
    topics: [
      "Negotiation and Conflict Management",
      "Power and Politics",
      "HR Analytics",
      "Leading Innovation in the Age of Digital Disruption",
    ],
  },
  {
    title: "Marketing",
    topics: [
      "Marketing",
      "Consumer Behaviour",
      "Pricing Management",
      "Retail Management",
      "Marketing Analytics",
      "Digital Marketing",
    ],
  },
  {
    title: "Strategy",
    topics: [
      "Strategies for Emerging",
      "Markets Management Consulting",
      "International Business",
    ],
  },
];
export function FirstYearCourse() {
  return <Course Courses={FirstYearCourses} />;
}
export function SecondYearCourse() {
  return <Course Courses={SecondYearCourses} />;
}
export function TentativeListComponent() {
  return <Course Courses={TentativeList} />;
}
