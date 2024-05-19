import { ReactNode } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

interface Button {
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ children, className, onClick }: Button) => (
  <button className={cn(styles.button, className)} onClick={onClick}>
    {children}
  </button>
);
