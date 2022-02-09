import React, { useEffect, useState } from "react";

const  dummyData = [{
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


export default function App() {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="App">
        Select your pizza topping:
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Paneer
        </div>
        <div className="result">
          Above checkbox is {isChecked ? "checked" : "un-checked"}.
        </div>
        <div className='row'>
                {dummyData.map( (nft, index) => (
                  
                    <div key={index} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                        <div className="nft__item m-0" style={{height : `28rem`}}>
                            
                            <div className="author_list_pp" style={{width : `3rem`, height : `3rem`, background : `white`}}>
                                <span>                                    
                                    <img className="lazy" src={nft.icon} alt=""/>
                                </span>
                            </div>
                            <div className="nft__item_wrap">
                                <span>
                                    <img  src={nft.previewImg} style={{height : `18rem`}}className="lazy nft__item_preview" alt=""/>
                                </span>
                            </div>
                            <div className="nft__item_info">
                                <span onClick={()=> window.open(nft.nftLink, "_self")}>
                                    <h4>{nft.title} <span style={{color : `grey`, float : `right`}}>{nft.code}</span></h4>
                                </span>
                                <div className="nft__item_price">
                                    ${nft.price}<span> per unit</span>
                                </div>
                                <div className="nft__item_price">
                                    {nft.quantity}  available <span style={{color : `grey`, float : `right`}}>({nft.percentaje})%</span>
                                </div>
                                <div className="nft__item_action">
                                    <span >Details</span>
                                </div>
                                <div className="nft__item_like">
                                   <i className="fa icon_circle-empty"></i><span>{nft.state}</span>
                                </div> 
                                <div className="nft__item_like">
                                   <span></span>
                                </div>                   
                            </div> 
                            
                        </div>
                    </div>  
                    
                ))}
                { dummyData.length !== dummyData.length &&
                    <div className='col-lg-12'>
                        <div className="spacer-single"></div>
                        <span className="btn-main lead m-auto">Load More</span>
                    </div>
                }
            </div>        
      </div>
    );
  }