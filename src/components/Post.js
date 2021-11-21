import React, { useState } from "react";
import { Card } from "react-bootstrap";

export default function Post({ post }) {
  const [showDetails, setShowDetails] = useState(false);

  const {
    id,
    thumbnail_image,
    event_name,
    event_date,
    views,
    likes,
    shares
  } = post;

  // Converting the Date to locale String format.
  const getDate = () => new Date(event_date).toLocaleString();

  return (
    <Card
      id={id}
      onClick={() => setShowDetails((val) => !val)} // on card click toggle more details
      className="mx-auto"
      style={{ maxWidth: 400 }}
    >
      <Card.Img
        className="object-fit-cover"
        variant="top"
        src={thumbnail_image}
      />
      <Card.Body>
        <Card.Title>{event_name}</Card.Title>
        <Card.Text className="text-muted">Date: {getDate()}</Card.Text>

        {showDetails && ( // show more details if toggled on, (on click)
          <div className="d-flex justify-content-between">
            <Card.Text>Views: {views}</Card.Text>
            <Card.Text>Likes: {likes}</Card.Text>
            <Card.Text>Shares: {shares}</Card.Text>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
