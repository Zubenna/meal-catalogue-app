import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MealComponent from '../../components/MealComponent';

describe('<MealComponent />', () => {
  const  meal = {
    meal: [{ name: 'Christmas Pudding Flapjack', area: 'Britain' }, { name: 'Chicken Handi', area: 'Indian' }],
  };

  it('it renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <MealComponent meal={meal} />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an image', () => {
    const { queryAllByTestId } = render(
      <Router>
        <MealComponent meal={meal} />
      </Router>,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).toBeTruthy();
  });

  it('renders a name', () => {
    const { queryAllByTestId } = render(
      <Router>
       <MealComponent meal={meal} />
      </Router>,
    );
    const name = queryAllByTestId('name');
    expect(name[0]).toBeTruthy();
  });

  it('renders an image corecctly', () => {
    const { queryAllByTestId } = render(
      <Router>
       <MealComponent meal={meal} />
      </Router>,
    );
    const image = queryAllByTestId('img');
    expect(image[0]).toBeFalsy();
  });

  it('renders a name', () => {
    const { queryAllByTestId } = render(
      <Router>
        <MealComponent meal={meal} />
      </Router>,
    );
    const name = queryAllByTestId('name');
    expect(name[0]).not.toBeFalsy();
  });
});