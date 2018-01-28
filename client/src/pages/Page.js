import React from 'react'; 
import { withRouter, Link } from 'react-router-dom';

class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.name = this.props.name;
  }
  
  render() {
    return (
      <div className="page__background">
        <div className={`logo-container ${this.name}-color`}></div>
        <div className={`${this.name}-color`}>{this.name}</div>
        <div className={`${this.name}-color back-container`}>
          <Link to="/">BACK</Link>
        </div>
        <div className={`${this.name}-color`}>
          {this.props.content}
        </div>
      </div>
    );
  }
}



export default withRouter(Page);