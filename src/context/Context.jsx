import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchdata } from '/src/utils/Rapidapi.js'; 

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState('new');

  useEffect(() => {
    getalldata(value);
  }, [value]);

  const getalldata = (query) => {
    setLoading(true);
    fetchdata(`search/?q=${query}`)
      .then(({contents}) => {
        setData(contents);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    <ProductContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useData = () => useContext(ProductContext);
export default Context;
