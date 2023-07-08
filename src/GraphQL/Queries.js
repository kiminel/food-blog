import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

const category = ` 
id,
name,
slug,
color { css }
`;

const comment = `
id,
name,
email,
comment
`;

const post = `
id, 
title,
slug,
description,
createdAt,
updatedAt
coverPhoto { url },
dishPicture { url },
decorationPicture { url },
cookingDetails { html },
ingredients { html },
directions { html },
`;

export const QUERY_SLUG_CATEGORIES = gql`
  {
    categories() {
      name
      slug
    }
  }
`;

export const QUERY_POSTS = gql`
{
    posts(orderBy: updatedAt_DESC){
        ${post}
        categories() {
            ${category}
        }
    }
}
`;

export const QUERY_POSTS_BY_CATEGORY = gql`
query GetPostsByCategory($slug: String!){
    posts(
      where: {categories_some: {slug: $slug}}
      ){
        ${post}
        categories() {
            ${category}
        }
    }
}
`;

export const QUERY_SEARCH_POSTS = gql`
query GetSearchPosts ($slug: String!){
    posts(
      orderBy: updatedAt_DESC,
      where: {_search: $slug, AND: {slug_contains: $slug}}
      ){
        ${post}
        categories() {
            ${category}
        }
    }
}
`;

export const QUERY_SINGLE_POST = gql`
query GetSinglePost ($slug: String!){
    posts(
      where: {slug: $slug}
      ){
        ${post}
        categories() {
            ${category}
        }
        comments(orderBy: updatedAt_DESC) {
          ${comment}

        }
    }
}
`;
