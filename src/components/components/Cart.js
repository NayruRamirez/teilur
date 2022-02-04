import React, { Component } from "react";
import dummyData from "./poolsData";

export default class Responsive extends Component {
    

  constructor(props) {
    super(props);
    this.state = {
        nfts: dummyData,
        height: 0
    };
    this.onImgLoad = this.onImgLoad.bind(this);
    }

     onImgLoad({target:img}) {
        let currentHeight = this.state.height;
        if(currentHeight < img.offsetHeight) {
            this.setState({
                height: img.offsetHeight
            })
        }
    }

 render() {
  return (
      <div>
        <div class="card text-center" style={{width: `18rem`}}>
            <div class="card-body">
                <h5 class="card-title" id="card-title">Your tokens cart</h5>
                <p class="card-text" id="tokensQuantity">Tokens quantity : </p>
                <p class="card-text" id="totalValue">Total Value : </p>
                <button class="" style={{width:`80%`, backgroundColor:  `#114DC5`, color: `white`, border:`transparent`, borderRadius: `5px`}}>Buy</button>
            </div>
        </div>
      </div>      
    );
}
}