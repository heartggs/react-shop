import SearchResult from "./SearchResult";
import styles from "./SearchResultsList.module.css";
interface Result {
  title: string;
  // add any additional properties of your result object here
}

interface SearchResultsListProps {
  results: Result[];
}

export default function SearchResultsList({ results }: SearchResultsListProps) {
  return (
    <div className={styles.modal}>
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
}
