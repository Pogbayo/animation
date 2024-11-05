import { TfiWorld } from "react-icons/tfi";

import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerImg}>
        <img src="/media/houses/footer.gif" alt="" />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.crypto}>
          <h1>CRYPTO ALL-STARS</h1>
          <TfiWorld color="white" size={30} />
        </div>
        <small style={{ color: "white" }}>
          Stop chasing the next big coin. It's here.
        </small>
        <ul className={styles.footerUl}>
          <li>
            <a href="">ROADMAP</a>
          </li>
          <li>
            <a href="">TOKENOMICS</a>
          </li>
          <li>
            <a href="">HOW TO BUY</a>
          </li>
          <li>
            <a href="">FAQS</a>
          </li>
          <li>
            <a href="">STAKING</a>
          </li>
        </ul>
        <section className={styles.copywrightDiv}>
          <h1>© 2024 Crypto All-Stars</h1>
          <div style={{ display: "flex" }}>
            <small style={{ color: "gray", width: "60%" }}>
              The crypto market is unpredictable. Be mindful of tax
              implications, as profits might be liable for capital gains or
              other taxes depending on your region. Regulatory guidelines vary,
              so it's crucial to know the specific rules that apply to you.
              Conduct thorough research and risk only what you can afford to
              lose.
            </small>
            <img src="/media/logos/logo.gif" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};
