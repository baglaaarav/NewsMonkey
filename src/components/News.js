import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


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
      page: 1

    }
  }
  async upadteNews() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    this.props.setProgress(50);
    let data = await fetch(url);
    let pa = await data.json();
    this.setState({ articles: pa.articles, totalResults: pa.totalResults, loading: false })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.upadteNews();
  }

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 })
    this.upadteNews();
  }

  handleNext = async () => {
    if (Math.ceil(this.state.totalResults / this.props.pageSize) >= this.state.page + 1) {
      this.setState({ page: this.state.page + 1 })
      this.upadteNews();
    }
  }


  render() {
    return (


      <div className='container my-3'>
        <h1 className={`text-center my-5 text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>NewsMonkey-Top headline</h1>
        {this.state.loading && <Spinner />}
        <div className="row container">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 my-2" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : " "} url={element.urlToImage} newsurl={element.url} mode={this.props.mode} author={element.author} date={element.publishedAt} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className={`btn btn-${this.props.mode === 'dark' ? 'light' : 'dark'} mx-4 my-4`} onClick={this.handlePrev} >&#8592; Previous</button>
          <button type="button" disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1} className={`btn btn-${this.props.mode === 'dark' ? 'light' : 'dark'} mx-4 my-4`} onClick={this.handleNext} >Next	&rarr; </button>
        </div>




      </div>
    )
  }
}
export default News