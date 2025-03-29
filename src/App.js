/**
 * cd D:\Desktop\Main\Projects\JavaScript\3-1\test
 * npm start
 */

import React from "react";
import "./App.css";

let lastQuoteIndex = -1;

const newQuote = () => {
  const quoteBank = [
    {
      name: "Eleanor Roosevelt",
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
      name: "Steve Jobs",
      quote: "The only way to do great work is to love what you do.",
    },
    {
      name: "Theodore Roosevelt",
      quote: "Believe you can and you're halfway there.",
    },
    {
      name: "Ralph Waldo Emerson",
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    },
    {
      name: "Helen Keller",
      quote:
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    },
    {
      name: "Robert Greene",
      quote:
        "The future belongs to those who learn more skills and combine them in creative ways.",
    },
    {
      name: "Brené Brown",
      quote:
        "Daring to set boundaries is about having the courage to love ourselves, even when we risk disappointing others.",
    },
    {
      name: "Jim Rohn",
      quote:
        "If you're not willing to risk the unusual, you'll have to settle for the ordinary.",
    },
    {
      name: "Alice Walker",
      quote:
        "The most common way people give up their power is by thinking they don't have any.",
    },
  ];

  //get element id
  const text = document.getElementById("text");
  const author = document.getElementById("author");
  //get object id of nw

  var rngnew = Math.floor(Math.random() * quoteBank.length);
  while (rngnew === lastQuoteIndex) {
    rngnew = Math.floor(Math.random() * quoteBank.length);
  }
  lastQuoteIndex = rngnew;
  const quotePull = quoteBank[rngnew];

  const root = document.documentElement;
  root.style.setProperty("--color1h", Math.floor(Math.random() * 255));

  if (!text.innerHTML) {
    text.innerHTML = `"${quotePull.quote}"`;
    author.innerHTML = `- ${quotePull.name}`;
  } else {
    //beforechange.
    text.classList.toggle("fade");
    author.classList.toggle("fade");

    //change
    setTimeout(() => {
      text.innerHTML = `"${quotePull.quote}"`;
      author.innerHTML = `- ${quotePull.name}`;
      text.classList.toggle("fade");
      author.classList.toggle("fade");
    }, 1000);

    //afterchange
  }
};

const ButtonArray = () => {
  return (
    <div id="button-array">
      <a class="buttonSet1" id="tweet-quote" href="twitter.com/intent/tweet">
        <i class="fa-brands fa-x-twitter" style={{ fontSize: "20px" }}></i>
      </a>
      <a
        class="buttonSet1"
        id="youtube-link-quote"
        href="https://www.youtube.com/"
      >
        <i class="fa-brands fa-youtube" style={{ fontSize: "20px" }}></i>
      </a>
      <a class="buttonSet1" id="new-quote" onClick={newQuote}>
        <i class="fa-brands" style={{ fontSize: "20px" }}>
          New Quote
        </i>
      </a>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const isFirst = true;
    newQuote({ isFirst });
  }
  render() {
    return (
      <div id="document-bg">
        <div id="quote-box">
          <div id="text"></div>
          <div id="author"></div>
          <ButtonArray />
        </div>
      </div>
    );
  }
}

export default App;
