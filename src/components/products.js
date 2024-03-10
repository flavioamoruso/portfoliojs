import styled from "styled-components";

const StyledCard = styled.div`
  .temporary__storage {
    /*delete this*/
    width: 350px;
    height: 350px;
    background: #1b1a1a;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
  }

  .card {
    width: 320px;
    height: 300px;
    background: #1b1a1a;
    position: relative;
    color: #e6e6ea;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .image {
    max-width: 100%;
    height: auto;
  }

  .image::before {
    content: "LIVE";
    position: absolute;
    top: 7px;
    left: 7px;
    font-weight: 900;
    font-size: 0.8em;
    background-color: rgb(228, 33, 33);
    border-radius: 5px;
    padding: 3px 5px;
  }

  .image::after {
    content: "102.2k viewers";
    position: absolute;
    bottom: 7px;
    left: 7px;
    font-weight: 300;
    font-size: 0.7em;
    background-color: rgb(59, 53, 53);
    border-radius: 2px;
    padding: 3px 5px;
  }

  .image__overlay {
    width: 100%;
    height: 180px;
  }

  .image:hover {
    transform: translate(8px, -8px);
    box-shadow:
      -1px 1px 0px 0px violet,
      -2px 2px 0px 0px violet,
      -3px 3px 0px 0px violet,
      -4px 4px 0px 0px violet,
      -5px 5px 0px 0px violet,
      -6px 6px 0px 0px violet,
      -7px 7px 0px 0px violet,
      -8px 8px 0px 0px violet;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    background-image: linear-gradient(
      to right top,
      #371f05,
      #654607,
      #8b7600,
      #a4ae00,
      #a8eb12
    );
  }

  .content {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .content__text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .content__body {
    display: flex;
    flex-direction: column;
  }

  .stream__title {
    font-weight: 900;
    width: 260px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
  }

  .event {
    cursor: pointer;
  }

  .streamer__name,
  .event {
    font-size: 0.8em;
    font-weight: 400;
    color: rgb(216, 213, 213);
  }

  .categories__btn {
    text-decoration: none;
    color: rgb(216, 213, 213);
    font-size: 0.8em;
    background-color: rgb(73, 71, 71);
    padding: 3px 10px;
    border-radius: 15px;
  }

  .stream__title:hover,
  .event:hover {
    color: #9f7cd3;
  }

  .categories__btn:hover {
    background-color: rgb(79, 79, 79);
  }
`;

export function Products(props) {
  return (
    <>
      <StyledCard
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
        data-aos="zoom-in"
      >
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
                <button className="categories__btn">
                  <a href={props.code}>GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </StyledCard>
    </>
  );
}

export default Products;
