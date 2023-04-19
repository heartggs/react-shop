import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.forSection}>
      <section className={styles.pageWrapper}>
        <h1>404</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <div className={styles.mainBtn}>
          <a href="/">메인으로</a>
        </div>
      </section>
    </div>
  );
}
