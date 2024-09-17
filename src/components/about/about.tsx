import "./about.css";
import MemberCard from "./memberCard";

export default function About() {
  return (
    <div id="about">
      <h2>Integrantes</h2>
      <div id="aboutContent">
        <MemberCard nome="Gustavo Araujo" rm={555277} />
        <MemberCard nome="Lucas Nicolini" rm={557613} />
        <MemberCard nome="Samuel Maragato" rm={556731} />
      </div>
    </div>
  );
}
