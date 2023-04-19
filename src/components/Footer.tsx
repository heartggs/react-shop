import styles from "./Footer.module.css";
// import visaSvg from "../assets/visa.svg";
import VisaSvg from "../assets/visa.svg";
import masterSvg from "../assets/master.svg";
import amexSvg from "../assets/amex.svg";
import paypalSvg from "../assets/paypal.svg";
import dinersclubSvg from "../assets/dinersclub.svg";
import discoverySvg from "../assets/discovery.svg";
import facebookSvg from "../assets/facebook.svg";
import instagramSvg from "../assets/instagram.svg";
import githubSvg from "../assets/github.svg";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.zerobase}>
          <a href="https://zero-base.co.kr/" target="_blank">
            제로베이스
          </a>
        </div>
        <ul className={styles.logoWrapper}>
          <li>
            <img src={VisaSvg} alt="Visa logo" />
          </li>
          <li>
            <img src={masterSvg} alt="Master logo" />
          </li>
          <li>
            <img src={amexSvg} alt="AmexSvg logo" />
          </li>
          <li>
            <img src={paypalSvg} alt="Paypal logo" />
          </li>
          <li>
            <img src={dinersclubSvg} alt="Dinersclub logo" />
          </li>
          <li>
            <img src={discoverySvg} alt="Discovery logo" />
          </li>
        </ul>
        <ul className={styles.snsLink}>
          <li>
            <a
              href="https://www.facebook.com/0base"
              target="_blank"
              data-tip="facebook"
            >
              <img src={facebookSvg} alt="facebook logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/zerobase.official/"
              target="_blank"
              data-tip="instagram"
            >
              <img src={instagramSvg} alt="instagram logo" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zerobase-school"
              target="_blank"
              data-tip="github"
            >
              <img src={githubSvg} alt="github logo" />
            </a>
          </li>
        </ul>
        <div className={styles.copyRight}>
          <p>Copyright &#169; 2022 Zero Base</p>
        </div>
      </div>
    </>
  );
}
