import React from 'react'

const NewsItem = (props)=> {
    


    
        let {title, description, url, newsurl, author, date} = props;


        return (


            <div>
                <div className={`text-bg-${props.mode==='dark'? 'secondary':'light'} p-3 card text-${props.mode === 'light' ? 'dark':'light'}`} >
                    <img src={!url?"https://c.ndtvimg.com/2024-02/k037pbec_paytm-upi-generic_625x300_01_February_24.jpg":url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className={`text-body-secondary `}>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        {/* eslint-disable-next-line */}
                        <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem;