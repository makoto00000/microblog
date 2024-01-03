import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => {
        return(
          <article key={article.id} className="flex flex-col shadow my-4">
            <Link href={`articles/${article.id}`} className="hover:opacity-75">
              <Image src={article.image} alt="blog-image" width={1280} height={300} />
            </Link>
            <div className="bg-white flex flex-col justify-start p-6">
              <Link href={`articles/${article.id}`} className="text-blue-700 text-sm font-bold uppercase pb-4">
                Technology
              </Link>
              <Link href={`articles/${article.id}`} className="text-3xl font-bold hover:text-gray-700 pb-4">
                {article.title}
              </Link>
              <p className="text-sm pb-3">
                By{" "}
                <Link href={`articles/${article.id}`} className="font-semibold hover:text-gray-800">
                  David Grzyb
                </Link>
                {/* , Published on April 25th, 2020 */}
                , Published on {article.created_at}
              </p>
              <Link href={`articles/${article.id}`} className="pb-6">
                {article.content}
              </Link>

              <Link href={`articles/${article.id}`} className="uppercase text-gray-800 hover:text-black">
                Continue Reading <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  );
};

export default ArticleList;