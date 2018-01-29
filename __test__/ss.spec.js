import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { RestaurantList } from '../client/components';

const wrapper = shallow(<RestaurantList restaurants={{ RestaurantList: [{ restaurant: { name: 'test' } }] }} />);

it('renders', () => {
  const wrapper = shallow(<RestaurantList />);
  expect(wrapper.find('p').text()).toEqual('test');
});
