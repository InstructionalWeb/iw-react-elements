import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import Section from '../src/components/Section';

const sectionData = {
  acf_fc_layout: "one_column",
  background: "Color",
  background_color: "",
  background_gradient: {
    gradient_end: "",
    gradient_start: "",
  },
  background_image: false,
  column_1: "<p>Whether you want to take a few online classes or complete your degree 100% fully online, ACCOnline degree and certificate programs combine an exceptional learning experience with personalized conve…",
  heading: "Why Choose an Online Program at ACC",
  id: "",
  size: ["Wide"]
}

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Section />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('render text', () => {
  const { getByText } = render(<Section>hello world</Section>);
  expect(getByText('hello world')).toBeTruthy();
})


