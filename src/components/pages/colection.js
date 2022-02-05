import React from "react";
import ColumnZero from '../components/ColumnZero';
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

const Colection= function(props) {
  console.log(props.location.aboutProps);
return (
<div>
<GlobalStyles/>

  <section id='profile_banner' className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/4.jpg'})`}}>
    <div className='mainbreadcumb'>
    </div>
  </section>

  <Account></Account>
  <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <div className="items_filter">
                <ul className="de_nav">
                    <li id='Mainbtn' className="active"><span>Your tokens</span></li>
                </ul>
            </div>
          </div>
        </div>
        <div id='zero1' className='onStep fadeIn'>
         <ColumnZero/>
        </div>
      </section>


  <Footer />
</div>
);
}
export default Colection;