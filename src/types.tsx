export type headerType = {
  title: string;
  image_url?: string;
};

export type pullRequestItemType = {
  id: string;
  state: string;
  title: string;
  username: string;
  userAvatarUrl: string;
  screenshotUrl: string;
  times: {
    create: string;
    update: string;
    close: string;
  };
  repositoryName: string | null;
};
