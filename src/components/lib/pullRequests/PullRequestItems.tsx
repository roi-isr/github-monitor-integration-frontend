import React, { useState, useEffect } from "react";
import { pullRequestItemType } from "../../../types";
import PullRequestItem from "./PullRequestItem";

import style from "./PullRequestItems.module.scss";
import Card from "../../UI/card/Card";

const SERVER_URL = process.env.REACT_APP_BACKEND_URL as string;

function PullRequestItems() {
  const [pullRequestDetails, setPullRequestDetails]: [
    Array<pullRequestItemType>,
    any
  ] = useState([]);
  const [repositoryName, setRepositoryName]: [string, any] = useState("");
  const [loading, setLoading]: [any, any] = useState(true);

  useEffect(() => {
    fetchPullRequestDetails();
  }, []);

  const fetchPullRequestDetails = async () => {
    const response = await fetch(SERVER_URL);
    const pullRequestDetails = await response.json();
    const pullRequestWithrepositoryName = pullRequestDetails.details.find(
      (detail: pullRequestItemType) => detail.repositoryName
    );
    setRepositoryName(
      pullRequestWithrepositoryName
        ? pullRequestWithrepositoryName.repositoryName
        : "N/A"
    );
    setPullRequestDetails(pullRequestDetails.details);
    setLoading(false);
  };

  return loading ? (
    <div className={style.loadingText}>Loading...</div>
  ) : (
    <>
      <h1 className={style.repoName}>
        <u>Repoistory Name</u>: {repositoryName}
      </h1>
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
    </>
  );
}

export default PullRequestItems;
