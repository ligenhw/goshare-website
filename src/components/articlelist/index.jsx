import ArticleCardList from '../ArticleCardList'
import { connect } from 'react-redux';

export default connect(state => ({
    articles: state.articles,
}))(ArticleCardList)
