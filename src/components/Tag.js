import { Link } from "react-router-dom";

const Tag = () => {
  return (
    <div className="section" id="notif-widget">
      <div className="widget LinkList" data-version="2" id="LinkList001">
        <nav className="navS scrlH">
          <div className="secIn">
            <ul>
              <li>
                <Link
                  aria-label="Art"
                  className="l"
                  data-text="Art"
                  to={"/tag/Art"}
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Travel"
                  className="l"
                  data-text="Travel"
                  to={"/tag/Travel"}
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Life Style"
                  className="l"
                  data-text="Life Style"
                  to={"/tag/Life%20Style"}
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Photography"
                  className="l"
                  data-text="Photography"
                  to={"/tag/Photography"}
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Nature"
                  className="l"
                  data-text="Nature"
                  to={"/tag/Nature"}
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Food"
                  className="l"
                  data-text="Food"
                  to={"/tag/Food"}
                ></Link>
              </li>
              <li>
                <Link
                  aria-label="Adventure"
                  className="l"
                  data-text="Adventure"
                  to={"/tag/Adventure"}
                ></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="widget HTML" data-version="2" id="HTML0">
        <input className="ntfI hidden" id="forNft" type="checkbox" />
        <div className="ntfC">
          <div className="ntfT">
            <div className="ntfA">
              <span>
                Trang web đang trong giai đoạn phát triển
                {/* <a href="https://telegram.me/sunliteiv" target="_blank">
                  Liên hệ
                </a> */}
              </span>
              <a href="https://telegram.me/sunliteiv" target="_blank">
                Bạn muốn đóng góp?
              </a>
            </div>
          </div>
          <label aria-label="Close Menu" className="c" htmlFor="forNft"></label>
        </div>
      </div>
    </div>
  );
};

export default Tag;
