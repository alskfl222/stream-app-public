export type StreamerType = {
  channelId: string,
  channelName: string,
}

export type StreamingItemType = {
  contentDetails: Record<string, any>;
  etag: string;
  id: string;
  kind: string;
  snippet: {
    actualEndTime: string;
    actualStartTime: string;
    channelId: string;
    description: string;
    isDefaultBroadcast: boolean;
    liveChatId: string;
    publishedAt: string;
    scheduledStartTime: string;
    thumbnails: Record<string, Record<string, any>>;
    title: string;
  };
  status: Record<string, any>;
};

export type StreamingListType = {
  date: string;
  list: StreamingItemType[];
};
