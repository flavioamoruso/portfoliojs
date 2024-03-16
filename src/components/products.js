import { FaGithub } from "react-icons/fa";

export function Products(props) {
  return (
    <>
      <div
        style={{ marginTop: "40px", marginBottom: "20px" }}
        data-aos="fade-up"
      >
        {/* <div class="temporary__storage">
          <div class="card">
            <img src={props.img} alt="product-img" className="image"></img>
            <div class="image__overlay"></div>
            <div class="content">
              <div class="avatar"></div>
              <div class="content__text">
                <span class="stream__title">
                  {props.icon}
                  {props.title}
                </span>
                <div class="content__body">
                  <span class="event">{props.body}</span>
                </div>
                <button className="btn categories__btn">
                  <a href={props.code}>
                    GitHub <FaGithub />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <article class="card">
          <div class="card-img">
            <div class="card-imgs pv delete"></div>
          </div>

          <div class="project-info">
            <div class="flex">
              <div class="project-title">
                {props.icon} {props.title}
              </div>
              <span class="tag">
                <a href={props.code}>
                  <FaGithub />
                </a>
              </span>
            </div>
            <span class="lighter">{props.body}</span>
          </div>
        </article>
      </div>
    </>
  );
}

export default Products;
