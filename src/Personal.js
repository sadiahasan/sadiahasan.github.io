import React from 'react';
import './Personal.css'

class Personal extends React.Component {

   render() {
      return (
         <div className='box1'>
                        <div className="box">
               <h3> About Me</h3>
               <div className="row">
                  <div> 
                     <h3>Name: </h3>
                     <h3>Location: </h3>

                  </div>
                  <div> 
                     <h4>Sadia Hasan</h4>
                     <h4>NYC</h4>
                  </div>
               </div>

            </div>

            <div className="box">
               <h3> About Me</h3>
               <div className="row">
                  <div> 
                     <h3>Name: </h3>
                     <h3>Location: </h3>

                  </div>
                  <div> 
                     <h4>Sadia Hasan</h4>
                     <h4>NYC</h4>
                  </div>
               </div>
               <div className="blurb">
               Hi! I'm a New York based software developer with experience in many different development technogies in web dev and blockchain
               </div>
            </div>



            
                              

         </div>
      );
   }
}
export default Personal;