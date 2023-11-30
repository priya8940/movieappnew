import React from "react";
import "./MovieCart.css";

class MovieCart extends React.Component{
  constructor(){
    //state 
    super();
    this.state={
      title:"The Avengers",
      plot:"THE MOVIE IS ABOUT SUPERNATURAL POWERS",
      rating:8.9,
      price:199,
      stars:0
    }
  }
  addStars=()=>{
      // this.state.stars+=0.5;
      //form 1
      // this.setState({
      //         stars:this.state.stars+=0.5 
      // });

      //form 2
      this.setState((prevState)=>{
        return{
          stars:prevState.stars+=0.5
        }
      })
  }
    render(){
      const{title,plot,price,rating,stars}=this.state;
      return(
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img alt="poster" src="https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"/>
            </div>
            <div className="right">
            <div className="title">{this.state.title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price} </div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
              <img className="star-btn" alt="decrease" 
                   src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>
                  <img alt="star" 
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                   className="stars" />
                          <img className="star-btn" alt="increase" 
                  src="https://cdn-icons-png.flaticon.com/128/748/748113.png" 
                     onClick={this.addStars} />
                  <span  className="star-count">
                      {stars}
                   </span>
                   
                   </div>
                </div>
              <button className="fev-button">fevourate</button>
              <button className="cart-button">Add to cart</button>
            </div>
            


          </div>

        </div>
      )
    }
}
export default MovieCart;