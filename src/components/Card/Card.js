import React from "react";
import github from "../../assets/github-icon.svg";
import "./Card.css";

function Card({ image, languages, title, githubUrl, demo }) {
  // Open any link in a new tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div className="card">
      <img className="card__image" src={image} alt="" />
      <div className="card__languages">
        {languages?.map((language) => (
          <p
            className={
              "card__language " +
              (language === "HTML"
                ? "HTML"
                : language === "CSS"
                ? "CSS"
                : language === "JS"
                ? "JS"
                : language === "ReactJS"
                ? "React"
                : language === "Firebase"
                ? "Firebase"
                : "none")
            }
          >
            {language}
          </p>
        ))}
      </div>
      <h3 className="card__title">{title}</h3>
      <div className="card__info">
        <a onClick={() => openInNewTab(githubUrl)}>
          <img src={github} alt="" />
        </a>
        <a onClick={() => openInNewTab(demo)}>Demo</a>
      </div>
    </div>
  );
}

export default Card;
