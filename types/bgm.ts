export type BgmList = {
  data: BgmItem[];
};

export type BgmItem = {
  streamId?: string;
  title: string;
  videoId: string;
  publishedAt: string;
  videoOwnerChannelTitle: string;
  videoOwnerchannelId: string;
  request: string;
  playedAt?: string;
};