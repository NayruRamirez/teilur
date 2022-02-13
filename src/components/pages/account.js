import React from "react";
import Web3 from "web3";

const useEffect = function(){

    if (window.ethereum) {

      // (async () => {
      //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      //   console.log(`Accounts: ${accounts}`)
      // })()

      (async () => {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        console.log(`Accounts: ${accounts[0]}`);
        const balance = await web3.eth.getBalance(accounts[0]);
        console.log(`Balance: ${balance}`);
        const accountInfo = document.getElementById('wallet');
       
        accountInfo.textContent = `${accounts[0].slice(0,5)}...${accounts[0].slice(9, 12)}`;
       
      })()
    }
  }

const Account = function(){
    return(
       <div>
         <section className='container d_coll no-top no-bottom'>
            <div className='row'>
              <div className="col-md-12">
                <div className="d_profile">
                          <div className="profile_avatar">
                              <div className="d_profile_img">
                                  <img src="./img/author/author-12.jpg" alt="" onLoad={(useEffect)}/>
                                  <i className="fa fa-check"></i>
                              </div>
                              
                              <div className="profile_name">
                                  <h4>
                                      Your Wallet                                             
                                      <div className="clearfix"></div>
                                      <div className="profile_wallet">
                                        <p id="wallet"></p>
                                      </div>
                                  </h4>
                              </div>
                          </div>

                  </div>
              </div>
            </div>
          </section>
       </div>
    )
};
export default Account;