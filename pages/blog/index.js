import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navigation from '../Navigation'
import getPosts from '../services'

function Blog ({posts}){
  console.log(posts)
  return (
    <>
    <Navigation />
 
    {posts.map((post) => 
    <div className='post'>
      <div className='post-img'>
        <img src={post.image}/>
      </div>
      <div className='post-text'>
        <span> {post.title}</span>
        <p> {post.content.text} </p>
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