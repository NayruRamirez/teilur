import React, { Component } from "react";
import styled from "styled-components";
import Clock from "./Clock";
import Cart from './Cart'

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;
let tokensPrice = 0
let allTokensAdded = []

const addToken = function(index, deadline, authorLink, previewLink, authorImg, title,price,quantity, likes){
    
    const tokenAdded = {
        index : index,
        deadline : deadline,
        authorLink : authorLink,
        previewLink : previewLink,
        authorImg : authorImg,
        title : title,
        price : price,
        quantity : quantity,
        likes : likes
    }
    tokensPrice += tokenAdded.price
    allTokensAdded.push(tokenAdded)
    let cartTokens = document.getElementById('tokensQuantity')
    let totalTokensPrice = document.getElementById('totalValue')
    console.log(allTokensAdded)
    return(
        cartTokens.textContent = `Tokens Quantity: ${allTokensAdded.length}`,
        totalTokensPrice.textContent = `Total amount: ${tokensPrice}`
    )      
  
}
export default class Responsive extends Component {
  
    dummyData = [{
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-1.jpg",
        previewImg: "./img/items/static-1.jpg",
        title: "UX Omnia",
        price: 3,
        bid: "1/20",
        likes: 50
    },
    
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-11.jpg",
        previewImg: "./img/items/static-3.jpg",
        title: "Next Graphico",
        price: 5,
        bid: "1/11",
        likes: 97
    },
    {
        deadline:"January, 1, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-12.jpg",
        previewImg: "./img/items/static-4.jpg",
        title: "SQL Alpha",
        price: 4,
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-7.jpg",
        previewImg: "./img/items/static-5.jpg",
        title: "UI Spiro",
        price: 6,
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./img/items/static-6.jpg",
        title: "Alys Python",
        price: 5,
        bid: "1/20",
        likes: 50
    }]

  constructor(props) {
    super(props);
    this.state = {
        nfts: this.dummyData,
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
    <div className='row'>
    {this.state.nfts.map( (nft, index) => (
        <div key={index} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
            <div className="nft__item m-0">
                
                
                <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
                    <span>
                        <img onLoad={this.onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt=""/>
                    </span>
                </div>
                <div className="nft__item_info">
                    <span onClick={()=> window.open(nft.nftLink, "_self")}>
                        <h4>{nft.title}</h4>
                    </span>
                    <div className="nft__item_price">
                        {nft.price}<span>Matic</span>
                    </div>
                    <div className="nft__item_action">
                        <span onClick={()=>addToken(nft.index, nft.deadline, nft.authorLink, nft.previewLink, nft.authorImg, nft.title, nft.price, nft.quantity, nft.likes)}>Add to cart</span>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-check"></i><span></span>
                    </div>                            
                </div> 
            </div>
            
        </div>  
        
    ))}
</div> 
    );
}
}