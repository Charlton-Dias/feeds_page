import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const PostsContext = createContext();

const PostsContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  const cursors = useMemo(
    () => [
      "45b78ba1-bef3-4a48-8718-7e8984b6b3c8",
      "c8be535d-792d-4d21-8eb9-dd8a0f2e1333",
      "ccce5d4d-c786-40d5-ad37-e6f474aa4928"
    ],
    []
  );

  useEffect(() => {
    // check localStorage to see if posts exists, with the cursor value for given page.
    const localPosts = JSON.parse(localStorage.getItem(cursors[page]));

    if (localPosts) {
      // if posts exist
      setPosts(localPosts);
    } else {
      //  if posts are not found in localstorage then fetch them.
      axios
        .get(`https://run.mocky.io/v3/${cursors[page]}`)
        .then((res) => {
          // first store response in localstorage
          localStorage.setItem(
            cursors[page], // key/identifier
            JSON.stringify(res.data.posts) // value
          );
          setPosts(res.data.posts); // set posts
        })
        .catch((err) => console.error(err));
    }
  }, [page, cursors]);

  return (
    <PostsContext.Provider value={{ posts, page, setPage }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
