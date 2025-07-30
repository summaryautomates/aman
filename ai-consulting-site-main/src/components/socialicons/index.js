import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaCircle
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  facebook: FaFacebookF,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  snapchat: FaSnapchatGhost,
  tiktok: FaTiktok,
  twitter: FaTwitter,
  twitch: FaTwitch,
  youtube: FaYoutube
};

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {/* Render the Resume button first if available */}
        {socialprofils.resume && (
          <li>
            <a href={socialprofils.resume} download target="_blank" rel="noopener noreferrer">
              <button className="resume-btn">CV</button>
            </a>
          </li>
        )}

        {/* Render other social media icons */}
        {Object.entries(socialprofils).map(([platform, url]) => {
          if (platform === "resume") return null; // Skip rendering the resume in icon format

          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          return (
            <li key={platform}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};