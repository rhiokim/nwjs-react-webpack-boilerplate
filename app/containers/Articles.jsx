import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';

import * as ArticleActions from 'actions/article';
import ArticleList from 'components/articles/ArticleList';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  handleChange() {
  }

  render() {
    const {articles} = this.props;
    return (
      <div>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}} // amp takes no value
          title="React Babel Webpack Boilerplate"
          titleTemplate="Articles - %s"
          defaultTitle="My Default Title"
          base={{target: '_blank', href: 'http://mysite.com/'}}
          meta={[
              {name: 'description', content: 'Helmet application'},
              {property: 'og:type', content: 'article'}
          ]}
          link={[
              {rel: 'canonical', href: 'http://mysite.com/example'},
              {rel: 'apple-touch-icon', href: 'http://mysite.com/img/apple-touch-icon-57x57.png'},
              {rel: 'apple-touch-icon', sizes: '72x72', href: 'http://mysite.com/img/apple-touch-icon-72x72.png'}
          ]}
          script={[
            // {src: 'http://include.com/pathtojs.js', type: 'text/javascript'},
            {type: 'application/ld+json', innerHTML: `{ "@context": "http://schema.org" }`}
          ]}
          onChangeClientState={this.handleChangeClientState} />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

const mapDispatchToProps = dispatch => bindActionCreators(ArticleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
