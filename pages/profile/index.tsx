import styles from "./profiles.module.css";
import { BrowserRouter } from "react-router-dom";

export default function Profile() {
  return (
    <div className={styles.footer}>
      <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "240px", height: "53px" }}
          src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
          alt="Alchemy Supercharged"
        />
      </a>
      <div className={styles.icons_container}>
        <div>
          <a
            href="https://github.com/ogolkwasi/carbon-new"
            target={"_blank"}
          >
            Builder@Kwasi
          </a>
        </div>
        <div>
          <a href="https://github.com/ogolkwasi/carbon-new" target={"_blank"}>
            Follow us on Twitter
          </a>
        </div>
      </div>
    </div>
  );
}