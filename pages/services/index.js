import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getPosts = async () => {
  const query = gql`
  query Assets {
    blogs {
      author
      date
      title
      slug
      content {
        text
      }
      imageblog {
        url
      }
    }
  }
  `

  const result = await request(graphqlAPI, query);
  return result.blogs
}

export const getExactPost = async (slug) => {
  const query = gql`
  query getExactPost($slug : String!){
    blogs(where: {slug: $slug}) {
      author
      date
      title
      slug
      content {
        text
      }
      imageblog {
        url
      }
    }
  }
  `

  const result = await request(graphqlAPI, query, {slug});
  console.log(result)
  return result.blogs
}


export default getPosts