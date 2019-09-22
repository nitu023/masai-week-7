import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Review extends React.Component{
    render(){
        return (
            
         <div>
             
             <div class="Review "> Customer<br></br>Reviews
             <p class="newcenter1"> Here’s what our Customers <br></br>who have worked
              in our office spaces have <br></br>to say about their
               experience with BHIVE.</p>
             </div>
             <div className="img6">
             <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
           <div class="carousel-item active">
          <img class="d-block w-100" src="https://fadmagazine.com/wp-content/uploads/feedback.jpg" alt="First slide"></img>
          </div>
          <div class="carousel-item">
           <img class="d-block w-100 l-100" src="https://feedback.spab.ac.in/imagesStudents%20feedback.jp"alt="Third slide"></img>
        </div>
         <div class="carousel-item">
          <img class="d-block w-100" src="https://fadmagazine.com/wp-content/uploads/feedback.jpg" alt="Third slide"></img>
       </div>
      </div>
       <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="sr-only">Previous</span>
     </a>
       <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
     </a>
       </div>
    </div>
       </div>
           

       
        );
    }
}

export default Review;