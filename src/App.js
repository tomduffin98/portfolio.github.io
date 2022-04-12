import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    //get strings
    const imgs = [
      "build/static/media/kinone.5dd62725a7bbbe21b42b.png",
      "build/static/media/kinthree.5eba55fc04ba204c62e2.png",
      "build/static/media/kinnine.8b143762e1771420db47.png",
      "build/static/media/kinten.adb9c59295f96b7a0ee9.png",
      "build/static/media/payone.134f4bd7638b0e745a5b.png",
      "build/static/media/portone.8402b7630e74f0f97be9.png",
      "build/static/media/porttwo.f43bbcdb9c7b6799712d.png",
      "build/static/media/prof_img.6bc080452c2ac5d2c563.png",
      "build/static/media/arch.095c42a13e13e84b3a03.jpg",
      "build/static/media/code.cd014c5b17e5c1369f11.png",
      "build/static/media/data.9189c03f8bf20eb15191.jpg",
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
