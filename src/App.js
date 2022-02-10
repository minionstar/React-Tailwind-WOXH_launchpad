import logo from './logo.svg';
import wox from './assets/images/wox_md.png'
import problems from './assets/images/problems.png'
import './App.css';
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Chart from './components/ChartComponent'
import { PieChart } from 'react-minimal-pie-chart';
import Avatar from './assets/images/louis.png'
import Emman from './assets/images/emman.png'

function App() {
  return (
    <div className="bg-[url('./assets/images/background.png')]">
      <Header/>
      <div id='main' className='my-20'>
        <div className="grid grid-cols-2 gap-15"  id="home">
          <div className='text-white py-28 px-20' >
            <p className='text-5xl py-3'>What is Woxh?</p>
            <p className='text-lg text-left'>Woxh is a game streaming platform based on the blockchain.
            <br /> It uses the peer-to-peer
              protocol similar to IPFS and Bittorrent File Sharing (BTFS) utilized by Dlive.
              Woxh aims to use the blockchain to provide a secure, decentralized and flexible
              platform upon which a variety of games can be streamed</p>
          </div>
          <div className='text-white py-28 px-40 flex justify-center'>
            <div>
              <img className='border-dashed border-2 border-indigo-600 px-5 py-5' src={wox} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-15">
          
          <div className='text-white py-28 px-40 flex justify-center'>
            <div>
              <img className='border-double border-4 border-indigo-600 px-5 py-5' src={problems} />
            </div>
          </div>
          <div className='text-white py-28 pr-20 pl-10'>
            <p className='text-5xl py-3'>Problems with Traditional Game Streaming Platforms</p>
            <p>
            Game streaming requires significant infrastructure for the services to work as
            intended, including data centers and server farms for running the games, and highbandwidth internet connections with low latency for delivering the streams to users.
            The network infrastructure required to make game streaming feasible was, for many
            years, not available in most geographic areas, or unavailable to consumer markets.
            Due to their dependency on high-quality streaming video, the ability to use a service
            regularly may also be limited by data caps enforced by some internet service provider
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-15">
          <div className='text-white py-28 px-20' >
            <p className='text-5xl py-3'>How does WOXH solve the problem?</p>
            <p className='text-lg text-left'>• Lack of data centers and servers in some geographical area<br />
              • Need for high-bandwidth internet connection <br />
              • Insufficient data caps <br />
              • Game ownership <br />
              • Distributed denial of service (DDOS) <br />
            </p>
          </div>
          <div className='text-white py-28 px-40 flex justify-center'>
            <div>
              <img className='border-dashed border-2 border-indigo-600 px-5 py-5' src={wox} />
            </div>
          </div>
        </div>
        <div id='roadmap' className=''>
          <p className='text-center text-5xl text-green-600 font-bold my-20'>RoadMap</p>
          <div
            className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            <div className="flex flex-row-reverse md:contents">
              <div
                className="w-96 bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Q1 2022</h3>
                  <p>• Launch of Website</p>
                  <p>• Launch of Socials</p>
                  <p className="mx-3">(Telegram, Discord, Twitter and Instagram)</p>
                  <p>• Techrate Smart Contract Audit</p>
                  <p>• Private Presale</p>
                  <p>• Public Presale</p>
                  <p>• Liquidity</p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="w-96 bg-green-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Q2 2022</h3>
                  <p>• CertiK Smart Contract Audit</p>
                  <p>• Listing on DEXes</p>
                  <p>• Listing on Coinmarketcap</p>
                  <p>• Listing on Coingecko</p>
                  <p>• Listing on CEXes</p>
              </div>
            </div>
            <div className="flex flex-row-reverse md:contents">
              <div
                className="w-96 bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Q3 2022</h3>
                  <p>• Marketing</p>
                  <p>• Bridges (Eth, Matic, Sol etc)</p>
                  <p>• Staking</p>
                  <p>• Launch of Woxh</p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            
            
          </div>
        </div>
        <div id="tochnomic" className="my-20">
          <Chart />
        </div>
        <div className='' id='team'>
          <p className='text-center text-5xl text-green-500 font-bold my-20'>OUR TEAM</p>
          <div className="grid grid-cols-3 gap-4 flex items-center">
            <div className="mb-4  flex justify-center">
              <div class="flex justify-center">
                <div class="block rounded-lg shadow-lg max-w-sm text-center border-line border-2 border-gray-100">
                  <div class="p-6">
                    <img src={Avatar} className="max-w-full h-auto rounded-full" alt=""/>
                  </div>
                  <div class="py-3 px-6 border-t border-gray-100 text-white text-2xl">
                    Louis Lee
                    <p className='text-xl text-gray-400'>FrontEnd Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4  flex justify-center">
              <div class="flex justify-center">
                <div class="block rounded-lg shadow-lg max-w-sm text-center border-line border-2 border-gray-100">
                  <div class="p-6">
                    <img src={Emman} className="max-w-full h-auto rounded-full" alt=""/>
                  </div>
                  <div class="py-3 px-6 border-t border-gray-100 text-white text-2xl">
                    Dfemnè Klcinoet
                    <p className='text-xl text-gray-400'>Co-Founder / CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4  flex justify-center">
              <div class="flex justify-center">
                <div class="block rounded-lg shadow-lg max-w-sm text-center border-line border-2 border-gray-100">
                  <div class="p-6">
                    <img src={Avatar} className="max-w-full h-auto rounded-full" alt=""/>
                  </div>
                  <div class="py-3 px-6 border-t border-gray-100 text-white text-2xl">
                    Jackr
                    <p className='text-xl text-gray-400'>Marketer</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>    
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
