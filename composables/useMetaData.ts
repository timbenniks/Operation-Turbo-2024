export async function useMetaData(slug: string) {
  const page = await useGQLQuery("page", { slug });

  useSeoMeta({
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
  });
}