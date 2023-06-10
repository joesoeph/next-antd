import DetailPost from '@/app/content/components/DetailPost';

async function getDetailContent(id) {
  const response = await fetch('http://localhost:3030/posts/' + id);
  return response.json();
}

export async function generateMetadata({ params }) {
  const post = await getDetailContent(params.slug);

  return {
    title: post.title,
  };
}

export default async function ContentDetail({ params }) {
  const post = await getDetailContent(params.slug);
  return <DetailPost post={post} />;
}
