import React from 'react';
// import './Personal.css'
import pic from './me.png';

class Personal extends React.Component {

   render() {
      return (
         <div className='box1'>
            <div className="profile-box">
                 <img className="image" src={pic} />
                 <div className="first-box">

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
            </div>
            <div className="box">
               <div className="blurb">
               <h2>Hi! I'm a New York based software developer with experience in many different development technogies in web dev and blockchain
               </h2>
               </div>
            </div>



            
                              

         </div>
      );
   }
}
export default Personal;