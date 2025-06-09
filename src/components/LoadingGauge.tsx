import css from "./Loading.module.scss";

interface LoadingGaugeProps {
  width?: number;
  current?: number;
  max?: number;
  color?: string;
  bgColor?: string;
  direction?: "row" | "column";
  className?: string;
  text?: string;
}

const LoadingGauge = ({
  width = 16,
  current = 0,
  max = 100,
  color = "#fe4f4f",
  bgColor = "#000",
  direction = "row",
  className = "",
  text = "",
}: LoadingGaugeProps) => {
  function validateCheck(
    current: number,
    max: number
  ): { vCurrent: number; vMax: number } {
    if (current > max) {
      throw new Error("current는 max값을 초과할 수 없습니다.");
    } else if (current < 0) {
      throw new Error("current나 max에 음수가 올 수 없습니다.");
    } else if (max < 1) {
      throw new Error("max는 최소 1 이상인 양수여야 합니다.");
    }
    return { vCurrent: current, vMax: max };
  }

  const { vCurrent, vMax } = validateCheck(current, max);

  const WaveElement = () => {
    return (
      <span
        className={css.wave}
        style={{
          top:
            direction === "row"
              ? `calc(50% - ${((width * 3) / 2) * 0.1}rem)`
              : "0",
          right:
            direction === "row"
              ? "0"
              : `calc(50% - ${((width * 3) / 2) * 0.1}rem)`,
          width: `${width * 3 * 0.1}rem`,
          height: `${width * 3 * 0.1}rem`,
          background: current > 0 ? color : "transparent",
        }}
      ></span>
    );
  };

  return (
    <div
      className={`${css.gauge} ${className}`}
      style={
        {
          width: direction === "row" ? "100%" : `${0.1 * width}rem`,
          height: direction === "row" ? `${0.1 * width}rem` : "100%",
          minHeight: direction === "column" ? "10rem" : undefined,
          background: bgColor,
          "--data-text": `"${text}"`,
        } as React.CSSProperties
      }
    >
      <div
        className={css.bar}
        data-percent={(current / max) * 100}
        style={{
          background: color,
          transform: `translate${direction === "row" ? "X" : "Y"}(${
            direction === "row"
              ? -100 + (vCurrent / vMax) * 100
              : (vCurrent / vMax) * 100
          }%)`,
        }}
      >
        <WaveElement />
        <WaveElement />
        <WaveElement />
      </div>
    </div>
  );
};

export default LoadingGauge;
