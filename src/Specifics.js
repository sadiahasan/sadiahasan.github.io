import React from 'react';
import './Specifics.css'
import pic from './me.png';
import {web_dev} from './Skills.helper';
import {blockchain} from './Skills.helper';
import {programming} from './Skills.helper';
import {design} from './Skills.helper';



function Specifics() {
      return (
         <div className='box1-specifics'>
            <h1 className="label"> Skills: </h1>
    
    <div className="circle-container">
         <h2 className="label"> &nbsp;Web Dev:&nbsp; </h2>
           <div className='circle'>
              <div className="circle-text">
                {web_dev.map((skill) => {
                    return <div>{skill.name}</div>
                    console.log(skill.name)
                })}
                </div>
           </div>
           </div>


           <div className="circle-container">
         <h2 className="label"> &nbsp;Blockchain:&nbsp; </h2>
           <div className='circle'>
              <div className="circle-text">
                {blockchain.map((skill) => {
                    return <div>{skill.name}</div>
                    console.log(skill.name)
                })}
                </div>
           </div>
           </div>

           <div className="circle-container">
         <h2 className="label"> &nbsp;Programming:&nbsp; </h2>
           <div className='circle'>
              <div className="circle-text">
                {programming.map((skill) => {
                    return <div>{skill.name}</div>
                    console.log(skill.name)
                })}
                </div>
           </div>
           </div>

           <div className="circle-container">
         <h2 className="label"> &nbsp;Design:&nbsp; </h2>
           <div className='circle'>
              <div className="circle-text">
                {design.map((skill) => {
                    return <div>{skill.name}</div>
                    console.log(skill.name)
                })}
                </div>
           </div>
           </div>
           
         </div>
      );
}
export default Specifics;