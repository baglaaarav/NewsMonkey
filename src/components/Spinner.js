import React, { Component } from 'react'
import lodding from "./lodding.gif"


export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={lodding} alt="loading" />
      </div>
    )
  }
}
