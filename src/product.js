import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Product extends React.Component{
    render(){
        return (
            
                
        <div class="card-main"> 
            <div class="card-group">
       <div class="card mr-5">
    
    <div class="card-body">
      <p class="card-text1">Product Offered</p>
    </div>
    
  </div>
  <div class="card mr-5  ">
    <div class="card-body1">
      <h1 class="card-title"> <i class="material-icons thumb">
thumbs_up_down
</i>Coworking</h1>

    <div></div>
      <p class="card-text2">Rent Private Cabins or Shared Desks at one of our Productive Coworking Spaces</p>
      <br></br>
      <br></br>
      <button type="button" class="btn3"> MoreDetails</button>

    </div>
    
  </div>
  <div class="card mr-5">
    <div class="card-body1">
      <h1 class="card-title"><i class="material-icons location">
location_city
</i> Coworking Franchise</h1>

      <p class="card-text2">Take part in the Coworking business opportunity by owning our Franchise.</p>
      <button type="button" class="btn3"> MoreDetails</button>

    </div>
    
  </div>
  <div class="card mr-5">
    <div class="card-body1">
      <h1 class="card-title"> <i class="material-icons thumb">message</i>Free Consultation</h1>
      <p class="card-text2">Find right office space solution for your company through our expert advise</p>
      <button type="button" class="btn3"> MoreDetails</button>
    </div>
  </div>
</div>
 </div>
     
    
   
        );
    }
}

export default Product;