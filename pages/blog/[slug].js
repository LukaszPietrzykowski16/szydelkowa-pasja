import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navigation from '../Navigation';
import { getExactPost, getPosts} from '../services';
import { motion, useScroll } from "framer-motion";
import Image from "next/image"

function PostDetails({post}) {
  const { scrollYProgress } = useScroll();
 

  return (
    <>
    <Navigation />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        />
        <div className='flex flex-wrap justify-center align-center w-full'>
          <div className='flex justify-center align-center pt-8'>
          <img src={post[0].imageblog.url} className="w-4/5 rounded-lg"  alt={post[0].title}/>
          </div>
          <div className='w-4/5 text-center'>
          <h1 className='text-4xl pt-4 pb-8 w-full'> {post[0].title} </h1>
          </div>
          <div className='w-4/5 md:w-2/3'>
          <p> {post[0].content.text}</p>
          </div>
          <div className='w-4/5 flex flex-wrap justify-center align-center pt-8'>
            {post[0].morePhoto.map((test) => <div className='p-2 md:w-2/5' key={test}> <img src={test.url} className="rounded-lg" key={test}/> </div>)}
          </div>
          <div className='flex justify-between w-full w-4/5 md:w-2/3 m-1'>
          <div className=''>
          <p> {post[0].author} </p>
          </div>
          <div className=''>
            {post[0].date}
          </div>
          
          </div>
         
        </div>
        
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