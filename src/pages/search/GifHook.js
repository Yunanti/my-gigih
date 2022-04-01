import React, { useState } from "react";
import App from "../../App.css";
import Form from "../../component/Form";

const GifHook = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    // untuk mengambil api
    e.preventDefault();
    const urlEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=cO8WZmR1Foblr4RVFeKx4LQSwZokj02R&q=${search}&limit=12`;
    fetch(urlEndpoint)
      .then((res) => res.json())
      .then((response) => setData(response.data));
  };

  const handleInput = (e) => {
    // untuk mengambil data input
    setSearch(e.target.value);
  };

  return (
    //
    <>
      <Form onChange={handleInput} onSubmit={handleSubmit} />

      <div className="gifs">
        {data &&
          data.map((item, index) => {
            return <img key={index} src={item.images.original.url} alt="gif" />;
          })}
      </div>
    </>
  );
};

export default GifHook;
