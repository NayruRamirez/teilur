import React from 'react';
import Web3 from "web3";
const connectWallet = function(){

    if (window.ethereum) {
  
      // (async () => {
      //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      //   console.log(`Accounts: ${accounts}`)
      // })()
  
      (async () => {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        console.log(`Accounts: ${accounts[0]}`);
  
      })()
    }
  }
const Wallet= () => (
  <div className="row">
    <div className="col-lg-4 mb30" onClick={connectWallet}>
        <span className="box-url">
            
            <img src="./img/wallet/1.png" alt="" className="mb20"/>
            <h4>Metamask</h4>
            <p>Start exploring blockchain applications in seconds.</p>
        </span>
    </div>

    
    

    <div className="col-lg-4 mb30">
        <span className="box-url">
        <span className="box-url-label">Coming soon</span>
            <img src="./img/wallet/4.png" alt="" className="mb20"/>
            <h4>WalletConnect</h4>
            <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
        </span>
    </div>

    <div className="col-lg-4 mb30">
        <span className="box-url">
        <span className="box-url-label">Coming soon</span>
            <img src="./img/wallet/5.png" alt="" className="mb20"/>
            <h4>Coinbase Wallet</h4>
            <p>The easiest and most secure crypto wallet. ... No Coinbase account required.
            </p>
        </span>
    </div>

                               
</div>
);
export default Wallet;