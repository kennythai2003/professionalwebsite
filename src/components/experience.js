import "../styles/experience.css";
import Language from "./Language";

function Experience() {
  const data = [
    {
      image: "professionalwebsite/python.png",
      alttag: "python icon",
      language: "Python",
      category: "Programming",
    },
    {
      image: "professionalwebsite/cpp.png",
      alttag: "cpp icon",
      language: "C++",
      category: "Programming",
    },
    {
      image: "professionalwebsite/git.png",
      alttag: "git icon",
      language: "Git",
      category: "Version Control",
    },
    {
      image: "professionalwebsite/html.png",
      alttag: "html icon",
      language: "HTML",
      category: "Frontend",
    },
    {
      image: "professionalwebsite/css.png",
      alttag: "css icon",
      language: "CSS",
      category: "Frontend",
    },
    {
      image: "professionalwebsite/javascript.png",
      alttag: "javascript icon",
      language: "JavaScript",
      category: "Frontend",
    },
    {
      image: "professionalwebsite/react.png",
      alttag: "react icon",
      language: "React",
      category: "Framework",
    },
    {
      image: "professionalwebsite/bootstrap.png",
      alttag: "bootstrap icon",
      language: "Bootstrap",
      category: "Framework",
    },
    {
      image: "professionalwebsite/nodejs.png",
      alttag: "nodejs icon",
      language: "Node.js",
      category: "Backend",
    },
    {
      image: "professionalwebsite/Express.png",
      alttag: "express icon",
      language: "Express",
      category: "Framework",
    },
    {
      image: "professionalwebsite/mongodb.png",
      alttag: "mongodb icon",
      language: "mongoDB",
      category: "Databases",
    },
    {
      image: "professionalwebsite/postgresql.png",
      alttag: "postgresql icon",
      language: "PostgreSQL",
      category: "Databases",
    },
    {
      image: "professionalwebsite/docker.png",
      alttag: "docker icon",
      language: "Docker",
      category: "Virtualization",
    },
  ];

  const coursework = [
    {
      image: "professionalwebsite/dsa.png",
      language: "Data Structures and Algorithms",
    },
    { image: "professionalwebsite/webdev.png", language: "Web Development" },
    {
      image: "professionalwebsite/ai.png",
      language: "Artificial Intelligence",
    },
    { image: "professionalwebsite/ml.png", language: "Machine Learning" },
    { image: "professionalwebsite/embedded.png", language: "Embedded Systems" },
    { image: "professionalwebsite/compiler.png", language: "Compiler Design" },
    {
      image: "professionalwebsite/comparch.png",
      language: "Computer Architecture",
    },
    { image: "professionalwebsite/os.png", language: "Operating Systems" },
    { image: "professionalwebsite/logic.png", language: "Logic Design" },
    { image: "professionalwebsite/sc.png", language: "Software Construction" },
    { image: "professionalwebsite/discrete.png", language: "Discrete Math" },
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
