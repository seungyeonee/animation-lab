import css from "./Loading.module.scss";

const LoadingCircle = () => {
  return (
    <div className={css.canvas}>
      <span className={css.dot}></span>
      <span className={css.dot}></span>
      <span className={css.dot}></span>
      <span className={css.dot}></span>
    </div>
  );
};

export default LoadingCircle;
