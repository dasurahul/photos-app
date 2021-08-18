import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { useParams, useHistory } from "react-router-dom";
import Photos from "../components/Photos";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = () => {
  const { query } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const [items, setItems] = useState([]);
  const submitHandler = (input) => {
    history.push(`/${input}`);
    setCurrentPage(1);
  };
  useEffect(() => {
    setItems([]);
  }, [query]);
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=8zFIPebzf0QHzrvmkTjBEHGNF-gwGiYo4WTQp6huP2M&&query=${query}&&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setItems((prevData) => [...prevData, ...data.results]);
      });
  }, [query, currentPage]);
  return (
    <div>
      <Navbar />
      <Form onSubmit={submitHandler} />
      {items && items.length > 0 && (
        <InfiniteScroll
          dataLength={items.length}
          next={() => setCurrentPage(currentPage + 1)}
          hasMore={true}
        >
          <Photos items={items} />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Search;
