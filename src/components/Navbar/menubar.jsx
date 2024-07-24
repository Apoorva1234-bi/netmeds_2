import medicine_icon from "../../assets/icons/navbar_icons/medicine.svg";
import diagnostics_icon from "../../assets/icons/navbar_icons/diagnostics.svg";
import wellness_icon from "../../assets/icons/navbar_icons/wellness.svg";
import healthlibrary_icon from "../../assets/icons/navbar_icons/health-library.svg";
import { useState } from "react";

function MenuBar() {
  const [Diagnostics, setDiagnostics] = useState(false);
  const [Diagnosticslist, setDiagnosticslist] = useState(false);
  const handleDiagnosticsmouseEnter = () => {
    setDiagnostics(true);
  };
  const handleDiagnosticsmouseLeaves = () => {
    setTimeout(() => {
      if (!Diagnostics) {
        setDiagnostics(false);
      }
    }, 200);
  };
  const handleDiagnosticslisthover = () => {
    setDiagnosticslist(true);
  };
  const handleDiagnosticslisthoverleave = () => {
    setDiagnostics(false);
    setDiagnosticslist(false);
  };
  const [wellness, setwellness] = useState(false);
  const [wellnesslist, setwellnesslist] = useState(false);
  const handlewellnessmouseEnter = () => {
    setwellness(true);
  };
  const handlewellnessmouseLeaves = () => {
    setTimeout(() => {
      if (!wellness) {
        setwellness(false);
      }
    }, 200);
  };
  const handlewellnesslisthover = () => {
    setwellnesslist(true);
  };
  const handlewellnesslisthoverleave = () => {
    setwellness(false);
    setwellnesslist(false);
  };
  const [medicine, setmedicine] = useState(false);
  const [medicinelist, setmedicinelist] = useState(false);
  const handlemedicinemouseEnter = () => {
    setmedicine(true);
  };
  const handlemedicinemouseLeaves = () => {
    setTimeout(() => {
      if (!medicine) {
        setmedicine(false);
      }
    }, 200);
  };
  const handlemedicinelisthover = () => {
    setmedicinelist(true);
  };
  const handlemedicinelisthoverleave = () => {
    setmedicine(false);
    setmedicinelist(false);
  };
  return (
    <>
      <div className="menubar">
        <div
          className="menu"
          onMouseEnter={handlemedicinemouseEnter}
          onMouseLeave={handlemedicinemouseLeaves}
        >
          <img src={medicine_icon} alt="menu1" />
          <span className="menu-name">Medicines</span>
          {medicine === true && (
            <div
              className="medicinelist"
              onMouseEnter={handlemedicinelisthover}
              onMouseLeave={handlemedicinelisthoverleave}
            >
              <ul className="menubar-list">
                <li className="menubar-item">All Medicine</li>
                <li className="menubar-item">Buy Again</li>
                <li className="menubar-item">Order Online</li>
              </ul>
            </div>
          )}
        </div>
        <div className="menu">
          <img src={diagnostics_icon} alt="menu1" />
          <span className="menu-name">Heath-Corner</span>
        </div>
        <div
          className="menu"
          onMouseEnter={handlewellnessmouseEnter}
          onMouseLeave={handlewellnessmouseLeaves}
        >
          <img src={wellness_icon} alt="menu1" />
          <span className="menu-name">Wellness</span>
          {wellness === true && (
            <div
              className="wellnesslist"
              onMouseEnter={handlewellnesslisthover}
              onMouseLeave={handlewellnesslisthoverleave}
            >
              <div className="part">
                <ul className="menubar-list">
                  <li className="menubar-item head">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item head">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">All Medicine</li>
                
                </ul>
              </div>
              <div className="part">
                <ul className="menubar-list">
                  <li className="menubar-item head">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item head">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">Order Online</li>
                </ul>
              </div>
              <div className="part">
                <ul className="menubar-list">
                  <li className="menubar-item head">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item head">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                </ul>
              </div>
              <div className="part">
                <ul className="menubar-list">
                  <li className="menubar-item head">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">All Medicine</li>
                  <li className="menubar-item head">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">All Medicine</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                  <li className="menubar-item">Buy Again</li>
                  <li className="menubar-item">Order Online</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="menu">
          <img src={diagnostics_icon} alt="menu1" />
          <span className="menu-name">Beauty</span>
        </div>
        <div
          className="menu"
          onMouseEnter={handleDiagnosticsmouseEnter}
          onMouseLeave={handleDiagnosticsmouseLeaves}
        >
          <img src={healthlibrary_icon} alt="menu1" />
          <span className="menu-name">Diagnostics</span>
          {Diagnostics === true && (
            <div
              className="Diagnosticslist"
              onMouseEnter={handleDiagnosticslisthover}
              onMouseLeave={handleDiagnosticslisthoverleave}
            >
              <ul className="menubar-list">
                <li className="menubar-item">All Medicine</li>
                <li className="menubar-item">Buy Again</li>
                <li className="menubar-item">Order Online</li>
                <li className="menubar-item">All Medicine</li>
                <li className="menubar-item">Buy Again</li>
                <li className="menubar-item">Order Online</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default MenuBar;
