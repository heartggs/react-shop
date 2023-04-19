import styles from "./Header.module.css";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiShoppingBag } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
import SearchResultsList from "./SearchResultsList";
import { useRecoilState } from "recoil";
import { CartState } from "../globaldata/CartState";

export default function Header() {
  const [cart, setCart] = useRecoilState(CartState);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = (value: string) => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((json) => {
        const filteredJson = json.map((item: any) => ({
          title: item.title.toLowerCase(),
          category: item.category,
          id: item.id,
        }));
        const results = filteredJson.filter((item: any) => {
          return (
            value &&
            item &&
            item.title.includes(value) &&
            item.category &&
            item.id
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.sideMenu}>
        <GiHamburgerMenu className={styles.hamburgerIcon} />
      </div>
      <h1 className={styles.title}>
        <a href="/">React Shop</a>
      </h1>
      <div className={styles.categoryArea}>
        <Link to="/fashion" className={styles.activeLink}>
          패션
        </Link>
        <Link to="/accessories" className={styles.activeLink}>
          액세서리
        </Link>
        <Link to="/digital" className={styles.activeLink}>
          디지털
        </Link>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.modeArea}>
          {/* 나중에 if문써서 이미지 바꿔야함 */}
          <BsMoon className={styles.dayMode} />
        </div>
        <div className={styles.inputArea}>
          {/* <SearchBar setResult={setResults} /> */}
          <input
            placeholder="검색"
            value={input}
            className={styles.input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <SearchResultsList results={results} />
        </div>
        <Link to="/cart" className={styles.iconArea}>
          <BiShoppingBag className={styles.shoppingIcon} />
          <span className={styles.badge}>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
}
