import blinkit from './../assets/blinkit.png'
import birla from './../assets/birla-logo.png';
import cghs from './../assets/cghs.png';
import GWB from './../assets/gwb.png';
import ESIC from './../assets/esic.png';
import IAF from './../assets/IAF.png';
import IAI from './../assets/Indian_Army_insignia.svg.png';
import IBM from './../assets/images.png';
import logoAN from './../assets/logoAn.png';
import IAN from './../assets/IAN.png';
import nestle from './../assets/nestle.png';
import prosure from './../assets/prosure.jfif';
import { GiStairsGoal } from "react-icons/gi";
import { GoSmiley } from "react-icons/go";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import "./../styles/workflow.css";

export default function Workflow() {
  return (
    <section className="Clients">

      {/* Infinite scrolling brands */}
      <div className="brand-slider">
        <div className="brand-track">
          {[blinkit, birla, cghs, GWB, ESIC, IAF, IAI, IBM, logoAN, IAN, nestle, prosure,
            blinkit, birla, cghs, GWB, ESIC, IAF, IAI, IBM, logoAN, IAN, nestle, prosure
          ].map((logo, index) => (
            <div className="brand-item" key={index}>
              <img src={logo} alt="brand" />
            </div>
          ))}
        </div>
      </div>

      <div className="details">
        <div className="details-col">
          <GiStairsGoal className="s-icon" />
          <div className="details-content">
            <h2>500+</h2>
            <p>Projects Installation</p>
          </div>
        </div>

        <div className="details-col">
          <GoSmiley className="s-icon" />
          <div className="details-content">
            <h2>20+</h2>
            <p>Happy Customers</p>
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
