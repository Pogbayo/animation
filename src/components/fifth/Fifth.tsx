import styles from "./fifth.module.css";
const Fifth = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dangling}>
        <img src="/media/houses/dangling.gif" alt="" />
      </div>
      <div className={styles.howToBuy}>
        <div className={styles.howToBuyBird}>
          <img src="/media/bird/bird_6.gif" alt="" />
        </div>
        <h1>HOW TO BUY</h1>
        <p>
          Purchasing Crypto All-Stars is simple, even for first-time meme coin
          explorers!
        </p>
        <section className={styles.tokenSection}>
          <div>
            <img
              src="/media/rotation/roadmap_numbers_1.gif"
              className={styles.tokenImg}
              alt=""
            />
          </div>
          <h2>Create your wallet</h2>
          <p>
            For desktop users, install the MetaMask wallet browser extension and
            folllow the intrsuctions there.Prefer mobile? Download the{" "}
            <span style={{ color: "blue" }}>Best Wallet</span> for an easy
            setup.Already have a wallet?Click wallet Connect to check
            compatibility
          </p>
        </section>
      </div>
    </div>
  );
};

export default Fifth;
