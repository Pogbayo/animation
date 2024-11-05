import { useState } from "react";
import styles from "./second.module.css";

const videos = [
  "https://www.youtube.com/embed/5AM8tuuNZ7A",
  "https://www.youtube.com/embed/cA_o1k_U_6g",
  "https://www.youtube.com/embed/rQdGbjB5jSU",
  "https://www.youtube.com/embed/JhA2h2SdBuo",
  "https://www.youtube.com/embed/QTL4HmvI9ZY",
  "https://www.youtube.com/embed/5xtW8BjaHH0",
];

// Extract the video IDs from the videos array
const videoIds = [
  "5AM8tuuNZ7A",
  "cA_o1k_U_6g",
  "rQdGbjB5jSU",
  "JhA2h2SdBuo",
  "QTL4HmvI9ZY",
  "5xtW8BjaHH0",
];

// Generate the poster links using the video IDs
const posters = videoIds.map(
  (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
);

const Second = () => {
  const [playing, setPlaying] = useState(Array(videos.length).fill(false));

  const handlePlay = (index: number) => {
    setPlaying((prev) =>
      prev.map((playState, i) => (i === index ? true : playState))
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.darkHouse}>
        <img src="/media/houses/darkhouse.gif" alt="Dark House" />
      </div>

      <div className={styles.mediaDiv}>
        <div className={styles.MEDIA}>
          <h1>MEDIA</h1>
          <img src="/media/bird/bird_6.gif" alt="Flying Bird" />
        </div>
        <div className={styles.videoBox}>
          {videos.map((videoSrc, index) => (
            <div key={index} className={styles.videoWrapper}>
              {playing[index] ? (
                <iframe
                  src={`${videoSrc}?autoplay=1`}
                  className={styles.video}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`video-${index}`}
                ></iframe>
              ) : (
                <div
                  className={styles.overlay}
                  onClick={() => handlePlay(index)}
                  style={{
                    backgroundImage: `url(${posters[index]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src="/media/logos/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg"
                    alt="YouTube logo"
                    className={styles.youtubeLogo}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <button className={styles.secondbuyNowButton}>BUY NOW</button>{" "}
      </div>
    </div>
  );
};

export default Second;
