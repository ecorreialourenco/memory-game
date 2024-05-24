import { useEffect, useState } from "react";
import { Item } from "../../Models";
import styles from "./Card.module.css";

interface CardProps {
  item: Item;
  handleSelectedCards: (item: Item) => void;
  toggled: boolean;
  stopflip: boolean;
}

export const Card = ({
  item,
  handleSelectedCards,
  toggled,
  stopflip,
}: CardProps) => {
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    if (toggled) {
      setImgSrc(item.img);
    } else {
      setTimeout(() => {
        setImgSrc("");
      }, 500);
    }
  }, [item.img, toggled]);

  return (
    <div className={styles.item}>
      <div className={toggled ? styles.toggled : ""}>
        <img
          data-testid="card-img"
          className={styles.face}
          src={imgSrc}
          alt="face"
        />
        <button
          data-testid="card-btn"
          className={styles.back}
          onClick={() => !stopflip && handleSelectedCards(item)}
        />
      </div>
    </div>
  );
};
