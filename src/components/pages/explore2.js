import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;

const  dummyData = [{
  deadline:"December, 26, 2021",
  authorLink: "#",
  nftLink: "/uxomnia",
  quantityLink: "#",
  authorImg: "./img/author/author-1.jpg",
  previewImg: "./img/items/static-10.jpg",
  title: "UX Omnia",
  code : "UXO001",
  price: 26,
  quantity: 200,
  percentaje: 100,
  icon : "./img/items/design.png",
  state : "applying",
  vertical : "design"
},

{
  deadline:"",
  authorLink: "#",
  nftLink: "/nextgraphico",
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
  nftLink: "/sqlalpha",
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
  nftLink: "/uispiro",
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
  nftLink: "/alyspython",
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
  vertical : "software"
}]

const Explore= function() {
    const [openMenu, setOpenMenu] = React.useState(true);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const [openMenu4, setOpenMenu4] = React.useState(false);
    const [openMenu5, setOpenMenu5] = React.useState(false);
    const [openMenu6, setOpenMenu6] = React.useState(false);
    const [openMenu7, setOpenMenu7] = React.useState(false);
    const [openMenu8, setOpenMenu8] = React.useState(false);
  

  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
    setOpenMenu(false);
    console.log("click en blockchain")
    document.getElementById("check_cat_1").classList.add("active");
   
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
    setOpenMenu(false);
    console.log("click en data")
    document.getElementById("check_cat_2").classList.add("active");
  };

  const handleBtnClick3 = () => {
    setOpenMenu3(!openMenu3);
    setOpenMenu(false);
    console.log("click en design")
    document.getElementById("check_cat_3").classList.add("active");
  };


  const handleBtnClick4 = () => {
    setOpenMenu4(!openMenu4);
    setOpenMenu(false);
    console.log("click en marketing")
    document.getElementById("check_cat_4").classList.add("active");
  };

  const handleBtnClick5 = () => {
    setOpenMenu5(!openMenu5);
    setOpenMenu(false);
    console.log("click en software")
    document.getElementById("check_cat_5").classList.add("active");
  };

  const handleBtnClick6 = () => {
    setOpenMenu6(!openMenu6);
    setOpenMenu(false);
    console.log("click en working")
    document.getElementById("check_cat_6").classList.add("active");
  };

  const handleBtnClick7 = () => {
    setOpenMenu7(!openMenu7);
    setOpenMenu(false);
    console.log("click en studying")
    document.getElementById("check_cat_7").classList.add("active");
  };

  const handleBtnClick8 = () => {
    setOpenMenu8(!openMenu8);
    setOpenMenu(false);
    console.log("click en applying")
    document.getElementById("check_cat_8").classList.add("active");
  };

