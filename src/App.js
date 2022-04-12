import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    const imgs = [
      "src/components/prof_img.png",
      "src/components/kinect/one.png",
      "src/components/kinect/ten.png",
      "src/components/kinect/three.png",
      "src/components/kinect/nine.png",
      "src/components/paylist/one.png",
      "src/components/portfolio/one.png",
      "src/components/portfolio/one.png",
    ];
    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
