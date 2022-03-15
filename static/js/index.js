import { fetchChannels } from './fetchChannels.js';
import { createChannelCard } from './createChannelCard.js';

const documentBody = document.querySelector('.wrapper');
const reverseColorsButton = document.querySelector('#reverse-colors-button');
reverseColorsButton.addEventListener('click', () => documentBody.classList.toggle('inverted'));

const channelsListWrapper = document.querySelector('.js-content');
const channels = await fetchChannels();

channels.map((element) => {
  let channelCard = createChannelCard(element);
  channelsListWrapper.append(channelCard);
});
