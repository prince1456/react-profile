import React, {Component} from 'react'
import './styles.css'
import SmartGallery from 'react-smart-gallery'
import {Modal, Button, Image } from "react-bootstrap"
// import  {PopupboxContainer, PopupboxManager} from 'react-popupbox'

const MySmallModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        {console.log(this.props)}

        <Modal.Body>
            <Image src="/assets/thumbnail.png" responsive />
        </Modal.Body>
        <Modal.Footer closeButton>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer >
      </Modal>
    );
  }
});


class Body extends Component {
  constructor(){
    super()
    this.state ={
      img: '',
      smShow: false,

    }
  }

  render() {
     let smClose = () => this.setState({ smShow: false });
    return (
      <div className="body-container">
        <div className="imagecontainer">
        <img className="awatar" src={require('./image/dd.png')}  alt="hahah"/>
        </div>
        <h1> Portfolio</h1>
        <div className="portfolio">
            <div className="portfolio-column">
                <div><img className="portfolio-image" onClick={()=> this.setState({smShow: true})} src={require('./image/persiangulf.png')} alt="hahah"/></div>
                <div><h4>Logo</h4></div>
             </div>
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} alt="hahah"/></div>
                <div><h4>Logo</h4></div>
             </div>
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} alt="hahah"/></div>
                <div><h4>Logo</h4></div>
             </div>

        </div>
        <div className="portfolio">
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} alt="hahah"/></div>
                <div><h4>Logo</h4></div>
             </div>
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} alt="hahah" /></div>
                <div><h4>Logo</h4></div>
             </div>
            <div className="portfolio-column">
                <div><img className="portfolio-image" src={require('./image/persiangulf.png')} alt="hahah" /></div>
                <div><h4>Logo</h4></div>
             </div>

        </div>
         <MySmallModal show={this.state.smShow} onHide={smClose} />

      </div>
    )
  }
}
export default Body;
