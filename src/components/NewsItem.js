import React, { Component } from 'react'

export  class NewsItem extends Component {
    


    render() {
        let {title, description, url, newsurl} = this.props;


        return (


            <div>
                <div className={`text-bg-${this.props.mode==='dark'? 'secondary':'light'} p-3 card text-${this.props.mode === 'light' ? 'dark':'light'}`} style={{width:'18rem'}}>
                    <img src={!url?"https://c.ndtvimg.com/2024-02/k037pbec_paytm-upi-generic_625x300_01_February_24.jpg":url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        {/* eslint-disable-next-line */}
                        <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;