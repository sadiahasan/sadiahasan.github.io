import React from 'react';
import './Info.css';

class Info extends React.Component {

   render() {
      return (
         <div className = "box">
            <h2>about me</h2>
            <div className="infoBox">
                <b>name: </b> Sadia Hasan
                <br/>
                <b>birthday: </b> 07.29
                <br/>
                <b>email: </b> sadiazh729@gmail.com
                <br/>
            </div>
         </div>
      );
   }
}
export default Info;