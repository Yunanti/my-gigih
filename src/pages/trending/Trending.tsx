// import { imageListClasses } from "@mui/material";
import React, {FormEvent, useState} from "react";
import "../../App.css"

type Pict = {
  id: string,
  images: {
    original: {
      url: string,
    }
  },
  title?: string,
}


const Trending = () => {

    const [data, setData] = useState<Pict[]>([]);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      // untuk mengambil api
      e.preventDefault();
      const urlEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=cO8WZmR1Foblr4RVFeKx4LQSwZokj02R&limit=12`;
      fetch(urlEndpoint)
        .then((res) => res.json())
        .then((response) => setData(response.data));
    };
    
      
    return (
        <div>
        <h1>Trending</h1>
        <form onSubmit={handleSubmit}>
          <input className="btn" type="submit" value="Show today's trending" />
        </form>
        <div className="gifs">
        {data &&
          data.map((item) => {
            return <img key={item.id} src={item.images.original.url} alt="gif" />;
          })}
        </div>
        </div>
    );
};

export default Trending;