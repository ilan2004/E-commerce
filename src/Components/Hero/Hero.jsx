import React, { useState } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import Winter from './scarves-6678139.jpg';
import Kids from './booties-2047596.jpg';
import Latest from './cabinet-1853504.jpg';
import Shirt from './shirts-591750.jpg'

const Hero = () => {
    const [menu,setMenu] = useState("grocery")
    return (
        <div classname= 'container-2'>
            <div className='grid-container'>

                <div className='grid-item-1 ' onClick={()=> {setMenu("groceries")}} >
                <Link style={{textDecoration:'none'}} to='/Winter'>
                <div id="img1" class="lil-overlay"></div>
                <img src={Winter} className='ds'/>
                <div class="Appear">
                        <h2>Winter Collections</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti porro quis.</p>
                    </div>
                </Link>
                    
                </div>

                <div className='grid-item-2'onClick={()=> {setMenu("groceries")}} >
                <Link style={{textDecoration:'none'}} to='/Latest'>
                <div id="img1" class="lil-overlay"></div>
                <img src={Latest} className='ds'/>
                
                    <div class="Appear">
                        <h2>Latest Collections</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti porro quis.</p>
                    </div>
                </Link>
                    
                </div>

                <div className='grid-item-3'onClick={()=> {setMenu("groceries")}} >
                <Link style={{textDecoration:'none'}} to='/Kids'>
                <div id="img1" class="lil-overlay"></div>
                <img src={Kids} className='ds'/>
                
                    <div class="Appear">
                        <h2>Kids New</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti porro quis.</p>
                    </div>
                </Link>
                    
                </div>
                <div className='grid-item-4'onClick={()=> {setMenu("groceries")}} >
                <Link style={{textDecoration:'none'}} to='/Men'>
                <div id="img1" class="lil-overlay"></div>
                <img src={Shirt} className='ds'/>
                {menu==="groceries"?<hr/>:<></>}
                    <div class="Appear">
                        <h2>Men shirts</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti porro quis.</p>
                    </div>
                </Link>
                    
                </div>
            </div>
        </div>
    )
}
export default Hero;