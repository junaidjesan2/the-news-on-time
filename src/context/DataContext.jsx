import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataProvider = createContext(null);

const DataContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);

    useEffect(()=>{
      axios
        .get(import.meta.env.VITE_CATEGORIES_URL)
        .then((res) => setCategories(res.data))
        .catch((err=>console.log(err)));
    },[])
    useEffect(()=>{
      axios
        .get(import.meta.env.VITE_NEWS_URL)
        .then((res) => setNews(res.data))
        .catch((err=>console.log(err)));
    },[])

    
  const values = { categories, news };
  return (
    <DataProvider.Provider value={values}>{children}</DataProvider.Provider>
  );
};

export default DataContext;
