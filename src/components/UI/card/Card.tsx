import React from "react";

import style from "./Card.module.scss";

function Card({
  children,
  backgroundColor,
}: {
  children: JSX.Element | JSX.Element[];
  backgroundColor?: string;
}) {
  return (
    <div
      className={style.card}
      style={{ backgroundColor: backgroundColor || "" }}
    >
      {children}
    </div>
  );
}

export default Card;
