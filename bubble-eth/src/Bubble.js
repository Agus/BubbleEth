import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import { easeLinear } from 'd3-ease';
import './Bubble.css';

class Bubble extends Component{
  state = {
    x: 0,
    y: 0
  };
  constructor(props){
    super(props);
    this.makeNewPosition = this.makeNewPosition.bind(this);
    this.animateDiv = this.animateDiv.bind(this);
    this.calcSpeed = this.calcSpeed.bind(this);
  }

  componentDidMount(){
    this.animateDiv();
  }

  makeNewPosition(){
    var h = 200;
    var w = 200;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];
  }

  animateDiv(){
    var newq = this.makeNewPosition();
    var transitionSpeed = this.calcSpeed([this.state.x,this.state.y],newq);
    this.setState((prevState)=>({
      speed: transitionSpeed,
      x: newq[0],
      y: newq[1]
    }));
    setTimeout(() => {this.animateDiv()},transitionSpeed);
    // this.animate({ top: newq[0], left: newq[1] }, speed, function(){
    //   this.animateDiv();
    // });
  };

  calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
  }

  render(){
    return(
      <div className="ballSection">
        <Animate
          start={() => ({
            x: 0,
            y: 0,
          })}
          update= {()=> ({
            x: [this.state.x],
            y: [this.state.y],
            timing: { duration: this.state.speed, ease: easeLinear },
          })}
          >
            {(state) => {
              const q = state;
              return (
                <div className="ballWrapper" style={{
                  WebkitTransform: `translate3d(${q.x}px, ${q.y}px, 0)`,
                  transform: `translate3d(${q.x}px, ${q.y}px, 0)`,
                }}
                >
                  <figure className="ball bubble"></figure>
                </div>
              );
            }}
          </Animate>
        </div>
      );
    };

  }

  export default Bubble;
