import React from "react";

import style from "./Layout.module.scss";

function Layout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div className={style.layout}>{children}</div>;
}

export default Layout;
