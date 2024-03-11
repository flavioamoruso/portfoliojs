import { FaGithub } from "react-icons/fa";

export function Products(props) {
  return (
    <>
      <div style={{ marginBottom: "20px" }} data-aos="fade-up">
        <div class="temporary__storage">
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
        </div>
      </div>
    </>
  );
}

export default Products;
