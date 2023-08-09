import type {
  ArticlesQueryVariables,
  PlaylistQueryVariables,
  PageQueryVariables,
  TalksQueryVariables,
} from "#gql";

export async function useGQLQuery(which: "page" | "talks" | "videos" | "articles",
  properties: ArticlesQueryVariables | PlaylistQueryVariables | PageQueryVariables | TalksQueryVariables) {

  let data: any;

  if (which === 'page') {
    data = await GqlPage(<PageQueryVariables>properties);
  }

  if (which === 'talks') {
    data = await GqlTalks(<TalksQueryVariables>properties);
  }

  if (which === 'videos') {
    const res = await GqlPlaylist(<PlaylistQueryVariables>properties);
    data = { videos: res.videoDataCollection?.videos }
  }

  if (which === 'articles') {
    const res = await GqlArticles(<ArticlesQueryVariables>properties);
    data = { articles: res.articledatacollection?.articles }
  }

  return data[which];
}