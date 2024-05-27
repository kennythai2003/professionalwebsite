import "../styles/clubs.css";
import Club from "./club";

function Clubs() {
  const data = [
    {
      image: "acm.png",
      alttag: "ACM Icon",
      clubName: "Association of Computing Machinery",
      date: "Sept. 2021 - Present",
    },
    {
      image: "leetcode.png",
      alttag: "LeetCode Icon",
      clubName: "Competitive Coding Club",
      date: "Sept. 2022 - Present",
    },
    {
      image: "redcross.png",
      alttag: "Red Cross Icon",
      clubName: "Red Cross",
      date: "Aug. 2017 - Present",
    },
    {
      image: "thetatau.png",
      alttag: "Theta Tau Icon",
      clubName: "Theta Tau",
      date: "May 2023 - Present",
    },
    {
      image: "mentorcollective.png",
      alttag: "Mentor Collective Icon",
      clubName: "Mentor Collective",
      date: "Sept. 2022 - Present",
    },
  ];

  return (
    <section id="clubs">
      <p className="small_text">Here are my</p>
      <h1 className="title">Club and Organizations</h1>

      <div className="flexboxes_containers">
        <div className="flexbox_containers">
          {data.map((value) => (
            <Club
              image={value.image}
              alttag={value.alttag}
              clubName={value.clubName}
              date={value.date}
            />
          ))}
        </div>
      </div>
      <img
        src="/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
  );
}

export default Clubs;
