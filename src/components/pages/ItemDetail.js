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


  

const Colection= function() {

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
                            <img src="./img/items/big-1.jpg" className="img-fluid img-rounded mb-sm-30" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="item_info">
                               
                                <h2>UX Omnia</h2>
                                <div className="item_info_counts">
                                    <div className="item_info_type"><i className="fa fa-behance"></i>Behance</div>
                                    <div className="item_info_views"><i className="fa fa-github"></i>Github</div>
                                    <div className="item_info_like"><i className="fa fa-image"></i>Image</div>
                                    <div className="item_info_type"><i className="fa fa-css3"></i>Css3</div>
                                    <div className="item_info_views"><i className="fa fa-html5"></i>Html5</div>
                                    <div className="item_info_like"><i className="fa fa-comments"></i>Fluid English</div>
                                </div>
                                <p>Anytime you interact with a product or service, you have a user experience. 
                                    This might entail navigating a mobile app, browsing a website, interacting
                                     with a physical product (like trying out a new running shoe), or taking
                                      advantage of a service (checking into a hotel or using public transportation for example).
                                </p>
                                <p>
                                The term user experience (UX) refers to all aspects of this interaction. 
                                Think about the last time you used a new product. Were you able to accomplish 
                                your task? How easy was it? How did it make you feel? UX design seeks to make products 
                                and services that are easy, effective, and delightful. 
                                </p>
                                <h6>For you</h6>
                                <div className="item_author">                                    
                                    <div className="author_list_pp">
                                        <span>
                                            <img className="lazy" src="./img/author/author-2.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </span>
                                    </div>                                    
                                   
                                </div>

                                <div className="spacer-40"></div>

                                <div className="de_tab">
    
                               
                              
                                
                            </div>
                                
                            </div>
                        </div>

    </div>
  </section>

  <Footer />
</div>
);
}
export default Colection;