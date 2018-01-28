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
    this.data = this.props.location.state;
    this.restaurantName = this.data.name;
  }

  componentDidMount() {
    const data = <Detail {...this.data} />;
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