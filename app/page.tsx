import Link from 'next/link';
import { StreamerType } from '@/types/streaming';

export default async function StreamerList() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/viewer`);
  const data = await response.json();
  return (
    <div>
      {data.streamers &&
        data.streamers.map((streamer: StreamerType) => {
          return (
            <div key={streamer.channelId} className="p-2 flex flex-col border">
              <div className='flex gap-2'>
                <span>ID: {streamer.channelId}</span>
                <span>Name: {streamer.channelName}</span>
              </div>
              <div className='flex gap-2'>
                <Link href={`/bgm/${streamer.channelName}`}>BGM</Link>
                <Link href={`/page/${streamer.channelName}`}>viewer</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
