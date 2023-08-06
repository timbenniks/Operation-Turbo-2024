export type pageMeta = {
  title: string
  ogTitle: string
  description: string
  ogDescription: string
  ogImage: any
  ogSiteName: string
  ogType: string
  twitterCard: string
  googleSiteVerification: string
}

export function metaData(slug: string, page: pageMeta) {
  if (slug === 'home') {
    return {
      title: page?.ogTitle,
      ogTitle: page?.ogTitle,
      description: page?.ogDescription,
      ogDescription: page?.ogDescription,
      ogImage: page?.ogImage.secure_url.replace(
        `v${page?.ogImage.version}`,
        "q_auto,f_auto,w_1280"
      ),
      ogSiteName: "Tim Benniks",
      ogType: "website",
      twitterCard: "summary_large_image",
      googleSiteVerification: "hif_cn9hF2RVSnTq5HwjSkKrXqJT9Q6BR_FaBBmr-20",
    };
  }
}

export function isDateBeforeToday(date: Date) {
  return new Date(date.toDateString()) < new Date(new Date().toDateString());
}

export function toVideo(video: any, fromPlaylist: boolean) {
  return {
    date: video.snippet.publishedAt,
    title: video.snippet.title,
    description: video.snippet.description,
    image: video.snippet.thumbnails?.high?.url.replace("hqdefault", "maxresdefault"),
    videoId: fromPlaylist ? video.snippet.resourceId.videoId : video.id.videoId ? video.id.videoId : video.id
  }
}
