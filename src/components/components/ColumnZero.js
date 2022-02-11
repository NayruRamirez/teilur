import React, { Component } from "react";


export default class Responsive extends Component {
  
    dummyData = [{
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        quantityLink: "#",
        authorImg: "./img/author/author-1.jpg",
        previewImg: "./img/items/static-10.jpg",
        title: "UX Omnia",
        code : "UXO001",
        price: 30,
        quantity: 200,
        percentaje: 100,
        icon : "./img/items/design.png",
        state : "applying",
        vertical : "design"
      },
      
      {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        quantityLink: "#",
        authorImg: "./img/author/author-11.jpg",
        previewImg: "./img/items/static-9.jpg",
        title: "Next Graphico",
        code : "NXG001",
        price: 100,
        quantity: 200,
        percentaje: 100,
        icon : "./img/items/design.png",
        state : "studying",
        vertical : "design"
      },
      {
        deadline:"January, 1, 2022",
        authorLink: "#",
        nftLink: "#",
        quantityLink: "#",
        authorImg: "./img/author/author-12.jpg",
        previewImg: "./img/items/static-4.jpg",
        title: "SQL Alpha",
        code : "SQL001",
        price: 40,
        quantity: 200,
        percentaje: 100,
        icon : "./img/items/data.png",
        state : "working",
        vertical : "data"
      },
      {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        quantityLink: "#",
        authorImg: "./img/author/author-7.jpg",
        previewImg: "./img/items/static-12.jpg",
        title: "UI Spiro",
        code : "UIS001",
        price: 20,
        quantity: 200,
        percentaje: 100,
        icon : "./img/items/design.png",
        state : "studying",
        vertical : "design"
      },
      {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        quantityLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./img/items/static-7.jpg",
        title: "Alys Python",
        code : "ALP001",
        price: 40,
        quantity: 200,
        percentaje: 100,
        icon : "./img/items/data.png",
        state : "working",
        vertical : "data"
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
                        <span>Add to cart</span>
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