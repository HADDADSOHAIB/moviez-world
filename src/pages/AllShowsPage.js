import React, { useEffect } from 'react';
import axios from 'axios';

const AllShowPage = () => {
  const pageName = 'Shows page';
  useEffect(() => {
    axios.get('http://api.tvmaze.com/shows?page=1').then(res => console.log(res));
  }, []);

  return <h1>{pageName}</h1>;
};

export default AllShowPage;
