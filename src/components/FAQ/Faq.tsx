import styles from "./Faq.module.css";
export const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.faq}>
        <img src="/media/houses/faq.png" alt="" />
      </div>
      <div className={styles.faqContent}>
        <h1>FAQ</h1>
        <div>
          <img src="/media/questionmark/faq-question.webp" alt="" />
          <p>What Is Crypto All-Stars?</p>
        </div>
        <div>
          <img src="/media/questionmark/faq-question.webp" alt="" />
          <p>What Is The MemeVault?</p>
        </div>
        <div>
          <img src="/media/questionmark/faq-question.webp" alt="" />
          <p>How Does $STARS Staking Work?</p>
        </div>
        <div>
          <img src="/media/questionmark/faq-question.webp" alt="" />
          <p>How Do I Stake My Other Meme Coins?</p>
        </div>
        <div>
          <img src="/media/questionmark/faq-question.webp" alt="" />
          <p>Which Meme Coins Can Be Staked In The MemeVault?</p>
        </div>
        <div>
          <img src="/media/questionmark/faq-question.webp" alt="" />
          <p>How Do I Buy $STARS In Presale?</p>
        </div>
        <div>
          <img src="/media/questionmark/faq-question.webp" alt="" />
          <p>When Can I Claim My $STARS?</p>
        </div>
      </div>
    </div>
  );
};
