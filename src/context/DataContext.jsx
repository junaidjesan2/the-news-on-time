import axios from "axios";
import { createContext, useState } from "react";

export const DataProvider = createContext(null);

const DataContext = ({ children }) => {
  const [categories, setCategories] = useState([]);

  axios
    .get(import.meta.env.VITE_CATEGORIES_URL)
    .then((res) => setCategories(res.data))
    .catch((err=>console.log(err)));

    
  const name = "junaid";
  const values = { categories, name };
  return (
    <DataProvider.Provider value={values}>{children}</DataProvider.Provider>
  );
};

export default DataContext;
