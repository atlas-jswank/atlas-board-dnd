import { PropsWithChildren } from "react";
import "./Board.css";

export default function Board({ children }: PropsWithChildren) {
  return <div className="Board">{children}</div>;
}
