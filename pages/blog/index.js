import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../Navigation'
import getPosts from '../services'

function blog() {
  return (
    <>
    <Navigation />
    <div>blog</div>
    <Footer />
    </>
  )
}

export async function getStaticProps(){
  const posts = await getPosts()
  console.log(posts)
  return {
    props: { posts },
  };
}

export default blog