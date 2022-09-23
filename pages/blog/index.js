import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navigation from '../Navigation'
import getPosts from '../services'

function Blog ({posts}){
  
  return (
    <>
    <Navigation />
 
    {posts.map((post) => 
 
    <div className='flex flex-wrap justify-center align-center mt-8 w-full'>
      <div className='w-4/5 rounded-lg bg-slate-500'>
      <div className='w-full'>
        <img src={post.imageblog.url} alt={post.title} className="rounded-lg"/>
      </div>
      <div className='w-full'>
      {console.log(post.content.text.length)}
        <span> {post.title}</span>
        <p> {post.content.text.substring(0, 100) + "...CZYTAJ DALEJ"} </p>
      </div>
     
      <div className='flex justify-between w-full w-full'>
      <div className=''>
      <p> {post.author} </p>
      </div>
      <div className=''>
        {post.date}
      </div>
     
      </div>
     
      </div>
      

    </div>)}
    
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