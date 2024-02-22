'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { BgmItem } from '@/types/bgm';
import Pagination from '@/components/Pagination';

export default function BgmStreamed() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [streamed, setStreamed] = useState<BgmItem[]>([]);
  const [total, setTotal] = useState(0);
  const [take] = useState(10);
  const channelName = decodeURIComponent((params.channelName as string) || '');
  const page = searchParams.get('page')
    ? parseInt(searchParams.get('page')!)
    : 1;
  console.log(channelName, page, take);
  useEffect(() => {
    async function fetchStreamed() {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/viewer/bgm/${channelName}?page=${page}&take=${take}`
      );
      if (response.status === 200) {
        setStreamed(response.data.data.items);
        setTotal(response.data.data.total);
      } else {
        console.log(response);
      }
    }
    fetchStreamed();
  }, [page, take]);
  return (
    <div>
      {streamed.map((bgm) => {
        return <div key={`${bgm.videoId}-${bgm.playedAt}`}>{bgm.title}</div>;
      })}
      <Pagination total={total} page={page} take={take} />
    </div>
  );
}
