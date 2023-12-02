import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // logic to store the favorite
    if (!isFavorite) console.log(" Added to favorites");
  };

  return (
    <div
      className="card bg-secondary text-light mb-3 d-inline-block mx-3"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />
      <div
        className="card-body"
        style={{ height: "200px", overflow: "hidden" }}
      >
        <h5
          className="card-title"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title.slice(0, 50)}
        </h5>
        <p
          className="card-text"
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {description
            ? description.slice(0, 90)
            : "Stay informed with our curated news highlights. Explore timely articles covering global events, technology breakthroughs, and more.Your go-to source for concise, insightful updates on the latest happenings worldwide"}
        </p>
        <button onClick={toggleFavorite} className="btn btn-link">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: isFavorite ? "red" : "gray" }}
          />
        </button>
        <a href={url} className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
