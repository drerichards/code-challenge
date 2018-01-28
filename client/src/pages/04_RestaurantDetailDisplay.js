import React from 'react';
import Detail from '../components/RestaurantDetail';
import Restaurant from '../components/Restaurant';
import Page from './Page';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
    this.restaurantName = this.props.name;
    this.info = this.props.info;
  }

  componentDidMount() {
    const data = <Detail {...this.info} />;
    this.setState({
      content: data
    });
  }

  render() {
    return(
      <Page name={`${this.restaurantName} DETAILS`} content={this.state.content} />
    )
  }
}

export default DetailPage;