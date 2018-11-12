import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter, Route } from 'react-router-dom'

import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


// describe('<App />', () => {
//
//   it('renders a static text', () => {
//
//     const wrapper = shallow(
//       <MemoryRouter initialEntries={['/']} initialIndex={0}>
//         <Route path="/" render={() => <App />} />
//       </MemoryRouter>
//     );
//     console.log(wrapper.find(App).html());
//   });
// });


describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<div className="wrapper"></div>)).toBe(true);
  });

  // it('should be selectable by class "foo"', function() {
  //   expect(shallow(<Foo />).is('.foo')).toBe(true);
  // });

  // it('should mount in a full DOM', function() {
  //   expect(mount(<Foo />).find('.foo').length).toBe(1);
  // });

  // it('should render to static HTML', function() {
  //   expect(render(<Foo />).text()).toEqual('Bar');
  // });
});
