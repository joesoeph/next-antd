import Image from 'next/image';

async function getDetailContent(id) {
  const response = await fetch('http://localhost:3030/posts/' + id);
  return response.json();
}

export default async function ContentDetail({ params }) {
  const post = await getDetailContent(params.slug);
  console.log(params);
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
