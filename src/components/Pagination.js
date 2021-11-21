import React from "react";
import { Pagination as Paging } from "react-bootstrap";

export default function Pagination({ page, setPage }) {
  return (
    <Paging className="d-flex justify-content-center mt-3">
      {Array.from({ length: 3 }).map((val, idx) => (
        <Paging.Item
          key={idx}
          active={idx === page}
          onClick={() => setPage(idx)}
        >
          {idx + 1}
        </Paging.Item>
      ))}
    </Paging>
  );
}
