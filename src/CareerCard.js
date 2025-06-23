import React from "react";
import Lottie from "lottie-react";
import defaultAnimation from "./defaultLottie.json"; // Place a default Lottie JSON in src

const lottieMap = {
  "Software Engineer": defaultAnimation,
  "Data Scientist": defaultAnimation,
  "Graphic Designer": defaultAnimation,
  "Business Analyst": defaultAnimation,
  "Marketing Specialist": defaultAnimation,
  "Financial Analyst": defaultAnimation,
  "Healthcare Administrator": defaultAnimation,
  "Teacher / Educator": defaultAnimation,
  "General Consultant": defaultAnimation
};

const CareerCard = ({ title, description, skills, salary, outlook, resources }) => (
  <div className="career-card">
    <div className="career-card-header">
      <Lottie
        animationData={lottieMap[title] || defaultAnimation}
        loop
        style={{ height: 60, width: 60, marginBottom: 8 }}
      />
      <h3>{title}</h3>
    </div>
    <div className="career-card-body">
      <p>{description}</p>
      <div className="career-meta">
        <div><strong>Skills:</strong> {skills && skills.length > 0 ? skills.join(", ") : "-"}</div>
        {salary && <div><strong>Salary:</strong> {salary}</div>}
        {outlook && <div><strong>Outlook:</strong> {outlook}</div>}
      </div>
      <div className="career-resources">
        <strong>Resources:</strong>
        <ul>
          {resources && resources.map((res, i) => (
            <li key={i}><a href={res.url} target="_blank" rel="noopener noreferrer">{res.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default CareerCard; 