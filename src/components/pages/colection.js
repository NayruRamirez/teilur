import React from "react";
import ColumnZero from '../components/ColumnZero';
import ColumnZeroTwo from '../components/ColumnZeroTwo';
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
const handleBtnClick = (): void => {
  setOpenMenu(!openMenu);
  document.getElementById("Mainbtn").classList.add("active");
};



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
                    <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>Owned</span></li>
                </ul>
            </div>
          </div>
        </div>
      {openMenu && (  
        <div id='zero1' className='onStep fadeIn' style={{widht: `60vw`}}>
          <div className="col-md-2"></div>
         <div className="col-md-8">
            <ColumnZero/>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
      
      </section>


  <Footer />
</div>
);
}
export default Colection;