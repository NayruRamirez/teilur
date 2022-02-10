import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;

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


const explore= () => (
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
                      <input id="check_cat_1" name="check_cat_1" type="checkbox" value="check_cat_1" />
                      <label htmlFor="check_cat_1">Blockchain</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_2" name="check_cat_2" type="checkbox" value="check_cat_2"/>
                      <label htmlFor="check_cat_2">Data</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_3" name="check_cat_3" type="checkbox" value="check_cat_3"/>
                      <label htmlFor="check_cat_3">Design</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_4" name="check_cat_4" type="checkbox" value="check_cat_4"/>
                      <label htmlFor="check_cat_4">Marketing</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_5" name="check_cat_5" type="checkbox" value="check_cat_5"/>
                      <label htmlFor="check_cat_5">Software</label>
                  </div>


              </div>
          </div>

          <div className="item_filter_group">
              <h4>Status</h4>
              <div className="de_form">
                  <div className="de_checkbox">
                      <input id="buy" name="buy" type="checkbox" value="buy"/>
                      <label htmlFor="buy">Working</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="onauction" name="onauction" type="checkbox" value="onauction"/>
                      <label htmlFor="onauction">Studying</label>
                  </div>

              </div>
          </div>


          </div>

          <div className="col-md-9">
            <div className='row'>
                {dummyData.map( (nft, index) => (
                    <div key={index} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                        <div className="nft__item m-0" style={{height : `28rem`}}>
                            
                            
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
                                    ${nft.price}<span> per unit</span>
                                </div>
                                <div className="nft__item_price">
                                    {nft.quantity}  available ({nft.percentaje})%
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
      </section>


  <Footer />
</div>

);
export default explore;