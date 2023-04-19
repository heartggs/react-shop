import axios from "axios";
import styles from "../components/Contents.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import Slide from "./Slide";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

export default function Contents() {
  const [list, setList] = useState<Product[]>([]);

  async function getData(category: string): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return data;
  }

  useEffect(() => {
    const fetchData = async () => {
      const menClothingData = await getData("men's clothing");
      const womenClothingData = await getData("women's clothing");
      const jeweleryData = await getData("jewelery");
      const electronicsData = await getData("electronics");
      const dataList = [
        ...menClothingData,
        ...womenClothingData,
        ...jeweleryData,
        ...electronicsData,
      ];
      setList(dataList);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Slide />
      <section>
        <h2>패션</h2>
        <div className={styles.cardList}>
          {list
            .filter((item) => item.category.includes("clothing"))
            .slice(0, 4)
            .map((item) => (
              <Link to={`/fashion/product/${item.id}`} key={item.id}>
                <CardItem key={item.id} item={item} />
              </Link>
            ))}
        </div>
      </section>
      <section>
        <h2>액세서리</h2>
        <div className={styles.cardList}>
          {list
            .filter((item) => item.category === "jewelery")
            .slice(0, 4)
            .map((item) => (
              <Link to={`/accessories/product/${item.id}`} key={item.id}>
                <CardItem key={item.id} item={item} />
              </Link>
            ))}
        </div>
      </section>
      <section>
        <h2>디지털</h2>
        <div className={styles.cardList}>
          {list
            .filter((item) => item.category === "electronics")
            .slice(0, 4)
            .map((item) => (
              <Link to={`/digital/product/${item.id}`} key={item.id}>
                <CardItem key={item.id} item={item} />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
