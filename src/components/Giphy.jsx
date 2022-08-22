import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Giphy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const results = await axios('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'etZO2SHx0RC45NBnh2SJA8cxO044rNrL',
          limit: 10
        },
      });

      console.log(results);
      setData(results.data.data);
    };

    getData();
  }, []);

  const renderGif = () => {
    return data.map(e => {
        return (
            <div key={e.id} className='gif'>
                <img src={e.images.fixed_height.url}></img>
            </div>
        )
    }) 
  }
  return <div className="container gifs">{renderGif()}</div>;
};

export default Giphy;
