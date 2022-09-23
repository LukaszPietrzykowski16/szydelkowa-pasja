import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getPosts = async () => {
  const query = gql`
  query Assets {
    blogs {
      author
      date
      image {
        url
      }
      title
      slug
      content {
        text
      }
    }
  }
  `

  const result = await request(graphqlAPI, query);
  console.log(result)
  return result

}

export default getPosts