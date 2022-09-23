import React from 'react'
import Footer from '../components/Footer';
import Navigation from '../Navigation';
import { getExactPost, getPosts} from '../services';

function PostDetails({post}) {
    console.log(post)
  return (
    <>
    <Navigation />
    <div>PostDetails</div>
    <Footer />
    </>
  )
}

export default PostDetails


export async function getStaticProps({ params }) {
    const data = await getExactPost(params.slug);
    return {
      props: {
        post: data,
      },
    };
  }

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(( { slug } ) => ({ params: { slug } })),
      fallback: true,
    };
  }