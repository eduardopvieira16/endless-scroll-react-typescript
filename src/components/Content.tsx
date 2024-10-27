import { ReactNode } from "react";
import style from "../styles/components/Layout.module.scss";

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <div className={style.container}>
      <main className={style.flexContainer}>{children}</main>
    </div>
  );
}
