import React from 'react';
import Header from './Header';
import Footer from './Footer';

class GamesPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h2>Games</h2>
          <p>Here are some of the latest games:</p>
          <ul>
            <li>Game 1</li>
            <li>Game 2</li>
            <li>Game 3</li>
          </ul>
        </main>
        <Footer />
      </div>
    );
  }
}

export default GamesPage;
