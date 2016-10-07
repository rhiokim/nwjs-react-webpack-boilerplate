import React, {Component} from 'react';
import {whyDidYouUpdate} from 'why-did-you-update';

import Article from './Article';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

export default class ArticleList extends Component {
  render() {
    const {articles} = this.props;

    return (
      <div className="container">
        <h3>Articles</h3>
        <ul>
          {articles.map(article => {
            return (
              <Article key={article.id} {...article} />
            );
          })}
        </ul>
      </div>
    );
  }
}
