import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navigation from '../Navigation';
import { getExactPost, getPosts} from '../../services';
import { motion, useScroll } from "framer-motion";


function PostDetails({post}) {
  const { scrollYProgress } = useScroll();


  const exact = () => {
   return post.map((exactPost) => {
        return  <div className='flex flex-wrap justify-center align-center w-full'>
        <div className='flex justify-center align-center pt-8'>
        <img src={exactPost.imageblog.url} className="w-4/5 rounded-lg"  alt={exactPost.title}/>
        </div>
        <div className='w-4/5 text-center'>
        <h1 className='text-4xl pt-4 pb-8 w-full'> {exactPost.title} </h1>
        </div>
        <div className='w-4/5 md:w-2/3'>
        <p> {exactPost.content.text}</p>
        </div>
        <div className='w-4/5 flex flex-wrap justify-center align-center pt-8'>
          {exactPost.morePhoto.map((test) => <div className='p-2 md:w-2/5' key={test}> <img src={test.url} className="rounded-lg" key={test}/> </div>)}
        </div>
        <div className='flex justify-between w-full w-4/5 md:w-2/3 m-1'>
        <div className=''>
        <p> {exactPost.author} </p>
        </div>
        <div className=''>
          {exactPost.date}
        </div>

        </div>
        </div>
    })
    

  }

  return (
    <>
    <Navigation />
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        />
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