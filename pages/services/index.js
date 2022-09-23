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
  console.log(result.blogs)
  return result.blogs

}

export default getPosts