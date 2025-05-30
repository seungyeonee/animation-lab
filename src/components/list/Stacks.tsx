import { useState, type HTMLAttributes, type ReactElement } from "react";
import css from "./Stacks.module.scss";

interface StacksProps extends HTMLAttributes<HTMLElement> {
  data: ReactElement[];
}

const Stacks = ({ data }: StacksProps) => {
  const [isCollaspe, setIsCollaspe] = useState(true);
  return (
    <div
      className={`${css.stacks} ${isCollaspe ? css.collaspe : css.spread}`}
      style={{
        height: isCollaspe
          ? 48
          : `${48 * data.length + 10 * (data.length - 1)}px`,
      }}
    >
      <button
        className={css.btn}
        onClick={() => {
          setIsCollaspe(!isCollaspe);
        }}
      >
        {isCollaspe ? "Spread" : "Collaspe"}
      </button>
      {data &&
        data.map((item, index) => (
          <div
            className={css.stack}
            key={index}
            style={{
              zIndex: data.length - index,
              transform: isCollaspe
                ? `translate(0, -${(10 - index) * index}px) scale(${
                    1 - 0.1 * index
                  })`
                : `translate(0,${48 * index + 10 * index}px) scale(1)`,
              backgroundColor: isCollaspe
                ? `rgb(${255 - index * 20}, ${255 - index * 20}, ${
                    255 - index * 20
                  })`
                : "#fff",
            }}
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default Stacks;
