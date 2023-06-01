import React from "react";
import Layout from "./components/UI/layout/Layout";
import Header from "./components/UI/header/Header";
import PullRequestItems from "./components/lib/pullRequests/PullRequestItems";

const PULL_REQUEST_ICON_URL =
  "https://cdn0.iconfinder.com/data/icons/octicons/1024/git-pull-request-512.png";

function App() {
  return (
    <Layout>
      <Header title="List of Pull Requests" image_url={PULL_REQUEST_ICON_URL} />
      <PullRequestItems />
    </Layout>
  );
}

export default App;
