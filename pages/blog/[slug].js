import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navigation from '../Navigation';
import { getExactPost, getPosts} from '../../services';
import { motion, useScroll } from "framer-motion";


function PostDetails({post}) {
  const { scrollYProgress } = useScroll();


  const exact = () => {
   return post.map((test) => {
        return test.title
    })
    

  }

  return (
    <>
    <Navigation />
    {post === undefined ? 'test': exact()}
   
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