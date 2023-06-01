import React, { useState, useEffect } from "react";
import { headerType, pullRequestItemType } from "../../../types";
import PullRequestItem from "./PullRequestItem";

import style from "./PullRequestItems.module.scss";
import Card from "../../UI/card/Card";

const SERVER_URL = process.env.REACT_APP_BACKEND_URL as string;

function PullRequestItems() {
  const [pullRequestDetails, setPullRequestDetails]: [any, any] = useState([]);

  useEffect(() => {
    fetchPullRequestDetails();
  }, []);

  const fetchPullRequestDetails = async () => {
    const response = await fetch(SERVER_URL);
    setPullRequestDetails(await response.json());
  };

  return (
    <ul>
      {pullRequestDetails.map((detail: pullRequestItemType) => {
        return (
          <li key={detail.id} className={style.prlist}>
            <Card>
              <PullRequestItem {...detail} />
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

export default PullRequestItems;
