import styles from "./first.module.css";
import { TfiWorld } from "react-icons/tfi";
import Accordion from "../accordion/accordion";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const First = () => {
  const navigate = useNavigate();
  const accordionData = [
    {
      title: "World's First Unified Staking",
      content:
        "World's First Unified Staking\nThe revolutionary MemeVault protocol enables multi-token, multi-chain meme coin staking.\n\nIn short, this means that all top meme coin holders worldwide are brought together under a single umbrella to stake their tokens, incentivized and rewarded for holding $STARS — the lifeblood of the platform.",
    },
    {
      title: "Secure and Transparent",
      content:
        "Secure and Transparent\nHeavily audited and battle-tested, the platform is technologically modeled after the ERC-1155 multi-token standard.\n\nThe MemeVault Ecosystem supports an infinite number of tokens and is designed for efficiency, adaptability, reduction of redundancy, and security.",
    },
    {
      title: "Massive Reward Potential",
      content:
        "Massive Reward Potential\nSimply by holding $STARS tokens, meme coin vaulters are massively rewarded.\n\nAdditionally — to further incentivize positive market momentum for $STARS and the use of the MemeVault platform — the more $STARS you hold, the greater your rewards.",
    },
    {
      title: "Meme Market Exposure",
      content:
        "Meme Market Exposure\nAs global support for the world’s most popular meme coins grows, so does the $STARS token, the MemeVault, and the Crypto All-Stars brand.\n\nAs an innovator and first-mover in the space, $STARS aims to be among the top 10 meme coins ever created, while adding additional utility and value for holders of all meme coins.",
    },
  ];

  // const initialCountdown = 00 * 00 * 00 + 00 * 0; // Total seconds
  // const savedCountdown = localStorage.getItem("countdownDuration");
  // const [countdownDuration, setCountdownDuration] = useState(
  //   savedCountdown ? parseInt(savedCountdown) : initialCountdown
  // );

  // useEffect(() => {
  //   // Update localStorage whenever countdownDuration changes
  //   localStorage.setItem("countdownDuration", String(countdownDuration));

  //   if (countdownDuration > 0) {
  //     const timerInterval = setInterval(() => {
  //       setCountdownDuration((prev) => prev - 1);
  //     }, 1000);

  //     return () => clearInterval(timerInterval);
  //   }
  // }, [countdownDuration]);

  // Function to add leading zeros
  // const formatTime = (time: number) => String(time).padStart(2, "0");

  // // Calculate time left, ensuring it stops at 00 when the countdown ends
  // const days =
  //   countdownDuration > 0 ? Math.floor(countdownDuration / (24 * 60 * 60)) : 0;
  // const hours =
  //   countdownDuration > 0
  //     ? Math.floor((countdownDuration % (24 * 60 * 60)) / (60 * 60))
  //     : 0;
  // const minutes =
  //   countdownDuration > 0
  //     ? Math.floor((countdownDuration % (60 * 60)) / 60)
  //     : 0;
  // const seconds = countdownDuration > 0 ? countdownDuration % 60 : 0;

  // const formattedDays = formatTime(days);
  // const formattedHours = formatTime(hours);
  // const formattedMinutes = formatTime(minutes);
  // const formattedSeconds = formatTime(seconds);

  return (
    <div className={styles.container}>
      <header>
        <img src="/media/logos/logo.gif" className={styles.topLogo} alt="" />
        <nav>
          <ul>
            <li>MEDIA</li>
            <li>ROADMAP</li>
            <li>TOKENOMICS</li>
            <li>HOW TO BUY</li>
            <li>FAQS</li>
            <li>WHITEPAPER</li>
            <li>AUDIT</li>
            <li>STAKING</li>
          </ul>
          <div className={styles.buyDiv}>
            <button className={styles.buyNow} onClick={() => navigate("/coin")}>
              BUY NOW!
            </button>
            <div className={styles.navLastDiv}>
              <p style={{ color: "white" }}>EN</p>
              <TfiWorld color="white" size={30} />
            </div>
          </div>
        </nav>
        <GiHamburgerMenu
          className={styles.hamburger}
          size={40}
          color="deeppink"
        />
      </header>
      <main className={styles.main}>
        <div className={styles.firstDiv}>
          <div className={styles.join}>
            <small>JOIN THE FIRST EVER</small>
            <span>MEMEVAULT!</span>
          </div>

          <div className={styles.imageContainer}>
            <img
              src="/media/houses/cloud_1.png"
              alt=""
              className={styles.backgroundImage}
            />
            <img
              src="/public/media/houses/house-mob.gif"
              className={styles.houseMobile}
              alt=""
            />
            <h3 className={styles.overlay}>
              BUY AND STAKE $STARS IN PRESALE <br /> TO EARN{" "}
              <span>MAX REWARDS</span>
            </h3>
          </div>

          <div className={styles.fourDivs}>
            <div>Every Top Meme Coin Under One Roof</div>
            <div>Revolutionary MemeVault Protocol</div>
            <div>Insane Rewards For $STARS Holders</div>
            <div>Battle Tested Technology</div>
          </div>
          <section className={styles.house1Div}>
            <img
              src="/media/houses/house1.gif"
              className={styles.house1}
              alt=""
            />
            <img
              src="/media/houses/muscleshow.gif"
              className={styles.muscleShow}
              alt=""
            />
          </section>
        </div>
        <img
          src="/public/media/houses/house-mob.gif"
          className={styles.houseMobile}
          alt=""
        />
        <div className={styles.secondDiv}>
          <div className={styles.upperDivInSecondDiv}>
            <div className={styles.socials}>
              <img src="/media/socials/sound_on.png" alt="" />
              <img src="/media/socials/twitter.svg" alt="" />
              <img src="/media/socials/telegram.svg" alt="" />
              <img src="/media/socials/audit.png" alt="" />
              <img src="/media/socials/solid-proof.png" alt="" />
            </div>
            <div className={styles.board}>
              <div className={styles.whiteboard}>519% staking Rewards</div>
              <div className={styles.greenLines}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={styles.BUY}>
                <p>BUY $STARS In PRESALE!</p>
                <div className={styles.countDown}>
                  <div>
                    <span>00</span>
                    <p className={styles.p}>Days</p>
                  </div>
                  <div>
                    <span>00</span>
                    <p className={styles.p}>Hours</p>
                  </div>
                  <div>
                    <span>00</span>
                    <p className={styles.p}> Minutes</p>
                  </div>
                  <div>
                    <span>00</span>
                    <p className={styles.p}>Seconds</p>
                  </div>
                </div>
                <h3>$2,996,266.9 / $3,243,475</h3>
                <div className={styles.until}>UNTIL PRICE INCREASE</div>
                <h3>1 $STARS = $0.0015432</h3>
                <div className={styles.buyButtons}>
                  <button onClick={() => navigate("/coin")}>
                    $CLAIM STARS
                  </button>
                  <button onClick={() => navigate("/coin")}>
                    BUY WITH CRYPTO
                  </button>
                </div>
                <h4>Don't have a wallet?</h4>
                <h4>Powered by Web3Payments</h4>
              </div>
            </div>
            <div className={styles.cloudDiv}>
              <div className={styles.bird}>
                <img src="/media/bird/bird_1.gif" alt="" />
              </div>
              <div className={styles.cloudTwoDiv}>
                <img src="/media/houses/cloud_2.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.lowerDivInSecondDiv}>
            <h1>
              The MemeVault Ecosystem <br />
              <span>powered by $STARS</span>
            </h1>
            <p>
              The MemeVault is a novel innovation that will change the way the
              world interacts with meme coins on the blockchain.
            </p>
            <section
              style={{ backgroundColor: "#43b0f1" }}
              className={styles.sec}
            >
              <Accordion items={accordionData} />
            </section>
            <main className={styles.brandsDiv}>
              <h3>FEATURED IN</h3>
              <div>
                <img
                  src="/media/brands/coinmarketcap.svg"
                  alt="coinmarketcap"
                />
                <img src="/media/brands/coingecko.svg" alt="coingecko" />
                <img src="/media/brands/kucoin.svg" alt="kucoin" />
                <img src="/media/brands/binance.svg" alt="binance" />
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
};

export default First;
