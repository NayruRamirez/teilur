import React from "react";
import Clock from "../components/Clock";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { Link } from '@reach/router';

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


  

const AlysPython= function() {

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
    
        const [openCheckout, setOpenCheckout] = React.useState(false);
       
    
    return (
    <div>
    <GlobalStyles/>
    
      <section className='container'>
        <div className='row mt-md-5 pt-md-4'>
    
        <div className="col-md-6 text-center">
                                <img src="./img/items/static-12.jpg" className="img-fluid img-rounded mb-sm-30" alt=""/>
                            </div>
                            <div className="col-md-6">
                                <div className="item_info">
                                    Auctions ends in 
                                    <div className="de_countdown">
                                      <Clock deadline="December, 30, 2021" />
                                    </div>
                                    <h2>Alys Python</h2>
                                    <div className="item_info_counts">
                                        <div className="item_info_type"><i className="fa fa-behance"></i></div>
                                        <div className="item_info_views"><i className="fa fa-css3"></i></div>
                                        <div className="item_info_like"><i className="fa fa-html5"></i></div>
                                    </div>
                                    <p> Data engineers are tasked with managing and
                                         organizing data, while also keeping an eye out 
                                         for trends or inconsistencies that will impact business
                                          goals. It's a highly technical position, requiring 
                                          experience and skills in areas like programming, 
                                          mathematics and computer science</p>
    
                                    
                                    <div className="item_author">                                    
                                        <div className="author_list_pp">
                                            hi
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
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <strong style={{color : `black`}}><p>Price</p></strong>
                                            <h5>$20.00 per unit <span style={{color : `grey`, fontSize : `small`}}>&nbsp; &nbsp; &nbsp; &nbsp; (1,910 units available)</span></h5>
                                   
                                       
                                        </div>
                                    <div className="de_tab_content">
                                    <div className="d-flex flex-row mt-5">
                                        <button className='btn-main lead mb-12' onClick={() => setOpenCheckout(true)}>Buy Now</button>
                                    </div>
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
    
        </div>
      </section>
      { openCheckout &&
                <div className='checkout'>
                <div className='maincheckout'>
                <button className='btn-close' onClick={() => setOpenCheckout(false)}>x</button>
                    <div className='heading'>
                        <h3>Checkout</h3>
                    </div>
                    <div className="pool-info">
                        <div className="left">
                             Talent pool name:&nbsp; <strong className="black">Alys Python</strong>
                        </div>
                        <div className="right">
                            Code: &nbsp;<strong className="black">ALP1092</strong>
                        </div>
                    </div>
                    
                    <div className='detailcheckout'>
                        <div className='listcheckout'>
                            <h6># of units to purchase</h6>
                            <input type="number" name="buy_now_qty" id="buy_now_qty" className="form-control" value="112"/>
                        </div>
                        <strong className="blue">1910 units available (95.5%)</strong>
                    </div>
                    <div className='checkout-info'>
                        <p>Available Balance (USDC)</p>
                        <span className='subtotal'>
                            $3,853.57
                        </span>
                    </div>
                  <div className='checkout-info'>
                    <p>Unit Price (USDC)</p>
                    <div className='subtotal'>
                        $20.00
                    </div>
                  </div>
                  <div className='checkout-info'>
                    <p>Total Cost (USDC)</p>
                    <div className='subtotal'>
                        $2,240.00
                    </div>
                  </div>
                  <Link to="/colection" className='btn-main lead mb-12'>Buy Now</Link>
                </div>
                </div>
            }
           
      <Footer />
     
    </div>
    );
    }
export default AlysPython;