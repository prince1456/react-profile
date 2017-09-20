import React, {Component} from 'react'
import './styles.css'

class Body extends Component {
  render() {
    return (
      <div className="body-container">
        <div className="imagecontainer">
        <img className="awatar" src={require('./image/dd.png')}  alt="hahah"/>
        </div>
        <h1> Portfolio</h1>
        <div className="portfolio">
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} /></div>
                <div><h4>Logo</h4></div>
             </div>
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} /></div>
                <div><h4>Logo</h4></div>
             </div>
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} /></div>
                <div><h4>Logo</h4></div>
             </div>

        </div>
        <div className="portfolio">
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} /></div>
                <div><h4>Logo</h4></div>
             </div>
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} /></div>
                <div><h4>Logo</h4></div>
             </div>
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} /></div>
                <div><h4>Logo</h4></div>
             </div>

        </div>
      </div>
    )
  }
}
export default Body;
