import { fetchChannels } from './fetchChannels.js';
import { createChannelCard } from './createChannelCard.js';

const documentBody = document.querySelector('.wrapper');
const reverseColorsButton = document.querySelector('#reverse-colors-button');
reverseColorsButton.addEventListener('click', () => documentBody.classList.toggle('inverted'));

function handleCardClick(e) {
  console.log((e.currentTarget.querySelector('.card__channel-link').href += `?${Date.now()}`));
}

const channelsListWrapper = document.querySelector('.js-content');
const channels = await fetchChannels();

channels.map((element) => {
  let channelCard = createChannelCard(element);
  channelsListWrapper.append(channelCard);
});

[...channelsListWrapper.childNodes].forEach((child) =>
  child.addEventListener('click', (e) => handleCardClick(e)),
);
