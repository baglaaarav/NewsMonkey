import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    console.log("hello! this is a constructor from News components");
    this.state = {
      articles: [],
      loading: false,
      page:1

    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3d733507306c4df1a4345ed4f3656249&page=1&pageSize=20"
    let data = await fetch(url);
    let pa = await data.json();
    this.setState({ articles: pa.articles , totalResults: pa.totalResults})
  }

  handlePrev = async ()=>{
    // console.log("prev");
    // console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3d733507306c4df1a4345ed4f3656249&page=${this.state.page-1}&pageSize=20`
    let data = await fetch(url);
    let pa = await data.json();
    // console.log(pa);
    this.setState({ 
      page:this.state.page-1,
      articles: pa.articles
     })


  }

  handleNext = async () =>{
    
    if(Math.ceil(this.state.totalResults/20) >= this.state.page+1){
      // console.log("next");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3d733507306c4df1a4345ed4f3656249&page=${this.state.page+1}&pageSize=20`
      let data = await fetch(url);
      let pa = await data.json();
      this.setState({ 
        page:this.state.page+1,
        articles: pa.articles
      })
    }
    
  }


  render() {
    return (


      <div className='container my-3'>
        <h1 className="text-center">NewsMonkey-Top headline</h1>
        
        <div className="row container">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-2" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : " "} url={element.urlToImage} newsurl={element.url} />
            </div>
          })}

          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark mx-4 " onClick={this.handlePrev} >&#8592; Previous</button>
            <button type="button" disabled={Math.ceil(this.state.totalResults/20) < this.state.page+1} className="btn btn-dark mx-4 " onClick={this.handleNext} >Next	&rarr; </button>
          </div>



        </div>
      </div>
    )
  }
}
export default News