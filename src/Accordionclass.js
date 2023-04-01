import React, { Component } from 'react';

class Accordionclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive:false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

//   handleClick() {
//     const { isActive } = this.state;
//     this.setState({
//       isActive: { active: !isActive.active, content: this.props.content }
//     });
//   }

  render() {
    const { title } = this.props;
    const { isActive } = this.state;
    const{content} =this.props;
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={this.setState({isActive:!isActive})}>
          <div>{title}</div>
          <div> {isActive ? '-' : '+'} </div>
        </div>
        {isActive && (
          <div className="accordion-content">{content}</div>
        )}
      </div>
    );
  }
}

export default Accordionclass;
