import React from 'react';

const GoogleSearchHomePage = () => (



  <div className="container">
    <img className="logo" src="/google_logo.png" alt="Google" />
    <form className="search-form" action="https://www.google.com/search" method="GET">
      <input className="search-input" type="text" name="q" />
      <button className="search-button" type="submit">Google Search</button>
    </form>
  </div>
);

export default GoogleSearchHomePage;
