import React, { useEffect, useRef } from "react";
import "../styles/parallax.css";

function Parallax() {
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill2Ref = useRef(null);
  const hill3Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);
  const treeRef = useRef(null);
  const plantRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;

      if (textRef.current) textRef.current.style.marginTop = value * 2.5 + "px";
      if (leafRef.current) {
        leafRef.current.style.top = value * -1.5 + "px";
        leafRef.current.style.left = value * 1.5 + "px";
      }
      // if (hill1Ref.current) {
      //   hill1Ref.current.style.top = value * 0.5 + "px";
      //   console.log("hill1ref happenign");
      // }
      if (hill4Ref.current) hill4Ref.current.style.left = value * -1.5 + "px";
      if (hill5Ref.current) hill5Ref.current.style.left = value * 1.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="parallax">
      <img src="/hill1.png" id="hill1" ref={hill1Ref} alt="hill1" />
      <img src="/hill2.png" id="hill2" ref={hill2Ref} alt="hill2" />
      <img src="/hill3.png" id="hill3" ref={hill3Ref} alt="hill3" />
      <img src="/hill4.png" id="hill4" ref={hill4Ref} alt="hill4" />
      <img src="/hill5.png" id="hill5" ref={hill5Ref} alt="hill5" />
      <img src="/tree.png" id="tree" ref={treeRef} alt="tree1" />
      <h2 id="text" ref={textRef}>
        Hello World!
      </h2>
      <img src="/leaf.png" id="leaf" ref={leafRef} alt="leaf" />
      <img src="/plant.png" id="plant" ref={plantRef} alt="plant" />
    </section>
  );
}

export default Parallax;
