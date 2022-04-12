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
      "src/components/kinectCopy/one.png",
      "src/components/kinectCopy/ten.png",
      "src/components/kinectCopy/three.png",
      "src/components/kinectCopy/nine.png",
      "src/components/paylist/one.png",
      "src/components/portfolio/one.png",
      "src/components/portfolio/two.png",
      "src/components/education/arch.jpg",
      "src/components/education/code.png",
      "src/components/education/data.jpg",
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
