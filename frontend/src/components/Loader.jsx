import { useEffect, useState } from "react";
import "./../styles/loader.css";

export default function Loader({ onFinish }) {
  const [phase, setPhase] = useState("enter"); 
  // phases: "enter" → "hold" → "exit"

  useEffect(() => {
    // Phase 1: logo fades/scales in (CSS handles it)
    // Phase 2: hold briefly at full size
    const holdTimer = setTimeout(() => {
      setPhase("exit");
      // Phase 3: morph exit → then unmount
      setTimeout(() => {
        onFinish?.();
      }, 750);
    }, 1400);

    return () => clearTimeout(holdTimer);
  }, [onFinish]);

  return (
    <div className={`app-loader ${phase === "exit" ? "exit" : ""}`}>
      {/* Subtle dot grid background */}
      <div className="loader-bg" />

      {/* Green accent line — animates in */}
      <div className="loader-line" />

      {/* Logo block */}
      <div className={`loader-logo ${phase === "exit" ? "exit" : ""}`}>
        <span className="loader-logo-main">Kevotalia</span>
        <span className="loader-logo-sub">Technology</span>
        <div className="loader-underline" />
      </div>
    </div>
  );
}