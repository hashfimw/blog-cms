const base_url = process.env.CONTENTFULL_BASE_URL;
const spaceId = process.env.CONTENTFULL_BASE_ID;
const token = process.env.CONTENTFULL_TOKEN;

import resolveResponse from "contentful-resolve-response";

export const getBlogs = async () => {
  const res = await fetch(
    `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=blog`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);

  return result;
};

export const getBlogSlug = async (slug: string) => {
  const res = await fetch(
    `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);

  return result[0];
};

export const getBlogRecom = async (slug: string) => {
  const res = await fetch(
    `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug[ne]=${slug}&limit=3`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);

  return result;
};
