import { createChannelCard } from '../static/js/createChannelCard';
import { mockedChannelData } from './mocked-data/mockedChannelData';

describe('Test function createChannelCard', () => {
  it('creates a channel card properly', () => {
    expect(createChannelCard(mockedChannelData)).not.toBeEmptyDOMElement();
  });

  it('creates the link element properly', () => {
    const anchorElement = createChannelCard(mockedChannelData).querySelector('.card__channel-link');
    expect(anchorElement).not.toBeEmptyDOMElement();
    expect(anchorElement).toHaveAttribute('href', mockedChannelData.customUrl);
  });

  it('creates the card logo element properly', () => {
    const logoElement = createChannelCard(mockedChannelData).querySelector('.card__logo');
    expect(logoElement).toHaveAttribute('src', mockedChannelData.thumbnails.high.url);
    expect(logoElement).toHaveAttribute('alt', '');
  });

  it('creates the stats container properly', () => {
    const statsContainer = createChannelCard(mockedChannelData).querySelector('.card__stats');
    expect(statsContainer).not.toBeEmptyDOMElement();
    // it should have length 3, as 3 stats numbers are created
    expect(statsContainer.childNodes).toHaveLength(3);
  });

  it('creates the stats elements properly', () => {
    const statsNumbers = [
      ...createChannelCard(mockedChannelData).querySelectorAll('.cards__statsElement'),
    ];
    // it should have length 3, as 3 stats numbers are created
    expect(statsNumbers).toHaveLength(3);
    // all of the statNumbers should have a text node and a span element inside
    statsNumbers.forEach((statNumber) => {
      expect(statNumber.childNodes).toHaveLength(2);
    });
  });
});
