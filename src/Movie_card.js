import { Component } from "react";

class MovieCard extends Component {
  // below are event handler functions
  // addStars = () => {
  //   //Form 1 of setState() - increasing the star count by 0.5
  //   if (this.state.star >= 5) {
  //     return;
  //   }
  //   // this is setState use with object
  //   this.setState({
  //     star: this.state.star + 0.5,
  //   });
  // };
  // substractStars = () => {
  //   //Form 1 of setState() - Decreasing the star count by 0.5
  //   if (this.state.star <= 0) {
  //     return;
  //   }
  //   // this.setState({
  //   //   star: this.state.star - 0.5,
  //   // });

  //   // this is setState use with Callback function it takes previus value as paramitter

  //   this.setState((prevState) => {
  //     return { star: this.state.star - 1 };
  //   });
  // };
  // handleClick = () => {
  //   this.setState({
  //     fav: !this.state.fav,
  //   });
  // };
  // handleCart = () => {
  //   this.setState({
  //     isInCart: !this.state.isInCart,
  //   });
  // };

  // rendering the component
  render() {
    const { movies, addStars, subStars, favToggle, cartToggle } = this.props;

    const { title, plot, poster, price, rating, stars, fav, isInCart } =
      this.props.movies;
    // console.log(this.props.movies);
    return (
      <>
        <div className="main">
          <div className="MovieCard">
            <div className="left">
              <img alt="poster" src={poster} width={200} />
            </div>
            <div className="right">
              <div className="top-right">
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price}</div>
              </div>
              <div className="bottom-right">
                <div className="rating">
                  <b>{rating}</b>
                </div>
                <div className="image-div">
                  <img
                    width="7"
                    height="7"
                    src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                    alt="Decrease"
                    onClick={() => subStars(movies)}
                  />
                  &nbsp;
                  <img
                    width="20"
                    height="20"
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    alt="external-five-stars-customer-feedback-flaticons-flat-flat-icons"
                  />
                  &nbsp;
                  <img
                    width="7"
                    height="7"
                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                    alt="external-five-stars-customer-feedback-flaticons-flat-flat-icons"
                    onClick={() => addStars(movies)}
                  />
                  &nbsp;
                  <span className="star-count">{stars}</span>
                </div>

                <div className="right-footer">
                  <button
                    className={fav ? "fav-btn" : "un-fav-btn"}
                    onClick={() => favToggle(movies)}
                  >
                    {fav ? "Favourite" : "Un-Favourite"}
                  </button>
                  &nbsp;
                  <button
                    className={isInCart ? "cart-btn" : "remove-btn"}
                    onClick={() => cartToggle(movies)}
                  >
                    {isInCart ? "Add to cart" : "Remove from cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MovieCard;
