import React from "react";
import Clock from "../components/Clock";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
    border-bottom: solid 1px #dddddd;
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


  

const Uxomnia= function() {

const [openMenu, setOpenMenu] = React.useState(true);
const [openMenu1, setOpenMenu1] = React.useState(false);

const handleBtnClick = (): void => {
  setOpenMenu(!openMenu);
  setOpenMenu1(false);
  document.getElementById("Mainbtn").classList.add("active");
  document.getElementById("Mainbtn1").classList.remove("active");
};
const handleBtnClick1 = (): void => {
  setOpenMenu1(!openMenu1);
  setOpenMenu(false);
  document.getElementById("Mainbtn1").classList.add("active");
  document.getElementById("Mainbtn").classList.remove("active");
};

return (
<div>
<GlobalStyles/>

  <section className='container'>
    <div className='row mt-md-5 pt-md-4'>

    <div className="col-md-6 text-center">
                            <img src="./img/items/static-10.jpg" className="img-fluid img-rounded mb-sm-30" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="item_info">
                                Auctions ends in 
                                <div className="de_countdown">
                                  <Clock deadline="December, 30, 2021" />
                                </div>
                                <h2>UX Omnia</h2>
                                <div className="item_info_counts">
                                    <div className="item_info_type"><i className="fa fa-behance"></i></div>
                                    <div className="item_info_views"><i className="fa fa-css3"></i></div>
                                    <div className="item_info_like"><i className="fa fa-html5"></i></div>
                                </div>
                                <p> The UX designer role is to make a product or service usable, enjoyable, and accessible. 
                                    While many companies design user experiences, the term is most often associated 
                                    with digital design for websites and apps.</p>

                                <h6></h6>
                                <div className="item_author">                                    
                                    <div className="author_list_pp">
                                        
                                    </div>                                    
                                    <div className="author_list_info">
                                       
                                    </div>
                                </div>

                                <div className="spacer-40"></div>

                                <div className="de_tab">
    
                                <ul className="de_nav">
                                    <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>Bids</span></li>
                                    <li id='Mainbtn1' className=''><span onClick={handleBtnClick1}>History</span></li>
                                </ul>
                                
                                <div className="de_tab_content">
                                    {openMenu && (  
                                    <div className="tab-1 onStep fadeIn">
                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid accepted <b>0.005 ETH</b>
                                                <span>by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-2.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.005 ETH</b>
                                                <span>by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-3.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.004 ETH</b>
                                                <span>by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM</span>
                                            </div>
                                        </div>

                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-4.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.003 ETH</b>
                                                <span>by <b>Lori Hart</b> at 6/12/2021, 12:57 AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    )}

                                    {openMenu1 && ( 
                                    <div className="tab-2 onStep fadeIn">
                                        <div className="p_list">
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-5.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid <b>0.005 ETH</b>
                                                <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                                            </div>
                                        </div>

                                       
                                    </div>
                                    )}
                                    <div className="row mt-5">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="nft_attr">
                                                    <h5>Background</h5>
                                                    <h4>Yellowish Sky</h4>
                                                    <span>85% have this trait</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="nft_attr">
                                                    <h5>Eyes</h5>
                                                    <h4>Purple Eyes</h4>
                                                    <span>14% have this trait</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="nft_attr">
                                                    <h5>Nose</h5>
                                                    <h4>Small Nose</h4>
                                                    <span>45% have this trait</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="nft_attr">
                                                    <h5>Mouth</h5>
                                                    <h4>Smile Red Lip</h4>
                                                    <span>61% have this trait</span>
                                                </div>
                                            </div>
                                                                        
                                        </div>
                                </div>
                                <div className="de_tab_content">
                                <ul className="de_nav" style={{display : `flex`, flexDirection : `row`, float : `rigth`}}>
                                    <button id='' className='btn-main'><span>Buy</span></button>&nbsp; &nbsp; &nbsp;
                                    <button id='' className='btn-main' style={{background : `#4a76cc75`}}><span>Place a bid</span></button>
                                </ul>
                                    
                                </div>
                                
                                
                            </div>
                                
                            </div>
                        </div>

    </div>
  </section>

  <Footer />
</div>
);
}
export default Uxomnia;