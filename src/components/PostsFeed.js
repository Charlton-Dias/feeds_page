import React, { useContext, useState } from "react";
import Post from "./Post";
import { Container, Row, Col, Form } from "react-bootstrap";
import { PostsContext } from "../contexts/PostContext";
import Pagination from "./Pagination";

export default function PostsFeed() {
  const { posts, page, setPage } = useContext(PostsContext);
  const [sortProp, setSortProp] = useState();

  return (
    <Container>
      <Row>
        {/* Sorting options*/}
        <Col>
          <Form.Select
            onClick={(e) => setSortProp(e.target.value)}
            className="my-3 text-center"
          >
            <option value="">-- Sort --</option>
            <option value="event_date">Date</option>
            <option value="likes">Likes</option>
            <option value="views">Views</option>
            <option value="shares">Shares</option>
          </Form.Select>
        </Col>
      </Row>

      <Row xs={1} className="g-4">
        {posts
          .sort((a, b) => b[sortProp] - a[sortProp]) // Sorting Process (in desc order)
          .map((_post, idx) => (
            <Col key={idx}>
              <Post post={_post} />
            </Col>
          ))}
      </Row>
      <Row>
        {/* Pagination */}
        <Pagination page={page} setPage={setPage} />
      </Row>
    </Container>
  );
}
