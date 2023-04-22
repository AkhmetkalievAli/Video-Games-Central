import React from 'react';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?sources=ign&apiKey=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles }));
  }

  render() {
    const { news } = this.state;

    return (
      <div>
        <h2>Latest News</h2>
        <ul>
          {news.map(article => (
            <li key={article.url}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default News;
