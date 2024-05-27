import "../styles/profile.css";

function Profile() {
  const handleCVDownload = () => {
    window.open("/kennythai_resume.pdf", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/thaikenny/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/kennythai2003", "_blank");
  };

  return (
    <section id="profile" className="hidden">
      <div className="picture_container">
        <img
          src="/professionalwebsite/profilepic.png"
          alt="kenny thai profile picture"
          className="profilepic"
        />
      </div>
      <div className="section_container">
        <p className="small_text">Hello, I'm</p>
        <h1 className="title">Kenny Thai</h1>
        <p className="title_text">An Aspiring Software Engineer!</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleCVDownload}>
            Download CV
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/professionalwebsite/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={handleLinkedInClick}
          />
          <img
            src="/professionalwebsite/github.png"
            alt="My Github profile"
            className="icon"
            onClick={handleGitHubClick}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
