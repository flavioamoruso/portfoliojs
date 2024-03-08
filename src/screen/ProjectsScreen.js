import { Products } from "../components/products";
import contents from "../utils/content";

export default function App() {
  return (
    <>
      <div style={{ marginTop: "24px", textAlign: "center" }}>
        <h3>Benventi nel mio portfolio online </h3>
        <p style={{ marginTop: "16px" }}>
          Sono entusiasta di mostrarti una serie di progetti che ho realizzato.
          Prenditi il tempo per esplorare e non esitare a contattarmi se hai
          domande o feedback.
        </p>
      </div>

      <div
        style={{ marginTop: "12px", marginBottom: "50px" }}
        data-aos="fade-top"
      >
        {contents.map((contents) => (
          <Products
            key={contents.id}
            title={contents.title}
            body={contents.body}
            img={contents.img}
          />
        ))}
      </div>
    </>
  );
}
