import React, { useState } from "react";
import { pullRequestItemType } from "../../../types";
import Modal from "../../UI/modal/Modal";

import style from "./PullRequestItem.module.scss";
import Card from "../../UI/card/Card";

const prStateColors: { [key: string]: string } = {
  open: "#99f475",
  closed: "#ff6c7c",
};

function PullRequestItem(props: pullRequestItemType) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={style.pritem}>
      <section className={style.userDetails}>
        <img
          className={style.avatar}
          src={props.userAvatarUrl}
          alt={props.username}
        />
        <h1 className={style.username}>{props.username}</h1>
      </section>
      <hr></hr>
      <h2>{props.title}</h2>
      <section className={style.prdetails}>
        <Card backgroundColor={prStateColors[props.state.toLowerCase()]}>
          <h3>State: {props.state}</h3>
        </Card>
      </section>
      <section className={style.prtimes}>
        <span>
          Created:{" "}
          {props.times.create
            ? new Date(props.times.create).toLocaleString()
            : "N/A"}
        </span>
        <span>
          Updated:{" "}
          {props.times.update
            ? new Date(props.times.update).toLocaleString()
            : "N/A"}
        </span>
        <span>
          Closed:{" "}
          {props.times.close
            ? new Date(props.times.close).toLocaleString()
            : "N/A"}
        </span>
      </section>
      <button
        onClick={() => setShowModal(true)}
        className={style.screenshotBtn}
      >
        Show Screenshot
      </button>
      {showModal && (
        <Modal closeHandler={() => setShowModal(false)}>
          <img
            className={style.screenshot}
            src={props.screenshotUrl}
            alt="Pull Request screenshot"
          />
        </Modal>
      )}
    </div>
  );
}

export default PullRequestItem;
