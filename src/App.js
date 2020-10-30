
import React, {Component} from 'react';
import logo from './logo.svg';
// import logo from './assets/pam.svg';
import {ReactComponent as ReactLogo} from './assets/folder.svg';
import folder from './assets/folder.svg';
import  signature from './assets/sign.svg';
import discord from './assets/discord.svg';
import image from './assets/image.svg';
// import pam from './assets/pam.svg';
import pam from './assets/pamfit.png';
import twit from './assets/tweet.svg';

import './App.css';
import envelopIcon from "./assets/mail.svg"
import useImage from 'use-image';
// import siteTitle from "./assets/IOF.svg"
import {ReactComponent as Signature} from './assets/sign.svg';
import {ReactComponent as Discord} from './assets/discord.svg';
import {ReactComponent as Folder} from './assets/folder.svg';

import Konva, { Stage, Layer, Group, Text, Circle, Image  as KonvaImage} from 'react-konva';
import CanvasDraw from "react-canvas-draw";
import images from "./portfolio"
const colors = {
  plum: "#c52545",
  iof: "#3b22d5",
  peapl: "#ffbbba",
  pulp: "#fdc556"
}
const checkInSize = (x1, x2) => (window.innerWidth >= x1 && window.innerWidth <= x2)

let pheight = 560, pwidth = 610;
if(checkInSize(790, 810)){
  pheight = 400;
  pwidth= 450
}
const width = 1000, height = pheight;

const PamImage = () => {
  var clientWidth = document.getElementById('world').clientWidth;
var clientHeight = document.getElementById('world').clientHeight;

  let w = (clientWidth / 2) - 305;
  // const [image] = useImage('https://konvajs.org/assets/lion.png');
  const [image] = useImage(pam);
  let pheight = 560, pwidth = 610;
  if(checkInSize(790, 810)){
    pheight = clientHeight;
    pwidth= 328;
  }
  return <KonvaImage x={w-90} y={40}  height={pheight}  width={pwidth}  image={image} />;
};

