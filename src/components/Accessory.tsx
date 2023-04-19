import BreadCrumble from "./BreadCrumble";
import styles from "./Accessory.module.css";
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
  return data.filter((item) => item.category.includes("jewelery"));
}

export default function Accessory() {
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
        <BreadCrumble prePage={"홈"} nextPage={"액세서리"} />
        <h2>액세서리</h2>
        <div className={styles.cardList}>
          {list.map((item) => (
            <Link to={`/accessories/product/${item.id}`} key={item.id}>
              <CardItem key={item.id} item={item} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
