import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

interface Button {
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ children, className, onClick }: Button) => (
  <button className={clsx(styles.button, className)} onClick={onClick}>
    {children}
  </button>
);
