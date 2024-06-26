export async function useOGTags(page: any) {
  return useSeoMeta({
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
    twitterCreator: "Tim Benniks",
    twitterDescription: page?.ogDescription,
    twitterSite: "https://timbenniks.dev/",
    googleSiteVerification: "hif_cn9hF2RVSnTq5HwjSkKrXqJT9Q6BR_FaBBmr-20",
  });
}