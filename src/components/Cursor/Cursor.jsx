import React, { useState, useEffect } from "react";
import "./Cursor.css";
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const updateMousePos = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePos);
    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  useEffect(() => {
    const handleMouseDown = () => {
      setClick(true);
    };
    const handleMouseUp = () => {
      setClick(false);
    };
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`cursor ${click ? "click" : ""} ${hover ? "hover" : ""}`}
      style={{
        transform: `translate3d(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%), 0)`,
      }}
    >
      <div className={`cursorinner ${click ? "cursorinnerhover" : ""}`}></div>
    </div>
  );
};

export default CustomCursor;
