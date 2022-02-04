import React, { Component } from "react";
import dummyData from "./poolsData";
import { Link } from '@reach/router';


const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);
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

        <div class="card text-center" style={{width: `18rem`}}>
            <div class="card-body" style={{display: "flex", flexDirection : "column", alignItems : "center"}}>
                <h5 class="card-title" id="card-title">Your tokens cart</h5>
                <p class="card-text" id="tokensQuantity">Tokens quantity : </p>
                <p class="card-text" id="totalValue">Total Value : </p>
                <NavLink to="/colection" style={{width : `80%`, height : `15%`, backgroundColor : `#114DC5`, color : `white`, borderRadius : `5px`}} onClick={tokens()} id="buy">Buy</NavLink>
            </div>
        </div>
    
    );
}
}