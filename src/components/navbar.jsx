import React from "react";
// Import the CSS file

const NavBar = () => {
  return (
    <div className="nav-sections">
      <nav className="navigation" >
        <ul className="ui-menu">
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-diabetes"
              href="/non-prescriptions/covid-essentials"
            >
              Covid Essentials
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-diabetes"
              href="/non-prescriptions/diabetes-support"
            >
              Diabetes
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-diabetes"
              href="/non-prescriptions/health-conditions/cardiac-care"
            >
              Cardiac Care
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-diabetes"
              href="/non-prescriptions/health-conditions/stomach-care"
            >
              Stomach Care
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-ayush-ayurvedic"
              href="/non-prescriptions/ayush/ayurvedic"
            >
              Ayurvedic
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-ayush-homeopathy"
              href="/non-prescriptions/ayush/homeopathy"
            >
              Homeopathy
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-fitness"
              href="/explore-fitness"
            >
              Fitness
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-mom-baby"
              href="/explore-mom-baby"
            >
              Mom &amp; Baby
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-device"
              href="/explore-devices"
            >
              Devices
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-surgicals"
              href="/non-prescriptions/surgical"
            >
              Surgicals
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-sexual-wellness"
              href="/explore-sexual-wellness"
            >
              Sexual Wellness
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-treatments"
              href="/explore-treatments"
            >
              Treatments
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-skin-care"
              href="/non-prescriptions/skin-care"
            >
              Skin Care
            </a>
          </li>
          <li>
            <a
              className="level-top"
              data-eventkey="non-prescriptions-personal-care"
              href="/explore-personal-care"
            >
              Personal Care
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
