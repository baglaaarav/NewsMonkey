import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResult] = useState(0)


  const upadteNews  = async() =>{
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true);
    props.setProgress(50);
    let data = await fetch(url);
    let pa = await data.json();

    setArticles(pa.articles);
    setTotalResult(pa.totalResults)
    setLoading(false);

    props.setProgress(100);
  }
  useEffect(()=>{
    upadteNews();
  }, [])


  const handlePrev = async () => {
    setPage(page-1)
    upadteNews();
  }

  const handleNext = async () => {
    if (Math.ceil(totalResults / props.pageSize) >= page + 1) {
      setPage(page+1)
      
      upadteNews();
    }
  }


  
    return (


      <div className='container my-3'>
        <h1 className={`text-center my-5 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>NewsMonkey-Top headline</h1>
        {loading && <Spinner />}
        <div className="row container">
          {!loading && articles.map((element) => {
            return <div className="col-md-4 my-2" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : " "} url={element.urlToImage} newsurl={element.url} mode={props.mode} author={element.author} date={element.publishedAt} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={page <= 1} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-4 my-4`} onClick={handlePrev} >&#8592; Previous</button>
          <button type="button" disabled={Math.ceil(totalResults / props.pageSize) < page + 1} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-4 my-4`} onClick={handleNext} >Next	&rarr; </button>
        </div>




      </div>
    )
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'science'
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News