import React from "react";
import img from "../../img/blog_img_1.png";
import img1 from "../../img/blog_img_2.png";
import img2 from "../../img/blog_img_3.png";
import img3 from "../../img/blog_img_4.png";
import img4 from "../../img/blog_sidenav_img1.png";
import img5 from "../../img/blog_sidenav_img2.png";
import img6 from "../../img/blog_sidenav_img3.png";
import img7 from "../../img/blog_sidenav_img4.png";
import img8 from "../../img/blog_sidenav_img5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCommentDots, faMagnifyingGlass, faUser,  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";











const MyBlog = () => {
  return (
    <>
  {/* Breadcrumb */}
  <div className="bg-success">
    <div className="container div-breadcrumb">
      <div className="row">
        <div className="col text-white div-active-page-title">Blog</div>
        <div className="col text-white text-right div-breadcrumb">
          <a className="text-white" href="index.html">
            Home
          </a>{" "}
          / Blog
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb */}


   <div className="container pt-5 pb-5">
  <div className="row">
    <div className="col-lg-8">
      <div className="blog_imgs_div">
        <div className="card mt-2 shadow border-0">
        <img src={img} className="blog_sidenav_img" alt="avatar" />
          <div className="card-body">
            <h3 className="card-title">
              <strong>
                Dolorum optio tempore voluptas dignissimos cumque fuga qui
                quibusdam quia
              </strong>
            </h3>
            <div className="d-flex small_pp">
                <FontAwesomeIcon className="blog_card_icon fa-regular text-muted" icon={faUser}/>
              <p className="text-muted small_pp">
                <small>John Doe</small>
              </p>
              <FontAwesomeIcon className="text-muted blog-card-icon blog_card_icon" icon={faClock}/>

              <p className="text-muted small_pp">
                <small>Jan 1, 2020</small>
              </p>
              <FontAwesomeIcon className="text-muted blog_card_icon" icon={faCommentDots}/>
              <p className="text-muted small_pp">
                <small>12 Comments</small>
              </p>
            </div>
            <p className="card-text">
              <small>
                Similique neque nam consequuntur ad non maxime aliquam quas.
                Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea
                dolorem doloremque deleniti aperiam unde soluta. Est cum et quod
                quos aut ut et sit sunt. Voluptate porro consequatur assumenda
                perferendis dolore.
              </small>
            </p>
            <div className="d-flex justify-content-end">
			<Link 
				className="btn bg-success text-white"
				role="button"
				to="/BlogSingle"
				> 
				Read More
			</Link>
            </div>
          </div>
        </div>
        <div className="card shadow border-0 mt-5">
        <img src={img1} className="blog_sidenav_img" alt="avatar" />
          <div className="card-body">
            <h3 className="card-title">
              <strong>
                Dolorum optio tempore voluptas dignissimos cumque fuga qui
                quibusdam quia
              </strong>
            </h3>
            <div className="d-flex small_pp">
            <FontAwesomeIcon className="blog_card_icon fa-regular text-muted" icon={faUser}/>
              <p className="text-muted small_pp">
                <small>John Doe</small>
              </p>
              <FontAwesomeIcon className="text-muted blog-card-icon blog_card_icon" icon={faClock}/>
              <p className="text-muted small_pp">
                <small>Jan 1, 2020</small>
              </p>
              <FontAwesomeIcon className="text-muted blog_card_icon" icon={faCommentDots}/>
              <p className="text-muted small_pp">
                <small>12 Comments</small>
              </p>
            </div>
            <p className="card-text">
              <small>
                Similique neque nam consequuntur ad non maxime aliquam quas.
                Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea
                dolorem doloremque deleniti aperiam unde soluta. Est cum et quod
                quos aut ut et sit sunt. Voluptate porro consequatur assumenda
                perferendis dolore.
              </small>
            </p>
            <div className="d-flex justify-content-end">
            <Link 
				className="btn bg-success text-white"
				role="button"
				to="/BlogSingle"
				> 
				Read More
			</Link>

            </div>
          </div>
        </div>
        <div className="card shadow border-0 mt-5">
        <img src={img2} className="blog_sidenav_img" alt="avatar" />
          <div className="card-body">
            <h3 className="card-title">
              <strong>
                Dolorum optio tempore voluptas dignissimos cumque fuga qui
                quibusdam quia
              </strong>
            </h3>
            <div className="d-flex small_pp">
            <FontAwesomeIcon className="blog_card_icon fa-regular text-muted" icon={faUser}/>
              <p className="text-muted small_pp">
                <small>John Doe</small>
              </p>
              <FontAwesomeIcon className="text-muted blog-card-icon blog_card_icon" icon={faClock}/>
              <p className="text-muted small_pp">
                <small>Jan 1, 2020</small>
              </p>
              <FontAwesomeIcon className="text-muted blog_card_icon" icon={faCommentDots}/>
              <p className="text-muted small_pp">
                <small>12 Comments</small>
              </p>
            </div>
            <p className="card-text">
              <small>
                Similique neque nam consequuntur ad non maxime aliquam quas.
                Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea
                dolorem doloremque deleniti aperiam unde soluta. Est cum et quod
                quos aut ut et sit sunt. Voluptate porro consequatur assumenda
                perferendis dolore.
              </small>
            </p>
            <div className="d-flex justify-content-end">
            <Link 
				className="btn bg-success text-white"
				role="button"
				to="/BlogSingle"
				> 
				Read More
			</Link>
            </div>
          </div>
        </div>
        <div className="card shadow border-0 mt-5">
        <img src={img3} className="blog_sidenav_img" alt="avatar" />
          <div className="card-body">
            <h3 className="card-title">
              <strong>
                Dolorum optio tempore voluptas dignissimos cumque fuga qui
                quibusdam quia
              </strong>
            </h3>
            <div className="d-flex small_pp">
            <FontAwesomeIcon className="blog_card_icon fa-regular text-muted" icon={faUser}/>
              <p className="text-muted small_pp">
                <small>John Doe</small>
              </p>
              <FontAwesomeIcon className="text-muted blog-card-icon blog_card_icon" icon={faClock}/>
              <p className="text-muted small_pp">
                <small>Jan 1, 2020</small>
              </p>
              <FontAwesomeIcon className="text-muted blog_card_icon" icon={faCommentDots}/>
              <p className="text-muted small_pp">
                <small>12</small>
              </p>
            </div>
            <p className="card-text">
              <small>
                Similique neque nam consequuntur ad non maxime aliquam quas.
                Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea
                dolorem doloremque deleniti aperiam unde soluta. Est cum et quod
                quos aut ut et sit sunt. Voluptate porro consequatur assumenda
                perferendis dolore.
              </small>
            </p>
            <div className="d-flex justify-content-end">
        		<Link 
				className="btn bg-success text-white"
				role="button"
				to="/BlogSingle"
				> 
				Read More
			</Link>
            </div>
          </div>
        </div>
      </div>
      <nav className=" d-flex justify-content-center pt-5" aria-label="">
        <ul className="pagination pt-1">
          <li className="page-item">
            <a
              className="page-link text-dark border-0 rounded-0 page_1"
              onclick="pageF1()"
              href="#"
            >
              1
            </a>
          </li>
          <li className="page-item ">
            <a
              className="page-link text-white bg-success rounded-0 border-0 page_2"
              onclick="pageF2()"
              href="#"
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-dark border-0 rounded-0 page_3"
              onclick="pageF3()"
              href="#"
            >
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="col-lg-4 mt-2">
      <div className="card border-0 shadow">
        <div className="card-body">
          <h5 className="card-title">Search</h5>
          <form className="d-flex">
            <div className="input-group">
              <input className="form-control form-control-sm" type="text" />
              <br />
              <div className="input-group-append">
                <button className="btn btn-sm bg-success" type="submit">
                <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass}/>
                </button>
              </div>
            </div>
          </form>
          <div className="pl-0 pt-3">
            <h5 className="card-title">Categories</h5>
            <ul className="pl-0 blog_side_nav_li">
              <li className="d-flex">
                <small>General</small>
                <small>
                  <p className="text-muted pl-2">(25)</p>
                </small>
              </li>
              <li className="d-flex">
                <small>Lifestyle</small>
                <small>
                  <p className="text-muted pl-2">(12)</p>
                </small>
              </li>
              <li className="d-flex">
                <small>Travel</small>
                <small>
                  <p className="text-muted pl-2">(5)</p>
                </small>
              </li>
              <li className="d-flex">
                <small>Design</small>
                <small>
                  <p className="text-muted pl-2">(22)</p>
                </small>
              </li>
              <li className="d-flex">
                <small>Creative</small>
                <small>
                  <p className="text-muted pl-2">(8)</p>
                </small>
              </li>
              <li className="d-flex">
                <small>Education</small>
                <small>
                  <p className="text-muted pl-2">(14)</p>
                </small>
              </li>
            </ul>
          </div>
          <h5 className="card-title">Recent Posts</h5>
          <div>
            <div className="d-flex pb-3 blog_sidenav_div">
            <img src={img4} className="blog-card-icon" alt="avatar" />
              <div>
                <h6 className="pl-2">
                  <small>
                    <b>Nihil blanditiis at in nihil autem</b>
                  </small>
                </h6>
                <p className="pl-2 text-muted blog_sidenav_date">
                  <small>Jan 1, 2020</small>
                </p>
              </div>
            </div>
            <div className="d-flex pb-3 blog_sidenav_div">
            <img src={img5} className="blog_sidenav_img" alt="avatar" />
              <div>
                <h6 className="pl-2">
                  <small>
                    <b>Quidem autem et impedit</b>
                  </small>
                </h6>
                <p className="pl-2 text-muted blog_sidenav_date">
                  <small>Jan 1, 2020</small>
                </p>
              </div>
            </div>
            <div className="d-flex pb-3 blog_sidenav_div">
            <img src={img6} className="blog_sidenav_img" alt="avatar" />
              <div>
                <h6 className="pl-2">
                  <small>
                    <b>Id quia et et ut maxime similique occaecati ut</b>
                  </small>
                </h6>
                <p className="pl-2 text-muted blog_sidenav_date">
                  <small>Jan 1, 2020</small>
                </p>
              </div>
            </div>
            <div className="d-flex pb-3 blog_sidenav_div">
            <img src={img7} className="blog_sidenav_img" alt="avatar" />
              <div>
                <h6 className="pl-2">
                  <small>
                    <b>Laborum corporis quo dara net para</b>
                  </small>
                </h6>
                <p className="pl-2 text-muted blog_sidenav_date">
                  <small>Jan 1, 2020</small>
                </p>
              </div>
            </div>
            <div className="d-flex pb-3 blog_sidenav_div">
            <img src={img8} className="blog_sidenav_img" alt="avatar" />
              <div>
                <h6 className="pl-2">
                  <small>
                    <b>Et dolores corrupti quae illo quod dolor</b>
                  </small>
                </h6>
                <p className="pl-2 text-muted blog_sidenav_date">
                  <small>Jan 1, 2020</small>
                </p>
              </div>
            </div>
          </div>
          <div className="pb-3">
            <h5 className="card-title">Tags</h5>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>App</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>IT</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>Business</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>Mac</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>Design</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>Office</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>Creative</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>Studio</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>Smart</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>Tips</small>
            </button>
            <button
              className="mt-1 pl-2 pr-2 text-dark bg-white blog_sidenav_tag"
              type="button"
            >
              <small>Marketing</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  
  );
}

export default MyBlog;
