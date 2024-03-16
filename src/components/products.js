import { FaGithub } from "react-icons/fa";

export function Products(props) {
  return (
    <>
      <div
        style={{ marginTop: "40px", marginBottom: "20px" }}
        data-aos="fade-up"
      >
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
