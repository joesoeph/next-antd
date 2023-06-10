import Image from 'next/image';

export default function DetailPost({ post }) {
  return (
    <>
      <Image
        src={post.image}
        sizes="(max-width: 768px) 100vw"
        width={500}
        height={500}
        alt={post.image}
      />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}
