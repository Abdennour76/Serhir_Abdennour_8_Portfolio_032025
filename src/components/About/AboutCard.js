import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Abdennour Serhir </span>
            de <span className="purple"> Rouen, France.</span>
            <br />
            Je suis actuellement à la recherche d'une alternance pour mon Bachelor 3 chez Ynov.
            <br />
            J'ai obtenue un Bac +2 en développement web chez OpenClassrooms.
            <br />
            <br />
            En dehors de la programmation, quelques autres passe-temps que j'aime :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Les jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Le cinéma
            </li>
            <li className="about-activity">
              <ImPointRight /> La musique
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
