import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bhive from './bhive.js';
import Product from './product.js';
import 'bootstrap/dist/css/bootstrap.css';
import NewCenter from './newcenter.js'
import  Review from './review.js'
import  List from './list.js'
import  Public from './public.js'

function App() {
  return (
    <div>
   <div>
     <Bhive/>
     <br></br>
     <Product/>
     <br></br>
     <NewCenter/>
     <br></br>
     <Review/>
     <br></br>
     <Public/>
     <br></br>
     <List/>
     
   </div>
   
   </div>
  );
}

export default App;
