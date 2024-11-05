import styles from "./fourth.module.css";

export const Fourth = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rainbow}>
        <img src="/media/houses/rainbowhouse.gif" alt="" />
      </div>
      <div className={styles.content}>
        <h1>TOKENOMICS</h1>
        <p>
          The specific breakdown of how the $STARS token supply is allocated is
          detailed below:
        </p>
        <div className={styles.foodDiv}>
          <img src="/media/food/pie.png" className={styles.pie} alt="" />

          <section className={styles.section1}>
            <p>20% </p> <button className={styles.button}>PRESALE</button>
          </section>

          <section className={styles.section2}>
            <p>25% </p>{" "}
            <button className={styles.button}>PRESALE STAKING</button>
          </section>

          <section className={styles.section3}>
            <p>20% </p> <button className={styles.button}>MARKETING</button>
          </section>

          <section className={styles.section4}>
            <p>10% </p> <button className={styles.button}>CEX/DEX</button>
          </section>

          <section className={styles.section5}>
            <p>25% </p>{" "}
            <button className={styles.button}>MEMEVAULT ECOSYSTEM</button>
          </section>
        </div>
      </div>
    </div>
  );
};
