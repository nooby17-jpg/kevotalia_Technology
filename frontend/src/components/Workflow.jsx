import blinkit  from './../assets/blinkit.png';
import birla    from './../assets/birla-logo.png';
import cghs     from './../assets/cghs.png';
import GWB      from './../assets/gwb.png';
import ESIC     from './../assets/esic.png';
import IAF      from './../assets/IAF.png';
import IAI      from './../assets/Indian_Army_insignia.svg.png';
import bureau   from './../assets/images.png';      // Bureau of Mines / IBM placeholder
import logoAN   from './../assets/logoAn.png';
import IAN      from './../assets/IAN.png';
import nestle   from './../assets/nestle.png';
import prosure  from './../assets/prosure.jfif';
import { GiStairsGoal }       from "react-icons/gi";
import { GoSmiley }            from "react-icons/go";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import "./../styles/workflow.css";

const logos = [
  blinkit, birla, cghs, GWB, ESIC, IAF, IAI,
  bureau, logoAN, IAN, nestle, prosure,
];

export default function Workflow() {
  return (
    <section className="Clients">

      {/* Infinite scrolling brand logos */}
      <div className="brand-slider">
        <div className="brand-track">
          {/* Duplicate for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="brand-item" key={index}>
              <img src={logo} alt="client logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip — consistent with rest of site */}
      <div className="details">
        <div className="details-col">
          <GiStairsGoal className="s-icon" />
          <div className="details-content">
            <h2>500+</h2>
            <p>Projects Installed</p>
          </div>
        </div>

        <div className="details-col">
          <GoSmiley className="s-icon" />
          <div className="details-content">
            {/* Fix: was "20+" which conflicted with every other page */}
            <h2>50+</h2>
            <p>Happy Clients</p>
          </div>
        </div>

        <div className="details-col">
          <LiaBusinessTimeSolid className="s-icon" />
          <div className="details-content">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}