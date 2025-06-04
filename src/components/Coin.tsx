import css from "./Coin.module.scss";

interface CoinProps {
  animation?: {
    count: string | number;
    ease: string;
    duration: number | "infinite";
  };
  background?: [string, string];
  text?: [React.ReactNode, React.ReactNode];
}

const Coin = ({ animation, background, text }: CoinProps) => {
  return (
    <div
      className={css.coin}
      style={{
        animationIterationCount: animation?.count ?? "infinite",
        animationTimingFunction: animation?.ease ?? "ease-in-out",
        animationDuration: animation?.duration
          ? animation.duration === "infinite"
            ? animation.duration
            : `${animation.duration}s`
          : "3s",
      }}
    >
      <div
        className={`${css.side} ${css.front}`}
        style={{
          background: background && background[0] ? background[0] : "gold",
        }}
      >
        {text && text[0] && text[0]}
      </div>
      <div
        className={`${css.side} ${css.back}`}
        style={{
          background: background && background[1] ? background[1] : "silver",
        }}
      >
        {text && text[1] && text[1]}
      </div>
    </div>
  );
};

export default Coin;
