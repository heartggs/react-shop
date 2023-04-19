import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ setResults }: any) {
  const [input, setInput] = useState("");

  const fetchData = (value: string) => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item: any) => {
          return (
            value &&
            item &&
            item.title &&
            item.title.toLowerCase().includes(value)
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
    <>
      <input
        placeholder="검색"
        value={input}
        className={styles.input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}
