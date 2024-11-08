import Cards from "@/components/card";

import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";

export default async function Home() {
  const data: IBlog[] = await getBlogs();

  return (
    <div className="flex">
      <Wrapper>
        <div className="gap-2 items-center justify-items-center mx-0 lg:flex flex-row">
          {data.map((item, idx) => {
            return (
              <div key={idx}>
                <Cards
                  title={item.fields.title}
                  thumbnail={item.fields.thumbnail.fields.file.url}
                  author={item.fields.author.fields.name}
                  email={item.fields.author.fields.email}
                  avatar={item.fields.author.fields.avatar.fields.file.url}
                  slug={item.fields.slug}
                  category={item.fields.category}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
