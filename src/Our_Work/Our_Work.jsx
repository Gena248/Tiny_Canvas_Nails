import "./Our_Work.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";

export function Our_Work() {
  return (
    <section id="gallery" className="work">
      <h2 className="work_title">Our Work</h2>
      <h2 className="work_caption">
        Every nail tells a story. Browse our latest creations
      </h2>

      <div className="work_list">
        <div className="work_card">
          <img src={img1} alt="Image of nails" className="work_img" />
        </div>

        <div className="work_card">
          <img src={img2} alt="Image of nails" className="work_img" />
        </div>

        <div className="work_card">
          <img src={img3} alt="Image of nails" className="work_img" />
        </div>

        <div className="work_card">
          <img src={img4} alt="Image of nails" className="work_img" />
        </div>

        <div className="work_card">
          <img src={img5} alt="Image of nails" className="work_img" />
        </div>

        <div className="work_card">
          <img src={img6} alt="Image of nails" className="work_img" />
        </div>
      </div>
    </section>
  );
}
