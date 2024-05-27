import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const url = `https://www.blogger.com/feeds/4491005031879174222/posts/default?alt=json&q=${slug}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.feed && data.feed.entry) {
        const processedPost = data.feed.entry.map((entry) => ({
          title: entry.title.$t.split("|")[1].trim(),
          updated: entry.updated.$t.split("T")[0],
          content: entry.content.$t,
          categories: entry.category
            ? entry.category.map((category) => category.term)
            : [],
        }))[0];

        setPost(processedPost);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <article class="ntry ps post">
      <h1 class="pTtl aTtl sml itm">
        <span>{post.title}</span>
      </h1>
      <div class="pInr">
        <div class="pEnt">
          <div class="pS post-body postBody">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
        <div class="lbHt">
          {post.categories.map((category, index) => (
            <Link to={`/tag/${category}`} key={index}>
              {category}
            </Link>
          ))}
        </div>
        <div class="pInf pSml ps">
          <div class="pIm">
            <div
              class="im"
              style={{
                backgroundImage: `url("//1.bp.blogspot.com/-MmgmA4StTF4/ZR0rZwseOsI/AAAAAAAACsk/7mmEQE4G7yg1zcdnFFhs2_UrdxFLGWjZgCK4BGAYYCw/w40-h40-p-k-no-nu-rw-e30/logo.webp")`,
              }}
            ></div>
          </div>
          <div class="pNm">
            <a
              class="nm"
              data-text="Admin"
              data-write="Published by"
              href="https://t.me/sunliteiv"
              target="_blank"
            ></a>
            <div class="pDr">
              <bdi class="pDt pIn">
                <time
                  class="aTtmp pTtmp upd"
                  data-date="Updated:"
                  data-text={post.updated}
                ></time>
              </bdi>
              <div class="pRd pIn">
                <bdi id="rdTime">Current views: __ view</bdi>
              </div>
            </div>
          </div>
          <div class="pCm">
            <div class="pIc">
              <label style={{ padding: "4px" }} class="bmPs tIc a">
                <svg class="line" viewBox="0 0 24 24">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"></path>
                  <path d="M8.46997 13.4599L12 9.93994L15.53 13.4599"></path>
                </svg>
              </label>
              <span>__</span>
              <label style={{ padding: "4px" }} class="sh tIc" for="forShare">
                <svg class="line" viewBox="0 0 24 24">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"></path>
                  <path d="M8.46997 10.6399L12 14.1599L15.53 10.6399"></path>
                </svg>
              </label>
              <span>__</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
