import React from 'react';
import {shallow} from 'enzyme';
import Counter from './Counter';

describe('Counter Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is counter');
  });

  test('render a button with text of `<Button />`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('<Button />');
  });

  test('render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });

  test('render the click event of increment button and increment counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
  });

  test('render the click event of decrrment button and decrement counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
});
