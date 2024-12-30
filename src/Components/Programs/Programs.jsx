import "./Programs.css";
import P1 from "../../assets/program-1.png";
import P2 from "../../assets/program-2.png";
import P3 from "../../assets/program-3.png";
import PI1 from "../../assets/program-icon-1.png";
import PI2 from "../../assets/program-icon-2.png";
import PI3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="Programs" id="program">
      <div className="Program">
        <img src={P1} alt="" />
        <div className="caption">
          <img src={PI1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="Program">
        <img src={P2} alt="" />
        <div className="caption">
          <img src={PI2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="Program">
        <img src={P3} alt="" />
        <div className="caption">
          <img src={PI3} alt="" />
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
