import "../styles/experience.css";
import Language from "./Language";

function Experience() {
  const data = [
    {
      image: "python.png",
      alttag: "python icon",
      language: "Python",
      category: "Programming",
    },
    {
      image: "cpp.png",
      alttag: "cpp icon",
      language: "C++",
      category: "Programming",
    },
    {
      image: "git.png",
      alttag: "git icon",
      language: "Git",
      category: "Version Control",
    },
    {
      image: "html.png",
      alttag: "html icon",
      language: "HTML",
      category: "Frontend",
    },
    {
      image: "css.png",
      alttag: "css icon",
      language: "CSS",
      category: "Frontend",
    },
    {
      image: "javascript.png",
      alttag: "javascript icon",
      language: "JavaScript",
      category: "Frontend",
    },
    {
      image: "react.png",
      alttag: "react icon",
      language: "React",
      category: "Framework",
    },
    {
      image: "bootstrap.png",
      alttag: "bootstrap icon",
      language: "Bootstrap",
      category: "Framework",
    },
    {
      image: "nodejs.png",
      alttag: "nodejs icon",
      language: "Node.js",
      category: "Backend",
    },
    {
      image: "Express.png",
      alttag: "express icon",
      language: "Express",
      category: "Framework",
    },
    {
      image: "mongodb.png",
      alttag: "mongodb icon",
      language: "mongoDB",
      category: "Databases",
    },
    {
      image: "postgresql.png",
      alttag: "postgresql icon",
      language: "PostgreSQL",
      category: "Databases",
    },
    {
      image: "docker.png",
      alttag: "docker icon",
      language: "Docker",
      category: "Virtualization",
    },
  ];

  const coursework = [
    { image: "dsa.png", language: "Data Structures and Algorithms" },
    { image: "webdev.png", language: "Web Development" },
    { image: "ai.png", language: "Artificial Intelligence" },
    { image: "ml.png", language: "Machine Learning" },
    { image: "embedded.png", language: "Embedded Systems" },
    { image: "compiler.png", language: "Compiler Design" },
    { image: "comparch.png", language: "Computer Architecture" },
    { image: "os.png", language: "Operating Systems" },
    { image: "logic.png", language: "Logic Design" },
    { image: "sc.png", language: "Software Construction" },
    { image: "discrete.png", language: "Discrete Math" },
  ];

  return (
    <section id="experience" className="resume_sec">
      <p className="small_text">Explore My</p>
      <h1 className="title">Technical Skills</h1>
      <div className="experience-flexboxes_content">
        <div className="flexbox_containers">
          <div className="flexboxes_content hidden">
            <h2 className="experience-sub-title">Languages and Tools</h2>
            <div className="article-container">
              {data.map((value) => (
                <Language
                  image={value.image}
                  alttag={value.alttag}
                  language={value.language}
                  category={value.category}
                />
              ))}
            </div>
          </div>
          <div className="flexboxes_content hidden">
            <h2 className="experience-sub-title">Relevant Coursework</h2>
            <div className="article-container">
              {coursework.map((value) => (
                <Language image={value.image} language={value.language} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
  );
}

export default Experience;