return(
    <div>
    <GlobalStyles/>
    <section className='container'>
            <div className='row'>
            <div className="spacer-double"></div>

            <div className='col-md-2'>

            <div className="item_filter_group">
                <h4>Verticals</h4>
                <div className="de_form">
                    <div className="de_checkbox">
                        <input id="check_cat_1" name="check_cat_1" type="checkbox" value="check_cat_1"  className='' onClick={handleBtnClick1}/>
                        <label htmlFor="check_cat_1">Blockchain</label>
                    </div>

                    <div className="de_checkbox">
                        <input id="check_cat_2" name="check_cat_2" type="checkbox" value="check_cat_2" className='' onClick={handleBtnClick2}/>
                        <label htmlFor="check_cat_2">Data</label>
                    </div>

                    <div className="de_checkbox">
                        <input id="check_cat_3" name="check_cat_3" type="checkbox" value="check_cat_3" className=''  onClick={handleBtnClick3} />
                        <label htmlFor="check_cat_3">Design</label>
                    </div>

                    <div className="de_checkbox">
                        <input id="check_cat_4" name="check_cat_4" type="checkbox" value="check_cat_4" className='' onClick={handleBtnClick4}/>
                        <label htmlFor="check_cat_4">Marketing</label>
                    </div>

                    <div className="de_checkbox">
                        <input id="check_cat_5" name="check_cat_5" type="checkbox" value="check_cat_5" className='' onClick={handleBtnClick5}/>
                        <label htmlFor="check_cat_5">Software</label>
                    </div>


                </div>
            </div>

            <div className="item_filter_group">
                <h4>Status</h4>
                <div className="de_form">
                    <div className="de_checkbox">
                        <input id="check_cat_6" name="check_cat_6" type="checkbox" value="check_cat_6" className='' onClick={handleBtnClick6}/>
                        <label htmlFor="check_cat_6">Working</label>
                    </div>
                    <div className="de_checkbox">
                        <input id="check_cat_7" name="check_cat_7" type="checkbox" value="check_cat_7" className='' onClick={handleBtnClick7}/>
                        <label htmlFor="check_cat_7">Studying</label>
                    </div>
                    <div className="de_checkbox">
                        <input id="check_cat_8" name="check_cat_8" type="checkbox" value="check_cat_8" className='' onClick={handleBtnClick8}/>
                        <label htmlFor="check_cat_8">Applying</label>
                    </div>
                </div>
            </div>


            </div>
            <div className='col-md-8'>
                    {openMenu && (  
                        <div id='zero1' className='row' style={{widht: `60vw`}}>
                                {dummyData.map( (nft, index) => (
                                        <div key={index} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                            <div className="nft__item m-0" style={{height : `26rem`}}>
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
                                                        {nft.quantity}  available ({nft.percentaje})%
                                                    </div>
                                                    <div className="nft__item_action">
                                                        <span onClick={()=> window.open(nft.nftLink, "_self")}>Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                                            <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                                        {nft.state}</span>
                                                    </div>              
                                                </div> 
                                            </div>
                                        </div>  
                                    ))}
                                
                        
                        </div>
                    )}
                    
                    {openMenu1 && (  
                    <div id='zero1' className='row' style={{widht: `60vw`}}>
                        
                            
                            {dummyData.filter(nft => nft.vertical === "blockchain")
                            .map(nft=>(
                                    <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <div className="nft__item m-0" style={{height : `26rem`}}>
                                            
                                            
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
                                                    {nft.quantity}  available ({nft.percentaje})%
                                                </div>
                                                <div className="nft__item_action">
                                                    <span onClick={()=> window.open(nft.nftLink, "_self")}>Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                                        <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                                    {nft.state}</span>
                                                </div>              
                                            </div> 
                                        </div>
                                    </div>  
                                ))}
                            
                            </div>
                    )}
                    {openMenu2 && (  
                    <div id='zero1' className='row' style={{widht: `60vw`}}>
                        
                            
                            {dummyData.filter(nft => nft.vertical === "data")
                            .map(nft=>(
                                    <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <div className="nft__item m-0" style={{height : `26rem`}}>
                                            
                                            
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
                                                    {nft.quantity}  available ({nft.percentaje})%
                                                </div>
                                                <div className="nft__item_action">
                                                    <span onClick={()=> window.open(nft.nftLink, "_self")}>Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                                        <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                                    {nft.state}</span>
                                                </div>              
                                            </div> 
                                        </div>
                                    </div>  
                                ))}
                    </div>
                    )}
                     {openMenu3 && (  
                    <div id='zero1' className='row' style={{widht: `60vw`}}>
                        
                            
                            {dummyData.filter(nft => nft.vertical === "design")
                            .map(nft=>(
                                    <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <div className="nft__item m-0" style={{height : `26rem`}}>
                                            
                                            
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
                                                    {nft.quantity}  available ({nft.percentaje})%
                                                </div>
                                                <div className="nft__item_action">
                                                    <span onClick={()=> window.open(nft.nftLink, "_self")}>Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                                        <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                                    {nft.state}</span>
                                                </div>              
                                            </div> 
                                        </div>
                                    </div>  
                                ))}
                               
                    
                    </div>
                    )}
                    {openMenu4 && (  
                    <div id='zero1' className='row' style={{widht: `60vw`}}>
                        
                            
                            {dummyData.filter(nft => nft.vertical === "marketing")
                            .map(nft=>(
                                    <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <div className="nft__item m-0" style={{height : `26rem`}}>
                                            
                                            
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
                                                    {nft.quantity}  available ({nft.percentaje})%
                                                </div>
                                                <div className="nft__item_action">
                                                    <span onClick={()=> window.open(nft.nftLink, "_self")}>Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                                        <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                                    {nft.state}</span>
                                                </div>              
                                            </div> 
                                        </div>
                                    </div>  
                            ))}
                               
                    
                    </div>
                    )}
                     {openMenu5 && (  
                    <div id='zero1' className='row' style={{widht: `60vw`}}>
                        
                            
                            {dummyData.filter(nft => nft.vertical === "software")
                            .map(nft=>(
                                    <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <div className="nft__item m-0" style={{height : `26rem`}}>
                                            
                                            
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
                                                    {nft.quantity}  available ({nft.percentaje})%
                                                </div>
                                                <div className="nft__item_action">
                                                    <span onClick={()=> window.open(nft.nftLink, "_self")} >Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                                        <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                                    {nft.state}</span>
                                                </div>              
                                            </div> 
                                        </div>
                                    </div>  
                            ))}
                    </div>
                    )}
                     {openMenu6 && (  
                    <div id='zero1' className='row' style={{widht: `60vw`}}>
                        
                            
                            {dummyData.filter(nft => nft.state === "working")
                            .map(nft=>(
                                    <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <div className="nft__item m-0" style={{height : `26rem`}}>
                                            
                                            
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
                                                    {nft.quantity}  available ({nft.percentaje})%
                                                </div>
                                                <div className="nft__item_action">
                                                    <span onClick={()=> window.open(nft.nftLink, "_self")}>Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                                        <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                                    {nft.state}</span>
                                                </div>              
                                            </div> 
                                        </div>
                                    </div>  
                            ))}
                    </div>
                    )}
                    {openMenu7 && (  
                    <div id='zero1' className='row' style={{widht: `60vw`}}>
                        
                            
                            {dummyData.filter(nft => nft.state === "studying")
                            .map(nft=>(
                                    <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <div className="nft__item m-0" style={{height : `26rem`}}>
                                            
                                            
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
                                                    {nft.quantity}  available ({nft.percentaje})%
                                                </div>
                                                <div className="nft__item_action">
                                                <span onClick={()=> window.open(nft.nftLink, "_self")}>Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                                        <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                                    {nft.state}</span>
                                                </div>              
                                            </div> 
                                        </div>
                                    </div>  
                            ))}
                    </div>
                    )}
                    {openMenu8 && (  
                    <div id='zero1' className='row' style={{widht: `60vw`}}>
                        
                            
                            {dummyData.filter(nft => nft.state === "applying")
                            .map(nft=>(
                                    <div key={nft.code} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <div className="nft__item m-0" style={{height : `26rem`}}>
                                            
                                            
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
                                                    {nft.quantity}  available ({nft.percentaje})%
                                                </div>
                                                <div className="nft__item_action">
                                                <span onClick={()=> window.open(nft.nftLink, "_self")}>Details</span><span style={{color : `#cfcece`, float : `right`}}>
                                                        <i className="fa fa-circle"></i> &nbsp; &nbsp;
                                                    {nft.state}</span>
                                                </div>              
                                            </div> 
                                        </div>
                                    </div>  
                            ))}
                    </div>
                    )}
                </div>
            </div>
        </section>


    <Footer />
    </div>

)

};
export default Explore;