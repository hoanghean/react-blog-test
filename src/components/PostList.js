import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const page = id ? parseInt(id) : 1;
      const startIndex = (page - 1) * 8 + 1;
      const url = `https://www.blogger.com/feeds/4491005031879174222/posts/default?alt=json&max-results=8&start-index=${startIndex}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.feed && data.feed.entry) {
        const processedPosts = data.feed.entry.map((post) => ({
          slug: post.title.$t.split("|")[0].trim(),
          title: post.title.$t.split("|")[1].trim(),
          updated: post.updated.$t.split("T")[0],
          content: post.content.$t.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 80),
          // categories: post.category ? post.category.map((category) => category.term) : [],
          categories: post.category
            ? post.category.map((category) => category.term).slice(0, 2)
            : [],
          imgThumb:
            post.content.$t.match(/src="([^"]+)"/)?.[1] ||
            post.content.$t.match(/href="([^"]+)"/)?.[1] ||
            "",
        }));
        setPosts(processedPosts);
        const totalEntries = data.feed.openSearch$totalResults.$t;
        setTotalPages(Math.ceil(totalEntries / 8));
        setCurrentPage(page);
      }
    };

    fetchPosts();
  }, [id]);

  return (
    <>
      <div className="blogPts">
        {posts.map((post) => (
          <article className="ntry">
            <div className="pThmb">
              <Link className="thmb" to={`/${post.slug}`}>
                <img className="widget imgThm" src={post.imgThumb} />
              </Link>
              <div className="iFxd">
                <span className="pV hidden pu-views" data-id={post.slug}>
                  <svg className="line" viewBox="0 0 24 24">
                    <g transform="translate(2.000000, 4.000000)">
                      <path
                        className="svgC"
                        d="M13.1643,8.0521 C13.1643,9.7981 11.7483,11.2141 10.0023,11.2141 C8.2563,11.2141 6.8403,9.7981 6.8403,8.0521 C6.8403,6.3051 8.2563,4.8901 10.0023,4.8901 C11.7483,4.8901 13.1643,6.3051 13.1643,8.0521 Z"
                      ></path>
                      <path d="M0.7503,8.0521 C0.7503,11.3321 4.8923,15.3541 10.0023,15.3541 C15.1113,15.3541 19.2543,11.3351 19.2543,8.0521 C19.2543,4.7691 15.1113,0.7501 10.0023,0.7501 C4.8923,0.7501 0.7503,4.7721 0.7503,8.0521 Z"></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="pCntn">
              <div className="pHdr pSml">
                <div className="pLbls" data-text="in">
                  {post.tag && Array.isArray(post.tag)
                    ? post.tag.map((tag, index) => (
                        <Link
                          key={index}
                          aria-label={tag}
                          data-text={tag}
                          to={`/tag/${tag}`}
                          rel="tag"
                        ></Link>
                      ))
                    : null}

                  {post.categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/tag/${category}`}
                      data-text={category}
                    ></Link>
                  ))}
                </div>
              </div>
              <h2 className="pTtl aTtl sml">
                <Link
                  data-text={post.title}
                  to={`/${post.slug}`}
                  rel="bookmark"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="pSnpt">{post.content}</div>
              <div className="pInf pSml">
                <time
                  className="aTtmp pTtmp pbl"
                  data-text={post.updated}
                ></time>
                <Link
                  aria-label="Đọc thêm"
                  className="pJmp"
                  data-text="Tiếp tục đọc"
                  to={`/${post.slug}`}
                ></Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div class="blogPg">
        {currentPage > 1 ? (
          <Link
            aria-label="Mới nhất"
            className="nwLnk"
            data-text="Mới nhất"
            to={`/page/${currentPage - 1}`}
          >
            <svg className="line" viewBox="0 0 24 24">
              <g transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) translate(5.500000, 4.000000)">
                <line x1="6.7743" x2="6.7743" y1="15.7501" y2="0.7501"></line>
                <path d="M12.7988,9.6998 C12.7988,9.6998 9.5378,15.7498 6.7758,15.7498 C4.0118,15.7498 0.7498,9.6998 0.7498,9.6998"></path>
              </g>
            </svg>
          </Link>
        ) : (
          <span
            style={{ background: "grey" }}
            className="nwLnk"
            data-text="Mới nhất"
          >
            <svg className="line" viewBox="0 0 24 24">
              <g transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) translate(5.500000, 4.000000)">
                <line x1="6.7743" x2="6.7743" y1="15.7501" y2="0.7501"></line>
                <path d="M12.7988,9.6998 C12.7988,9.6998 9.5378,15.7498 6.7758,15.7498 C4.0118,15.7498 0.7498,9.6998 0.7498,9.6998"></path>
              </g>
            </svg>
          </span>
        )}
        <Link aria-label="Trang chủ" className="hmLnk" to={"/"}>
          <svg className="line" viewBox="0 0 24 24">
            <g transform="translate(2.400000, 2.000000)">
              <path d="M1.24344979e-14,11.713 C1.24344979e-14,6.082 0.614,6.475 3.919,3.41 C5.365,2.246 7.615,0 9.558,0 C11.5,0 13.795,2.235 15.254,3.41 C18.559,6.475 19.172,6.082 19.172,11.713 C19.172,20 17.213,20 9.586,20 C1.959,20 1.24344979e-14,20 1.24344979e-14,11.713 Z"></path>
            </g>
          </svg>
        </Link>
        {currentPage < totalPages ? (
          <Link
            aria-label="Cũ nhất"
            className="olLnk"
            data-text="Cũ nhất"
            to={`/page/${currentPage + 1}`}
          >
            <svg className="line" viewBox="0 0 24 24">
              <g transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) translate(5.500000, 4.000000)">
                <line x1="6.7743" x2="6.7743" y1="15.7501" y2="0.7501"></line>
                <path d="M12.7988,9.6998 C12.7988,9.6998 9.5378,15.7498 6.7758,15.7498 C4.0118,15.7498 0.7498,9.6998 0.7498,9.6998"></path>
              </g>
            </svg>
          </Link>
        ) : (
          <span
            style={{ background: "grey" }}
            className="olLnk"
            data-text="Cũ nhất"
          >
            <svg className="line" viewBox="0 0 24 24">
              <g transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) translate(5.500000, 4.000000)">
                <line x1="6.7743" x2="6.7743" y1="15.7501" y2="0.7501"></line>
                <path d="M12.7988,9.6998 C12.7988,9.6998 9.5378,15.7498 6.7758,15.7498 C4.0118,15.7498 0.7498,9.6998 0.7498,9.6998"></path>
              </g>
            </svg>
          </span>
        )}
      </div>
    </>
  );
};

export default PostList;
