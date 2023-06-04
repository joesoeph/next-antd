'use client';

import { useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ListPosts() {
  let [counter, useCounter] = useState(1);
  const { data, error, isLoading } = useSWR(
    'http://localhost:3030/posts?_page=' + counter,
    fetcher
  );
  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';
  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Image src={item.image} alt="Test" width={200} height={200} />
            {/* <p>{item.image}</p> */}
            <Link href={'/content/' + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <p>{counter}</p>
      <button
        onClick={function () {
          useCounter(--counter);
        }}
      >
        Previous
      </button>
      <button
        onClick={function () {
          useCounter(++counter);
        }}
      >
        Next
      </button>
    </>
  );
}
