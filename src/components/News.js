import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'science'
  }
  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
  }
  async upadteNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let pa = await data.json();
    this.setState({ articles: pa.articles, totalResults: pa.totalResults, loading: false })
  }

  async componentDidMount() {
    this.upadteNews();
  }

  fetchMoreData = async() => {
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let pa = await data.json();
    this.setState({ 
      articles: this.state.articles.concat(pa.articles), 
      totalResults: pa.totalResults, loading: false })

  };



  render() {
    return (
      <React.StrictMode>

      <>
        <h1 className={`text-center my-5 text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>NewsMonkey-Top headline</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">


            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4 my-2" key={element.url +element.author+ element.urlToImage}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : " "} url={element.urlToImage} newsurl={element.url} mode={this.props.mode} author={element.author} date={element.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
      </React.StrictMode>
    )
  }
}
export default News