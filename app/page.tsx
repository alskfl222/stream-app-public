import { StreamerType } from '@/types/streaming';

export default async function Home() {
  const response = await fetch('http://127.0.0.1:4567/viewer');
  const data = await response.json();
  console.log(data);
  return (
    <div>
      {data.streamers &&
        data.streamers.map((streamer: StreamerType) => {
          return (
            <div key={streamer.channelId}>
              <span>ID: {streamer.channelId}</span>
              <span>Name: {streamer.channelName}</span>
            </div>
          );
        })}
    </div>
  );
}
