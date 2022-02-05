import React from 'react';
import ColumnNewThreeCol from '../components/ColumnNewThreeCol';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
`;


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

          <div className="col-md-10">
            <ColumnNewThreeCol/>
          </div>
        </div>
      </section>


  <Footer />
</div>

);
export default explore;