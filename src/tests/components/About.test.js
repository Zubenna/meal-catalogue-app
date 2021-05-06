import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import About from '../../components/About';

Enzyme.configure({ adapter: new Adapter() });

describe('<About />', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(<About />)
        .toJSON();
   expect(tree).toMatchSnapshot();
    });
  
    test('it contains p element with texts', () => {
      const wrapper = shallow(<About />);
      const para = (
        <p>
          DEZYNO RESTAURANT is the first restaurant located in Eliowhani city county.
        This restaurant was established in 1998. We are specialist in serving delicious,
        healthy and organic food. We care so much for your health.
        That is why our dieticians work so hard to ensure that you
        eat healthy meals in our restaurant. Our management ensures
        that quality is maintained always Our staff are well taken care
        of to ensure that they serve you well.
        </p>
      );
      expect(wrapper.containsMatchingElement(para)).toBe(true);
    });
  });
