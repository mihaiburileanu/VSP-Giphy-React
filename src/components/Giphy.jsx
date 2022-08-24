import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Giphy = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [counter, setCounter] = useState(0);
  const dataFetchedRef = useRef(false);

  const [search, setSearch] = useState("");
  useEffect(() => {
    const getData = async () => {
      const results = await axios('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'etZO2SHx0RC45NBnh2SJA8cxO044rNrL',
          limit: 10,
        },
      });
      setCounter((oldValue) => oldValue+1);
      console.log(results);
      setData(results.data.data);
    };
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);

  const renderGif = () => {
    return data.map((e) => {
      return (
        <div className="gif" key={e.id}>
          <img src={e.images.fixed_height.url} alt="giphy images"></img>
        </div>
      );
    });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      const results = await axios('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: 'etZO2SHx0RC45NBnh2SJA8cxO044rNrL',
          limit: 10,
          q: search
        }
      })
      setData(results.data.data);
  };

  return (
    <div>
      <form className="form container">
        <input type="text" placeholder="search" className="form-control" onChange={handleSearchChange} value={search}></input>
        <button type="submit" className='btn btn-primary mx-2' onClick={handleSubmit}>Search</button>
      </form>
      <div className="container gifs">{renderGif()}</div>;
    </div>
  );
};

export default Giphy;
