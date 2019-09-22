import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Bhive extends React.Component{
    render(){
        return (
            <div>
           <div><img src="https://bhiveworkspace.com/wp-content/uploads/2019/07/home-bnr3.jpg"></img>
           <img src="https://bhiveworkspace.com/wp-content/uploads/2019/06/gg_1-1.png" class="bhivelogo"></img>
           <div data-spy="scroll" data-target="#navbar-example3" data-offset="0"></div>
           </div>
           <div class="navbar">
           <nav class="navbar navbar-expand-lg navbar-light text-dark">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#"> <img class="img" src="https://media1.tenor.com/images/e73c43f5694fe4db55afebe09ae702bb/tenor.gif?itemid=12391950"></img> +91 8768747456 <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">REQUEST CALLBACK</a>
                <a class="nav-item nav-link" href="#">Coworking</a>
                <a class="nav-item nav-link " href="#">Location</a>
                <a class="nav-item nav-link " href="#">Pricing</a>
                <a class="nav-item nav-link " href="#">Franchise</a>
                <a class="nav-item nav-link " href="#">About Us</a>
                <a class="nav-item nav-link " href="#">Contact Us <i className="material-icons"></i></a>
                
                </div>
            </div>
            </nav>
            </div>
            <div class="behive-text"> Your Next <e class="behive-text1"> Office</e></div>
            <div class="behive-text2"> 
                <div class="flex"> 
                    <p >Flexible Office </p>
                    <br></br>
                   <span class="dot">.</span>
                    <p >Any Budget </p>
                    <span class="dot">.</span>
                    <p >Any Location </p>
                    <span class="dot">.</span>
                    <p >Greate Hospitality </p>
                </div>
            </div>
            <div >
            <button type="button"class="btn1">Work CoWorking Space</button>
            <button type="button" class="btn2">Own CoWorking Frnchise</button>
            </div>
       </div>
     
    
   
        );
    }
}

export default Bhive;