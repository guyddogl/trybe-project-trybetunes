import React from 'react';
import './backtotop.css';

// Back to top
const scrollFunction = () => {
  const backToTop = document.getElementById('backToTop'); // Get the button
  const scroll = 20;
  if (document.body.scrollTop > scroll || document.documentElement.scrollTop > scroll) {
    backToTop.style.opacity = 1;
  } else {
    backToTop.style.opacity = 0;
  }
};

window.onscroll = () => { scrollFunction(); }; // When the user scrolls down 20px from the top of the document, show the button

const topFunction = () => { // When the user clicks on the button, scroll to the top of the document
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

class BackToTop extends React.Component {
  render() {
    return (
      <span onClick={ topFunction } id="backToTop">
        <i className="fa-solid fa-arrow-up fa-lg mx-1" />
      </span>
    );
  }
}

export default BackToTop;
