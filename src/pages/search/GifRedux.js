import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import Form from '../../component/Form';
import { searchQuery } from '../../redux/action';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const GifRedux = () => {
  //   const [search, setSearch] = useState("");
  const [data, setData] = useState('');

  //   state redux
  //   const query = useSelector((state) => state.search.value);
  const { value } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // untuk mengambil api
    e.preventDefault();
    const urlEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=cO8WZmR1Foblr4RVFeKx4LQSwZokj02R&q=${value}&limit=12`;
    fetch(urlEndpoint)
      .then((res) => res.json())
      .then((response) => setData(response.data));
  };

  const handleInput = (e) => {
    // untuk mengambil data input
    dispatch(searchQuery(e.target.value));
  };

  //   console.log(query);
  return (
    //
    <>
      <Form onChange={handleInput} onSubmit={handleSubmit} />

      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {data &&
          data.map((item, index) => (
            <ImageListItem key={index}>
              <img src={item.images.original.url} alt="gif" />
            </ImageListItem>
          ))}
      </ImageList>

      {/* <div className="gifs">
        {data &&
          data.map((item, index) => {
            return <img key={index} src={item.images.original.url} alt="gif" />;
          })}
      </div> */}
    </>
  );
};

export default GifRedux;
