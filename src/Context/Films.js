import React, { useCallback, useContext, useEffect, useState } from "react";

const FilmsContext = React.createContext({});

export const useFilmsContext = () => useContext(FilmsContext);

const FilmsProvider = ({ children }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/d")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      });
  }, []);

  const filterFilms = useCallback(
    (filter) => films.filter((film) => film.qid === filter),
    [films]
  );

  return (
    <FilmsContext.Provider value={{ filterFilms }}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsProvider;
