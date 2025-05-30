import css from "./Loading.module.scss";

const LoadingWave = () => {
  return (
    <div className={`${css.canvas} ${css.wave}`}>
      <span className={css.stick}></span>
      <span className={css.stick}></span>
      <span className={css.stick}></span>
      <span className={css.stick}></span>
    </div>
  );
};

export default LoadingWave;
