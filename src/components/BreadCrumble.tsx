import styles from "./BreadCrumble.module.css";

export default function BreadCrumble({
  prePage,
  nextPage,
}: {
  prePage: string;
  nextPage: string;
}) {
  return (
    <>
      <ul className={styles.breadCrumble}>
        <li>{prePage}</li>
        <li className={styles.arrow}></li>
        <li>{nextPage}</li>
      </ul>
    </>
  );
}
