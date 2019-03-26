import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import mockRenderOptions from '@shopgate/pwa-common/helpers/mocks/mockRenderOptions';
import { mockedStateWithAll } from '@shopgate/pwa-common-commerce/reviews/mock';
import { UnwrappedManualsSection as ManualsSection } from './index';

const mockedStore = configureStore();
jest.mock('../../components/ManualsSection', () => () => (<div>ManualsSection</div>));

/**
 * Creates component
 * @return {ReactWrapper}
 */
const createComponent = () => mount(
  <Provider store={mockedStore(mockedStateWithAll)}>
    <ManualsSection id="foo" />
  </Provider>,
  mockRenderOptions
);

describe('ManualsSection', () => {
  it('should render', () => {
    const component = createComponent();
    expect(component).toMatchSnapshot();
  });
});
