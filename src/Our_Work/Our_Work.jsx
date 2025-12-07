import "./Our_Work.css";

export function Our_Work() {
  return (
    <section id="gallery" className="work">
      <h2 className="work_title">Our Work</h2>
      <h2 className="work_caption">
        Every nail tells a story. Browse our latest creations
      </h2>

      <div className="work_list">
        <div className="work_card">
          <img src="../../images/img1.jpg" alt="" className="work_img" />
        </div>

        <div className="work_card">
          <img src="../../images/img2.jpg" alt="" className="work_img" />
        </div>

        <div className="work_card">
          <img src="../../images/img3.jpg" alt="" className="work_img" />
        </div>

        <div className="work_card">
          <img src="../../images/img4.jpg" alt="" className="work_img" />
        </div>

        <div className="work_card">
          <img src="../../images/img5.jpg" alt="" className="work_img" />
        </div>

        <div className="work_card">
          <img src="../../images/img6.jpg" alt="" className="work_img" />
        </div>
      </div>
    </section>
  );
}
