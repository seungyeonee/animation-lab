import {
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from "react";
import css from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  feedback: "shake" | "click" | "touch";
}

const Button = ({ feedback, className, onClick, ...rest }: ButtonProps) => {
  const [classNames, setClassNames] = useState(["btn"]);
  const [isCount, setIsCount] = useState(0);

  useEffect(() => {
    if (isCount > 0) {
      setClassNames(["btn", feedback]);
    }
  }, [isCount]);

  const handleClick = (e: MouseEvent) => {
    const event = e as MouseEvent<HTMLButtonElement>;
    setIsCount((prev) => prev + 1);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      key={isCount}
      className={`${classNames.map((item) => css[item]).join(" ")} ${
        className ? className : ""
      }`}
      {...rest}
      onClick={handleClick}
    ></button>
  );
};

export default Button;
