import BreadCrumble from "./BreadCrumble";
import styles from "./Fashion.module.css";
import CardItem from "./CardItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

function filterCategory(data: Product[]) {
  return data.filter((item) => item.category.includes("clothing"));
}

export default function Fashion() {
  const [list, setList] = useState<Product[]>([]);

  async function getData() {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return filterCategory(data);
  }

  useEffect(() => {
    const fetchData = async () => {
      const dataList = await getData();
      setList(dataList);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className={styles.productWrapper}>
        <BreadCrumble prePage={"홈"} nextPage={"패션"} />
        <h2>패션</h2>
        <div className={styles.cardList}>
          {list.map((item) => (
            <Link to={`/fashion/product/${item.id}`} key={item.id}>
              <CardItem item={item} />
            </Link>
          ))}
        </div>
        <Routes>
          <Route path="fashion/product/:id" Component={ProductDetail} />
        </Routes>
      </section>
    </>
  );
}
