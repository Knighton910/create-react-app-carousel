var React = require('react');
var Slider = require('react-slick');
import './App.css'

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="img-1"><h3>1</h3></div>
          <div className="img-2"><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
