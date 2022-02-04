import React, { Component } from "react";
import styled from "styled-components";
import Clock from "./Clock";
import dummyData from "./poolsData";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

let tokensQuantity= 0
let tokensPrice = 0
let nftQuantity = 100
const allTokensAdded = []
const addToken = function(index, deadline, authorLink, previewLink, authorImg, title,price, likes){
    const tokenAdded = {
        index : index,
        deadline : deadline,
        authorLink : authorLink,
        previewLink : previewLink,
        authorImg : authorImg,
        title : title,
        price : price,
        quantity : tokensQuantity,
        likes : likes
    }
    tokensQuantity += 1
    tokensPrice += tokenAdded.price
    allTokensAdded.push(tokenAdded)
    nftQuantity -= 1
  
}
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
            {this.state.nfts.map( (nft, index) => (
                <div key={index} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="nft__item">
                        
                        <div className="author_list_pp">
                            
                        </div>
                        <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
                        <Outer>
                            <span onClick={()=> window.open(nft.previewLink, "_self")}>
                                <img onLoad={this.onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt=""/>
                            </span>
                        </Outer>
                        </div>
                        <div className="nft__item_info">
                            <span onClick={()=> window.open(nft.nftLink, "_self")}>
                                <h4>{nft.title}</h4>
                            </span>
                            <div className="nft__item_price">
                                {nft.price} Matic<span></span>
                            </div>
                            <div className="nft__item_price">
                                On sale: <span id="onsale">{nft.quantity}</span>
                            </div>
                            <div className="nft__item_action">
                                <span onClick={()=>addToken(nft.index, nft.deadline, nft.authorLink, nft.previewLink, nft.authorImg, nft.title, nft.price, nft.quantity, nft.likes)}>Buy more</span>
                            </div>
                            <div className="nft__item_like">
                                <i className="fa fa-heart"></i><span>{nft.likes}</span>
                            </div>                            
                        </div> 
                    </div>
                </div>  
            ))}
            
        </div>       
    );
}
}