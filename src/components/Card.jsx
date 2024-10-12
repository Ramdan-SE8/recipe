import React from "react";

import "./Card.css";

const Button = ({ handler, children }) => {
  return (
    <button type="button" onClick={handler}>
      {children}
    </button>
  );
}

export const Card = ({
  id,
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
  handler
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {id && <h1 className="card-title">{id}</h1>}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonText &&  
      <button  onClick={handler} className="button" type="button">{buttonText}</button>}
    </div>
  );
};