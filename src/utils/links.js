import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { IoCodeWorking } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const link = [
  {
    url: "/",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    url: "/projects",
    text: "Progetti",
    icon: <IoCodeWorking />,
  },
  {
    url: "/contact",
    text: "Contattami",
    icon: <IoIosContacts />,
  },
];

const LinkComponent = ({ classLink }) => {
  const { closeSidebar } = useGlobalContext();
  return (
    <ul className={classLink}>
      {link.map((link) => {
        return (
          <Link
            key={link.text}
            to={link.url}
            className="nav-items"
            onClick={closeSidebar}
          >
            <div className="nav-link">
              {link.icon}
              <h5 className="nav-text">{link.text}</h5>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

const socialLink = [
  {
    url: "https://www.linkedin.com/in/flavio-amoruso-fullstackdeveloper/",
    icon: <FaLinkedin className="nav-icon" />,
  },
  {
    url: "https://www.instagram.com/",
    icon: <FaInstagram className="nav-icon" />,
  },
  {
    url: "https://github.com/flavioamoruso",
    icon: <FaGithub className="nav-icon" />,
  },
];

const SocialComponent = ({ classSocial }) => {
  return (
    <ul className={classSocial} style={{ display: "flex" }}>
      {socialLink.map((link) => {
        return (
          <li key={link.url} className="nav-item">
            <a href={link.url} alt={link.url} className="nav-link">
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { LinkComponent, SocialComponent };
