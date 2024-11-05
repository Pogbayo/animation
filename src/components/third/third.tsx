import styles from "./third.module.css";
const RoadMap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.greenHouse}>
        <img src="/media/houses/greenhouse.gif" alt="" />
      </div>
      <div className={styles.roadmap}>
        <h1>ROADMAP</h1>
        <p>
          Uniting all the top meme coins under one banner, the MemeVault brings
          together the entire meme coin community under the Crypto All-Stars
          umbrella.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <img src="/media/rotation/roadmap_numbers_1.gif" alt="" />
            <p>Presale</p>
            <small>
              The first stage in the Crypto All-Stars global domination plan is
              the Presale and Staking. Here, lucky early buyers secure their
              $STARS tokens and start earning insane gains, while our
              international marketing machine starts running and we prepare for
              the MemeVault Ecosystem launch.
            </small>
          </div>
          <div className={styles.box}>
            <img src="/media/rotation/roadmap_numbers_2.gif" alt="" />
            <p>$STARS Token Launch</p>
            <small>
              On launch, token holders from all of the world’s top meme coins
              will be frantically buying $STARS, so they can multiply their bags
              prior to the MemeVault going live. The more $STARS you hold, the
              more you can stake to earn in the MemeVault!
            </small>
          </div>
          <div className={styles.box}>
            <img src="/media/rotation/roadmap_numbers_3.gif" alt="" />
            <p>Unlocking The Vault</p>
            <small>
              Every whale and small investor from every major meme coin will be
              in the house as Crypto All-Stars launches its revolutionary
              MemeVault Network. All the top memes can be staked, however – YOU
              MUST OWN $STARS to MAX OUT. How’s that for incentive?
            </small>
          </div>
        </div>
        <div className={styles.roadMapButton}>
          <button> BUY AND STAKE $STARS FOR 519% REWARDS</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
