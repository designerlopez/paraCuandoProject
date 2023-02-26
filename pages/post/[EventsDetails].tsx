import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { EventsDetails } = router.query;

  return (
    <div>
      <p>Post:{EventsDetails}</p>
      <h1>este es el post</h1>
    </div>
  );
};

export default Post;
