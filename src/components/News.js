import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey-Top headline</h2>

        <div className="row">
          <div className="col-md-4">
            <NewsItem title={"mytitle"} description={"this is a description"} />
          </div>
          <div className="col-md-4">
            <NewsItem title={"mytitle"} description={"this is a description"} />
          </div><div className="col-md-4">
            <NewsItem title={"mytitle"} description={"this is a description"} />
          </div>
        </div>
      </div>
    )
  }
}
