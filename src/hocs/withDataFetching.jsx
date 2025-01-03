
// withDataFetching.js
import React, { useState, useEffect } from 'react';

const withDataFetching = (WrappedComponent, url) => {
  return function WithDataFetching(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [url]);

    return (
      <WrappedComponent 
        {...props} 
        data={data} 
        loading={loading} 
        error={error} 
      />
    );
  };
};

export default withDataFetching;
