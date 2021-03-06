import React, { useState } from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import video from '../vid.mp4'
import { ethers } from "ethers";
import { injected } from '../components/wallet/connector'
import { useWeb3React } from "@web3-react/core"

const Home = () => {
  const { ethereum } = window;
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect () {
    try {
      await activate( injected )
      localStorage.setItem( 'isWalletConnected', true )
    } catch ( ex ) {
      console.log( ex )
    }
  }

  return (
    <div className="Nav">
      <Navbar />
      <div className='d-flex'>
        <div>
          <img src="./logo.PNG" className="logo" />
        </div>
        <div>
          <div className="head1">Play & Earn.</div>
          <div className="d-flex flex-row justify-center home">
            <div className="liendiv">
              <hr className="line" />
            </div>
            <h1 className="head2"> Certainly.</h1>
          </div>
          <p className="para">
            Are you the crazy cricket fan who can't afford to miss a single IPL match? You have the uncanny ability to memorise every single stats of players and predit who's gonna do well! But, alas there is no monetary incentive 😭. Don't worry we are here just for you guys! Monetise your cricketing knowledge and get exclusive rewards from us! Start trading player nfts once the tourney begins and book profits and notch up your score! Get the taste of the unique combo of cricket and nft served to entertain you and also, help you earn and incentive your cricketing knowledge!
          </p>
        </div>
      </div>
      <div className="button-pos">
        <a href='#faq'>
          <button className="learn-button">LEARN MORE</button>
        </a>
        { !account && ( <button className="wallet" onClick={ () => connect() }>CONNECT WALLET</button> ) }
      </div>
      <div class="wrapper mt-5 pb-5">
        <marquee behavior="alternate">
          <span class="marquee txt">
            Rewards • Secure transactions • IPL Seasons • Player NFTs
          </span>
        </marquee>
        <marquee behavior="alternate">
          <span class="marquee txt">
            Trading NFTs • IPL • Bonus Prizes • Auction favourite players • Earn money
          </span>
        </marquee>
      </div>
      <h1 className="text-white mb-3 ml-5 howItWorks">How it works</h1>
      <div className="working pb-5">
        <p className="working-para mr-5">
          Radio signals transmitted from a controller device control the actions
          of a remote device. In radio communication, used in radio and
          television.Radio signals transmitted from a controller device control
          the actions of a remote device. In radio communication, used in radio
          and television.
        </p>
        <div className="text-center">
          { !account && ( <button onClick={ () => connect() } className="working-button mr-5">Start Earning</button> ) }
        </div>
      </div>
      <marquee behavior="alternate">
        <div className="demo-holder">
          <div className="demo-setter">
            <img className="demo-img" src="./ipl.png" />
            <h1 className="demo-heading my-2">1. Choose your player</h1>
            <p className="demo-para my-2">
              Radio signals transmitted from a controller device control the
              actions
              <br /> of a remote device. In radio communication, used in radio
              and television.
            </p>
          </div>
          <div className="demo-setter">
            <img className="demo-img" src="./ipl.png" />
            <h1 className="demo-heading my-2">2. Bid on player NFT</h1>
            <p className="demo-para my-2">
              Radio signals transmitted from a controller device control the
              actions
              <br /> of a remote device. In radio communication, used in radio
              and television.
            </p>
          </div>
          <div className="demo-setter">
            <img className="demo-img" src="./ipl.png" />
            <h1 className="demo-heading my-2">3. Player wins a game</h1>
            <p className="demo-para my-2">
              Radio signals transmitted from a controller device control the
              actions <br />
              of a remote device. In radio communication, used in radio and
              television.
            </p>
          </div>
          <div className="demo-setter">
            <img className="demo-img" src="./ipl.png" />
            <h1 className="demo-heading my-2">4. You get cash rewards</h1>
            <p className="demo-para my-2">
              Radio signals transmitted from a controller device control the
              actions <br />
              of a remote device. In radio communication, used in radio and
              television.
            </p>
          </div>
        </div>
      </marquee>

      <div className="d-flex">
        {/* <img src="https://www.canva.com/design/DAFHDlOsAFU/zob3X4tP-fEFtZBdTCBmzg/edit?utm_content=DAFHDlOsAFU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="img2" /> */ }
        <video src={ video } width="600" height="500" controls className="ml-4">
        </video>
        <div className="ml-5">
          <h1 class="head2 mt-5">Unlock a world full of possibilities.</h1>
          <p className="para2 ml-5 mt-5">25 + Countries</p>
          <p className="para2 ml-5 mt-3"> 100 + NFTs Served</p>
          <p className="para2 ml-5 mt-3">5000 + Bids Placed</p>
        </div>
      </div>

      <div id="faq" className="faqfather mt-5 ml-5">
        <div className="faqchild1">
          <h1 className="FAQheading" >What the FAQ?</h1>
          <p className="para1 mt-2">
            Radio signals transmitted from a controller device control the
            actions of a remote device. In radio communication, used in radio
            and television.Radio signals transmitted from a controller device
            control the actions of a remote device. In radio communication, used
            in radio and television.
          </p>
          { !account && ( <button className="learn-button" onClick={ () => connect() }>CONNECT WALLET</button> ) }
        </div>
        <div className="faqchild2">
          <div id="accordion" class="myaccordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0 p-3">
                  <button
                    class="d-flex align-items-center justify-content-between btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    What happens when the chicken comes out of the egg?
                    <span class="fa-stack fa-sm">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">

                  <p>
                    Donec porta turpis eget pharetra mattis. Nunc non finibus
                    diam. Quisque enim erat, egestas id posuere quis, facilisis
                    eget neque. Aenean ornare convallis neque eget pharetra.
                    Suspendisse blandit pharetra elit, eget ultrices lorem porta
                    auctor. Nullam malesuada lobortis massa, ac porttitor dui
                    dapibus eget. Vestibulum tincidunt eros id ante consectetur,
                    ut mollis enim posuere. Vivamus aliquet urna ante, et tempor
                    risus facilisis in. Morbi sem tellus, dictum ultrices
                    viverra ut, ornare gravida sapien.
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0 p-3">
                  <button
                    class="d-flex align-items-center justify-content-between btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What happens when the chicken comes out of the egg?
                    <span class="fa-stack fa-2x">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <p>
                    ed varius nibh ut neque tincidunt, eu blandit libero
                    hendrerit. Mauris eu diam eget risus vestibulum tincidunt.
                    Integer volutpat, lorem a lobortis egestas, ligula nisl
                    feugiat tortor, sed condimentum nulla ligula at justo.
                    Praesent non est justo. Sed vitae rutrum est. In et risus id
                    sem egestas iaculis nec vitae erat. Donec sed massa a lacus
                    ultrices feugiat. Mauris scelerisque efficitur est, nec
                    tincidunt neque interdum vitae. Donec convallis venenatis
                    nisl eget ullamcorper. Mauris dapibus risus quis sapien
                    varius, vel convallis justo mattis. Curabitur id condimentum
                    turpis. Fusce vitae dui at nunc condimentum congue.
                  </p>

                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0 p-3">
                  <button
                    class="d-flex align-items-center justify-content-between btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What happens when the chicken comes out of the egg?
                    <span class="fa-stack fa-2x">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <p>
                    ed varius nibh ut neque tincidunt, eu blandit libero
                    hendrerit. Mauris eu diam eget risus vestibulum tincidunt.
                    Integer volutpat, lorem a lobortis egestas, ligula nisl
                    feugiat tortor, sed condimentum nulla ligula at justo.
                    Praesent non est justo. Sed vitae rutrum est. In et risus id
                    sem egestas iaculis nec vitae erat. Donec sed massa a lacus
                    ultrices feugiat. Mauris scelerisque efficitur est, nec
                    tincidunt neque interdum vitae. Donec convallis venenatis
                    nisl eget ullamcorper. Mauris dapibus risus quis sapien
                    varius, vel convallis justo mattis. Curabitur id condimentum
                    turpis. Fusce vitae dui at nunc condimentum congue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
