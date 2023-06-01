import React, { MouseEventHandler } from "react";
import { createPortal } from "react-dom";

import style from "./Modal.module.scss";
import Card from "../card/Card";

function Layout({
  children,
  closeHandler,
}: {
  children: JSX.Element;
  closeHandler: Function;
}) {
  return createPortal(
    <div className={style.modal}>
      <div className={style.modalContent}>
        <Card backgroundColor="#fff">
          <button
            className={style.escapeBtn}
            onClick={closeHandler as MouseEventHandler}
          >
            X
          </button>
          {children}
        </Card>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
}

export default Layout;
