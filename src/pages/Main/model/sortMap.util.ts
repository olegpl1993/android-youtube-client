export const sortMap = {
  date: (a: any, b: any) =>
    new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(),
  views: (a: any, b: any) => b.statistics.viewCount - a.statistics.viewCount,
};
