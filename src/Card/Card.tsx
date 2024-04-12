import { FocusEventHandler, PropsWithChildren, useState } from "react";
import "./Card.css";
import { useDrag } from "react-dnd";

export default function Card({
  focused,
  focus,
  blur,
  message,
}: PropsWithChildren<{
  focused: boolean;
  focus: () => void;
  blur: (m: string) => void;
}>) {
  function _onFocus(e: FocusEventHandler<HTMLTextAreaElement>) {
    const element = e.target;
    element.selectionStart = element.value.length;
  }
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "CARD",
      item: { text: message },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.9 : 1,
      }),
    }),
    []
  );

  return focused ? (
    <textarea
      className="Card"
      autoFocus
      onFocus={_onFocus}
      onBlur={(e) => blur(e.target.value)}
      defaultValue={message}
    ></textarea>
  ) : (
    <div ref={dragRef} className="Card" onClick={focus}>
      {message}
    </div>
  );
}
