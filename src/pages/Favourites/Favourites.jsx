import AppBar from "../../components/AppBar/AppBar";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import css from "./Favourites.module.css";

export default function Faviurites() {
  const [favourites, setFavourites] = useState([]);

  // const [cards, setCards] = useState([]);

  useEffect(() => {
    const getFavourites = JSON.parse(localStorage.getItem("favourites")) || [];

    setFavourites(getFavourites);
  }, []);

  const removeCard = (id) => {
    const updatedFavourites = favourites.filter((card) => card.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className={css.wrapper}>
      <AppBar />
      <div className={css.container}>
        {favourites.length === 0 ? (
          <p>No favorites Teachers</p>
        ) : (
          <ul className={css.list}>
            {favourites.map((item) => (
              <li key={item.id} className={css.item}>
                <Card value={item} onRemove={removeCard} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
