// import styles from "./SearchResult.module.css";

// export default function SearchResult({ result }: any) {
//   return (
//     <div>
//       <div className={styles.filteredTitle}>
//         <a href="/">
//           <span>{result.title}</span>
//         </a>
//       </div>
//     </div>
//   );
// }

import styles from "./SearchResult.module.css";
import { Link } from "react-router-dom";

export default function SearchResult({ result }: any) {
  const { category, id, title } = result;
  const path = `/${category}/product/${id}`;

  return (
    <div>
      <div className={styles.filteredTitle}>
        <Link to={path}>
          <span>{title}</span>
        </Link>
      </div>
    </div>
  );
}
