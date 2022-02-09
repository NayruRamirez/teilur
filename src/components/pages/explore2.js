import React from 'react';
import ColumnNewThreeCol from '../components/ColumnNewThreeCol';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;
let tokensPrice = 0
const allTokensAdded = []

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
    return(
        cartTokens.textContent = `Tokens Quantity: ${allTokensAdded.length}`,
        totalTokensPrice.textContent = `Total amount: ${tokensPrice}`
    )      
  
}
const  dummyData = [{
  deadline:"December, 30, 2021",
  authorLink: "#",
  nftLink: "#",
  bidLink: "#",
  authorImg: "./img/author/author-1.jpg",
  previewImg: "./img/items/static-10.jpg",
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
  previewImg: "./img/items/static-9.jpg",
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
  previewImg: "./img/items/static-12.jpg",
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
  previewImg: "./img/items/static-7.jpg",
  title: "Alys Python",
  price: 5,
  bid: "1/20",
  likes: 50
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
                      <input id="check_cat_1" name="check_cat_1" type="checkbox" value="check_cat_1"/>
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
                            
                            <div className="author_list_pp">
                              
                            </div>
                            <div className="nft__item_wrap">
                                <span>
                                    <img  src={nft.previewImg} style={{height : `18rem`}}className="lazy nft__item_preview" alt=""/>
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
                { dummyData.length !== dummyData.length &&
                    <div className='col-lg-12'>
                        <div className="spacer-single"></div>
                        <span onClick={() => this.loadMore()} className="btn-main lead m-auto">Load More</span>
                    </div>
                }
            </div>              
          </div>
           
        </div>
      </section>


  <Footer />
</div>

);
export default explore;