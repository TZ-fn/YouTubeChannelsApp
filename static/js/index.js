import { fetchChannels } from './fetchChannels.js';
import { createChannelCard } from './createChannelCard.js';

export const channelsListWrapper = document.querySelector('.js-content');

const channels = await fetchChannels();

channels.map((element) => {
  let channelCard = createChannelCard(element);
  channelsListWrapper.append(channelCard);
});
