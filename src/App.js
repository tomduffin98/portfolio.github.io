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
      "./components/kinect/one.png",
      "./components/prof_img.png",
      "./components/kinect/ten.png",
      "./components/kinect/three.png",
      "./components/kinect/nine.png",
      "./components/paylist/one.png",
      "./components/portfolio/one.png",
      "./components/portfolio/two.png",
      "./components/education/arch.jpg",
      "./components/education/code.png",
      "./components/education/data.jpg",
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
