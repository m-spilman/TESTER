import React, { Component } from "react";
import Buying_Selling from "./Buying_Selling";
import MainSelling from "./Selling/MainSelling";
import MainBuying from './Buying/MainBuying'

class Master extends Component {
  state = {
    buying: false,
    selling: false,
  };
  handleChangeBuying = () => {
    this.setState({ buying: true });
  };
  handleChangeSelling = () => {
    this.setState({ selling: true });
  };
  backBuying = () => {
    this.setState({buying:false})
  }
   backSelling = () => {
    this.setState({selling:false})
  }

  showState = () => {
    const { buying, selling} = this.state;

    if ((buying === false) & (selling === false)) {
      return <Buying_Selling
      handleChangeBuying={this.handleChangeBuying}
      handleChangeSelling={this.handleChangeSelling}
      
      ></Buying_Selling>;
    }
    if (selling === true) {
      return <MainSelling
      backSelling = {this.backSelling}
      ></MainSelling>;
    }
    if (buying === true) {
      return <MainBuying
      backBuying = {this.backBuying}
      ></MainBuying>;
    }
  };
  render() {
    return <>{this.showState()}</>;
  }
}
export default Master;
