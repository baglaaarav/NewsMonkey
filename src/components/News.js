import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    console.log("hello! this is a constructor from News components");
    this.state = {
      articles: [],
      loading: false
    }
  }

async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=91555a57e11440e9ad7e03a4d7faff5d"
  let data =  await fetch(url);

  let pa = await data.json();
  this.setState({articles:pa.articles})
}

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey-Top headline</h2>
        {/* {console.log(this.state.articles.articles[0].author)} */}
        <div className="row container">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-2"key={element.url}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description:" "} url={element.urlToImage} newsurl={element.url} />
            </div>

          })}


        </div>
      </div>
    )
  }
}
export default News