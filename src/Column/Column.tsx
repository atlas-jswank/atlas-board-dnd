import { PropsWithChildren } from "react";
import "./Column.css";

export default function Column({
  heading,
  isOver,
  children,
}: PropsWithChildren<{ heading: string; isOver: boolean }>) {
  return (
    <div
      className="Column"
      style={{ background: isOver ? "#FFF" : "transparent" }}
    >
      <h3>{heading}</h3>
      {children}
    </div>
  );
}