const Tweet = () => {
  var clientWidth = document.getElementById('world').clientWidth;
  let w = (clientWidth / 2) - 305;
  // const [image] = useImage('https://konvajs.org/assets/lion.png');
  const [image] = useImage(twit);
  return <KonvaImage x={-40} y={-50}  height={200}  width={350}  image={image} />;
};
  
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      image: null,
      img: null,
      width: 0,
      showMobileMenu: false
    }
  }

  componentDidMount(){
    var clientWidth = document.getElementById('world').clientWidth;
    this.setState({width: clientWidth})
  }
  onMail(e){
    e.preventDefault();
    var copyText = document.getElementById("mailInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  }
  render() {
    const port = Array.apply(null, Array(15)).map(function (x, i) { return i; })
    let pamW = this.state.width;
    let decalW = (pamW/2) - 330;
    let patchSize = 20;
    let showmobileClass = this.state.showMobileMenu ? "" : "mobilemenu-close"
    return (
      <div className="App">
        <div className="mobilepam-menu" onClick={()=>this.setState({showMobileMenu: true})}>
          <img src={pam} className="" alt="logo" />
        </div>
        <div id="mobilemenu"className={showmobileClass} >
          <div id="menu-container" >
            <div className="mobile-esume-wrapper" >
              <a><img src={discord} className="m-discord-icon" alt="logo" /> </a>
              <div className="resume-content">
                <div><img src={folder} className="folder-icon" alt="logo" /></div>
              </div>
            </div>
            <div id="mobile-services" >
              <div className="service" >
                <div className="name" > PLUM </div>
                <div className="circle plum" ></div> 

              </div>
              <div className="service" >
                <div className="name" > PEAPL </div>
                <div className="circle peapl" ></div> 
              </div>
              <div className="service" >
                <div className="name" > INTERNET OF FRUITS </div>
                <div className="circle iof" ></div> 

              </div>
              <div className="service" >
                <div className="name" > PULP </div>
                <div className="circle pulp" ></div> 

              </div>
              <div className="service" >
                 <div className="name" > PAMPLMUS </div>
                 <div className="circle pamplmus" ></div>

              </div>
              <ul className="m-sn">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">Vero</a></li>
              </ul>
              <div className="close-btn" onClick={()=>this.setState({showMobileMenu: false})}>
                CLOSE
              </div>
            </div>

          </div>

        </div>
        <header className="app-header">


        <div className="mobilepam">
              <img src={pam} className="" alt="logo" />
            </div>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <img src={folder} className="App-logo" alt="logo" /> */}
          {/* <ReactLogo fill="red"/> */}
          <div className="head-wrapper">
            <div className="social-links">
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">Vero</a></li>
              </ul>
            </div>
            <div className="content" >
              <div className="site-title">
                <h1>the internet of fruits</h1>
                {/* <img src={siteTitle} className="siteTitleSvg" alt="logo" /> */}
                {/* <SiteTitle /> */}
              </div>
              <div className="head-content">
                <div className="topOne">
                  Image available soon
                </div>
                <div >
                  <div className="bio" >
                    <div>Born in Dakar in 1994, Pamplumus is an internet artist and entrepreneur. Growing up in Africa is often paired with being creative and considering his experience, it happens to be undoubtedly true.</div> 
                    <div>Pam started drawing portraits of his family members when he was 8 and he never stopped since. Creating is not a passion for Pam, it is the reason why he breathes. To draw is indeed the only way he knows how to live, to grow and to communicate.</div> 
                  </div>
                  <a href="mailto:yopample@gmail.com" onClick={this.onMail.bind(this)} className="mail-link" target="_blank" >
                    <img src={envelopIcon} className="mail-logo" alt="logo" /> <strong>yopample[at]gmail.com</strong>
                    <input type="type" id="mailInput" value="yopample@gmail.com" />
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          <div className="content-wrapper">
            <div className="signatures" >
               <img src={signature} className="sign-icon" alt="logo" />
            </div>  
          
            <div className="resume-wrapper" >
              <a><img src={discord} className="discord-icon" alt="logo" /> </a>
              <div className="resume-content">
                <div><img src={folder} className="folder-icon" alt="logo" /></div>
                <div>
                  <div className="resume-title" > my resume</div>
                  <div className="resume-list">
                    <div>NELAM</div>
                    <div>GOOGLE</div>
                    <div>CHANEL</div>
                    <div>THE CAMP</div>
                    <div>...</div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="world" id="world">
              <Stage width={this.state.width} height={height}>
                <Layer>
                  <PamImage />

                  <Group x={decalW - 50} y={350} 
                    onClick={()=>{
                      let url = "https://www.instagram.com/plumlydone/"
                      var win = window.open(url, '_blank');
                      win.focus();
                    }}
                    onMouseEnter={e => {
                      // style stage container:
                      const container = e.target.getStage().container();
                      container.style.cursor = "pointer";
                    }}
                    onMouseLeave={e => {
                      const container = e.target.getStage().container();
                      container.style.cursor = "default";
                    }}
                  >
                    <Group x={-100}
                      onClick={()=>{
                        let url = "https://www.instagram.com/plumlydone/"
                        var win = window.open(url, '_blank');
                        win.focus();
                      }}
                      onMouseEnter={e => {
                        // style stage container:
                        const container = e.target.getStage().container();
                        container.style.cursor = "pointer";
                      }}
                      onMouseLeave={e => {
                        const container = e.target.getStage().container();
                        container.style.cursor = "default";
                      }}
                    >
                      <Text text="Services" y={-20} fontSize={13} fontFamily="RobotoMono-Light"/>
                      <Text text="PLUM" x={10}  fontFamily="IOF-Bold" fontSize={20}/>
                    </Group>
                    <Circle   radius={patchSize} fill={colors.plum} />
                  </Group>

                  {/* IOF */}
                  <Group x={decalW + 45} y={135}
                      onClick={()=>{
                        let url = "https://www.instagram.com/internetxfruits/"
                        var win = window.open(url, '_blank');
                        win.focus();
                      }}
                      onMouseEnter={e => {
                        // style stage container:
                        const container = e.target.getStage().container();
                        container.style.cursor = "pointer";
                      }}
                      onMouseLeave={e => {
                        const container = e.target.getStage().container();
                        container.style.cursor = "default";
                      }}
                  >
                    <Circle   radius={patchSize} fill={colors.iof} />
                    <Group >
                       <Text text="merch" x={-80} y={-20} fontSize={13} fontFamily="RobotoMono-Light"/>
                      <Text text="INTERNET OF FRUITS" x={-230}  fontFamily="IOF-Bold" fontSize={20}/>
                    </Group>
                  </Group>

                  {/* TWEET */}
                  <Group x={decalW +560} y={150} 
                      onMouseEnter={e => {
                        // style stage container:
                        const container = e.target.getStage().container();
                        container.style.cursor = "pointer";
                      }}
                      onMouseLeave={e => {
                        const container = e.target.getStage().container();
                        container.style.cursor = "default";
                      }}
                  >
                      <Tweet/>

                    {/* <Circle  radius={patchSize} fill="transparent" strokeWidth={1} stroke="#000" />
                    <Group x={40} y={-20} >
                      <Text text="Pamplemus"  fontFamily="IOF-Bold" fontSize={20}/>
                      <Text text="@pamplemus - 1min" y={20} fontSize={13} fontFamily="RobotoMono-Light"/>
                    </Group> */}
                  </Group>
                  {/* PULP */}
                  <Group x={decalW +490} y={430}
                      onClick={()=>{
                        let url = "https://www.instagram.com/pulp.lol/"
                        var win = window.open(url, '_blank');
                        win.focus();
                      }}
                      onMouseEnter={e => {
                        // style stage container:
                        const container = e.target.getStage().container();
                        container.style.cursor = "pointer";
                      }}
                      onMouseLeave={e => {
                        const container = e.target.getStage().container();
                        container.style.cursor = "default";
                      }}
                  >
                    <Circle   radius={patchSize} fill={colors.pulp}/>
                    <Group x={40}>
                      <Text text="Fruit jokes app" y={-20} fontSize={13} fontFamily="RobotoMono-Light"/>
                      <Text text="PULP"  fontFamily="IOF-Bold" fontSize={20}/>
                    </Group>
                  </Group>

                  {/* PEAPL */}
                  <Group x={decalW +340} y={60} 
                      onClick={()=>{
                        let url = "https://www.instagram.com/peapl.now/"
                        var win = window.open(url, '_blank');
                        win.focus();
                      }}
                      onMouseEnter={e => {
                        // style stage container:
                        const container = e.target.getStage().container();
                        container.style.cursor = "pointer";
                        var shape = e.target;
                        shape.scaleX(1);
                        shape.scaleY(1);

                      }}
                      onMouseLeave={e => {
                        const container = e.target.getStage().container();
                        container.style.cursor = "default";
                        var shape = e.target;
                        shape.scaleX(0);
                        shape.scaleY(0);
                      }}
                  >
                    <Circle   radius={patchSize} fill={colors.peapl} />
                    <Group x={40}>
                       <Text text="Digital avatars app" y={-20} fontSize={15} fontFamily="RobotoMono-Light"/>
                      <Text text="PEAPL"  fontFamily="IOF-Bold" fontSize={20}/>
                    </Group>
                    
                  </Group>
                </Layer>
              </Stage>
            </div>
            {/* <div class="globe-icon"></div> */}
          </div>

        </header>
        <section className="portfolio-container">
          {
            images.map(item => {
              var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
              return(
                
                <div className="portfolio-item" style={{backgroundColor: randomColor}} >
                  <img src={require(`${item}`).default} />
                </div>
              )
            })
          }
        </section>
      </div>
    );
  }
}


