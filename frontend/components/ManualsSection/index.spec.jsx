import React from 'react';
import { mount } from 'enzyme';
import ManualsSection from './index';

jest.mock('@shopgate/pwa-common/components/Link');

const noManualUrls = null;
const manualUrls = [{
  label: 'mock',
  url: 'mock',
  type: 'mock',
}];
const mockConfig = { sectionTitle: 'mock' };
describe('<ManualsSection />', () => {
  it('should not render if no manual urls', () => {
    const wrapper = mount((
      <ManualsSection config={mockConfig} manualUrls={noManualUrls} />
    ));
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').exists()).toBe(false);
  });
  it('should render if provided with manual urls', () => {
    const wrapper = mount((
      <ManualsSection config={mockConfig} manualUrls={manualUrls} />
    ));
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
