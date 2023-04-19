import BreadCrumble from "./BreadCrumble";
import styles from "./Digital.module.css";
import CardItem from "./CardItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}
function filterCategory(data: Product[]) {
  return data.filter((item) => item.category.includes("electronics"));
}

export default function Digital() {
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
        <BreadCrumble prePage={"홈"} nextPage={"디지털"} />
        <h2>디지털</h2>
        <div className={styles.cardList}>
          {list.map((item) => (
            <Link to={`/digital/product/${item.id}`} key={item.id}>
              <CardItem key={item.id} item={item} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
