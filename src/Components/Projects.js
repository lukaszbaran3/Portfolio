import React from "react";
import "../Styles/Projects.css";
function Projects() {
  return (
    <div className="projectsContainer">
      <div className="ReactCryptoCoin projectCard">
        <div className="ReactCryptoCoinImg"></div>
        <p>
          ReactCryptoCoin is a simple and intuitive application that allows you
          to track and monitor various cryptocurrencies in real time. Thanks to
          it, users can stay up to date with current prices, market changes and
          trends regarding various digital currencies. The application provides
          current rates for various cryptocurrencies. Users can view prices,
          percentage changes and trading volume for each currency. In addition,
          ReactCryptoCoin offers updated charts that show price history over
          time, allowing users to analyze trends and make informed investment
          decisions.
        </p>
        <buttom className="view">
          <a
            href="https://main--reactcryptocoin.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            View
          </a>
        </buttom>
      </div>
      <div className="APIPokemon projectCard">In progress...</div>
    </div>
  );
}

export default Projects;
