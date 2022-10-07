import Link from 'next/link'
import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navigation from '../Navigation'
import getPosts from '../../services'
import { motion } from "framer-motion"


function Blog ({posts}){

  return (
    <>
    <Navigation />
    <div className='block md:grid md:grid-cols-3'>
    {posts.map((post) => 

  <div className='flex flex-wrap justify-center align-center mt-8 w-full' key={post}>
   
    <motion.div  initial={{opacity: 0, y: '10vh'}} animate={{opacity: 1, y: 0}} transition={{ type: 'spring', duration: 1.3}} className='w-4/5 rounded-lg p-4 border-2 border-[#12e1f1]'>
    <div className='w-full'>
      <img src={post.imageblog.url} alt={post.title} className="rounded-lg"/>
    </div>
    <div className='w-full p-1'>
      <span className='text-2xl'> {post.title}</span>
      <p className='pb-1'> {post.content.text.substring(0, 100) + "...CZYTAJ DALEJ"} </p>
    </div>

    <div className='flex justify-between w-full w-full p-1'>
    <div className=''>
    <p> {post.author} </p>
    </div>
    <div className=''>
      {post.date}
    </div>

    </div>

    </motion.div>
 

 </div>)}
    </div>


    <Footer />
    </>
  )
}

export async function getStaticProps(){
  const posts = await getPosts()
  return {
    props: { posts },
  };
}



export default Blog