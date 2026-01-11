import { useEffect, useState } from "react";
import "./../styles/loader.css";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 6) + 2;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setExit(true);
          setTimeout(onFinish, 700);
        }, 300);
      }
      setProgress(value);
    }, 90);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`app-loader ${exit ? "exit" : ""}`}>
      {/* CENTER LOGO */}
      <div className="loader-logo">
        Kevotalia
        <span>Technology</span>
      </div>

      {/* FULL-WIDTH PROGRESS */}
      <div
        className="loader-progress"
        style={{
          transform: `translateX(${progress}vw)`,
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
