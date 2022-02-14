import React from "react";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import Account from './account';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;

const Colection= function() {
  const [openMenu, setOpenMenu] = React.useState(true);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);

  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
    setOpenMenu1(false);
    setOpenMenu2(false);
    setOpenMenu3(false);
    document.getElementById("Mainbtn").classList.add("active");
    document.getElementById("Mainbtn1").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
    document.getElementById("Mainbtn3").classList.remove("active");
  };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
    setOpenMenu(false);
    setOpenMenu2(false);
    setOpenMenu3(false);
    document.getElementById("Mainbtn1").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
    document.getElementById("Mainbtn3").classList.remove("active");
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
    setOpenMenu(false);
    setOpenMenu1(false);
    setOpenMenu3(false);
    document.getElementById("Mainbtn2").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn1").classList.remove("active");
    document.getElementById("Mainbtn3").classList.remove("active");

  };
  const handleBtnClick3 = () => {
    setOpenMenu3(!openMenu3);
    setOpenMenu(false);
    setOpenMenu1(false);
    setOpenMenu2(false);
    document.getElementById("Mainbtn3").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn1").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
  };

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
    state : "applying"
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
    state : "studying"
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
    state : "working"
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
    state : "studying"
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
    state : "working"
  }]
  
return (
<div>
<GlobalStyles/>

  <section id='profile_banner' className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/5.jpg'})`}}>
    <div className='mainbreadcumb'>
    </div>
  </section>

  <Account></Account>
  <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <div className="items_filter">
                <ul className="de_nav">
                    <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>All</span></li>
                    <li id='Mainbtn1' className=""><span onClick={handleBtnClick1}>Studying</span></li>
                    <li id='Mainbtn2' className=""><span onClick={handleBtnClick2}>Applying</span></li>
                    <li id='Mainbtn3' className=""><span onClick={handleBtnClick3}>Working</span></li>
                </ul>
            </div>
          </div>
        </div>
      {openMenu && (  
        <div id='zero1' className='onStep fadeIn' style={{widht: `60vw`}}>
          <div className="col-md-10">
            <div className="row">
              {dummyData.map( (nft, index) => (
                      <div key={index} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                          <div className="nft__item m-0" style={{height : `30rem`}}>
                              
                              
                              <div className="nft__item_wrap">
                                  <span>
                                      <img  src={nft.previewImg} style={{maxHeight : `18rem`}}className="lazy nft__item_preview" alt=""/>
                                  </span>
                              </div>
                              <div className="nft__item_info">
                                  <span onClick={()=> window.open(nft.nftLink, "_self")}>
                                      <h4>{nft.title} <span style={{color : `grey`, float : `right`}}> Code :{nft.code}</span></h4>
                                  </span>
                                  <div className="nft__item_price">
                                      ${nft.price} per unit
                                  </div>
                                  <div className="nft__item_price">
                                      You own {nft.quantity-199} 
                                  </div>
                                  <div className="nft__item_action">
                                      <span >Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                          <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                      {nft.state}</span>
                                  </div>              
                              </div> 
                          </div>
                      </div>  
                  ))}
              
            </div>
          </div>
         
        </div>
      )}
      {openMenu1 && (  
        <div id='zero1' className='onStep fadeIn' style={{widht: `60vw`}}>
            
          <div className="col-md-10">
            <div className='row'>
                  {
                    dummyData.filter(nft => nft.state === "studying")
                    .map(nft=>(
                      
                         <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                            <div className="nft__item m-0" style={{height : `30rem`}}>
                                
                                
                                <div className="nft__item_wrap">
                                    <span>
                                        <img  src={nft.previewImg} style={{maxHeight : `18rem`}}className="lazy nft__item_preview" alt=""/>
                                    </span>
                                </div>
                                <div className="nft__item_info">
                                    <span onClick={()=> window.open(nft.nftLink, "_self")}>
                                        <h4>{nft.title} <span style={{color : `grey`, float : `right`}}> Code :{nft.code}</span></h4>
                                    </span>
                                    <div className="nft__item_price">
                                        ${nft.price} per unit
                                    </div>
                                    <div className="nft__item_price">
                                        You own {nft.quantity} 
                                    </div>
                                    <div className="nft__item_action">
                                        <span >Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                            <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                        {nft.state}</span>
                                    </div>              
                                </div> 
                            </div>
                        </div>  
                    
                      ))
                  }
              
            </div>   
          </div>
        </div>
      )}
      {openMenu2 && (  
        <div id='zero1' className='onStep fadeIn' style={{widht: `60vw`}}>
          <div className="col-md-10">
          <div className='row'>
                  {
                    dummyData.filter(nft => nft.state === "applying")
                    .map(nft=>(
                      
                         <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                            <div className="nft__item m-0" style={{height : `30rem`}}>
                                
                                
                                <div className="nft__item_wrap">
                                    <span>
                                        <img  src={nft.previewImg} style={{maxHeight : `18rem`}}className="lazy nft__item_preview" alt=""/>
                                    </span>
                                </div>
                                <div className="nft__item_info">
                                    <span onClick={()=> window.open(nft.nftLink, "_self")}>
                                        <h4>{nft.title} <span style={{color : `grey`, float : `right`}}> Code :{nft.code}</span></h4>
                                    </span>
                                    <div className="nft__item_price">
                                        ${nft.price} per unit
                                    </div>
                                    <div className="nft__item_price">
                                        You own {nft.quantity} 
                                    </div>
                                    <div className="nft__item_action">
                                        <span >Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                            <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                        {nft.state}</span>
                                    </div>              
                                </div> 
                            </div>
                        </div>  
                    
                      ))
                  }
              
            </div>   
          </div>
         
        </div>
      )}
      {openMenu3 && (  
        <div id='zero1' className='onStep fadeIn' style={{widht: `60vw`}}>
          <div className="col-md-10">
            <div className='row'>
                    {
                      dummyData.filter(nft => nft.state === "working")
                      .map(nft=>(
                        
                          <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                              <div className="nft__item m-0" style={{height : `30rem`}}>
                                  
                                  
                                  <div className="nft__item_wrap">
                                      <span>
                                          <img  src={nft.previewImg} style={{maxHeight : `18rem`}}className="lazy nft__item_preview" alt=""/>
                                      </span>
                                  </div>
                                  <div className="nft__item_info">
                                      <span onClick={()=> window.open(nft.nftLink, "_self")}>
                                          <h4>{nft.title} <span style={{color : `grey`, float : `right`}}> Code :{nft.code}</span></h4>
                                      </span>
                                      <div className="nft__item_price">
                                          ${nft.price} per unit
                                      </div>
                                      <div className="nft__item_price">
                                          You own {nft.quantity} 
                                      </div>
                                      <div className="nft__item_action">
                                          <span >Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                              <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                          {nft.state}</span>
                                      </div>              
                                  </div> 
                              </div>
                          </div>  
                      
                        ))
                    }
                
              </div>   
          </div>
        </div>
      )}
      
      </section>


  <Footer />
</div>
);
}
export default Colection;