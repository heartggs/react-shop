import { Routes, Route, Link } from "react-router-dom";
import styles from "./CardItem.module.css";
import ProductDetail from "./ProductDetail";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface Props {
  item: Product;
}

export default function CardItem({ item }: Props) {
  return (
    <>
      <div className={styles.card}>
        <figure className={styles.figure}>
          <img src={item.image} alt={item.title} className={styles.square} />
        </figure>
        <div className={styles.infoArea}>
          <strong>{item.title}</strong>
          <p>${item.price}</p>
        </div>
      </div>
    </>
  );
}
