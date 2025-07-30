import React from "react";
import { expertise } from "../../content_option";
import "./style.css";

const ExpertiseSection = () => {
  return (
    <section className="py-4">
      <h3 className="color_sec py-4">Technologies & Expertise</h3>
      <ul className="expertise-list">
        {expertise.map((item, index) => (
          <li key={index}>
            <strong>{item.category}:</strong> {item.tools}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExpertiseSection;