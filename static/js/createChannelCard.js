import { formatNumberToImperial } from './utils.js';

export function createChannelCard(cardData) {
  const card = document.createElement('div');
  card.classList.add('card__wrapper');

  // create a link to the channel
  const channelLink = document.createElement('a');
  channelLink.classList.add('card__channel-link');
  channelLink.setAttribute('href', cardData.customUrl);

  // create card logo
  const logo = document.createElement('img');
  logo.classList.add('card__logo');
  logo.setAttribute('alt', '');
  logo.setAttribute('src', cardData.thumbnails.high.url);

  // create card title
  const title = document.createElement('p');
  title.classList.add('card__title');
  title.append(cardData.title);

  // create card stats
  const stats = document.createElement('ul');
  stats.classList.add('card__stats');

  // create card stats elements
  const subs = document.createElement('li');
  const videos = document.createElement('li');
  const views = document.createElement('li');
  [subs, videos, views].forEach((element) => element.classList.add('cards__statsElement'));

  subs.textContent = `Subscribers: `;
  videos.textContent = `Videos: `;
  views.textContent = `Views: `;

  // create spans for the stats numbers
  const subsNumber = document.createElement('span');
  const videosNumber = document.createElement('span');
  const viewsNumber = document.createElement('span');
  [subsNumber, videosNumber, viewsNumber].forEach((element) =>
    element.classList.add('cards__statsNumber'),
  );

  // add data to the span elements
  subsNumber.textContent = formatNumberToImperial(cardData.statistics.subscriberCount);
  videosNumber.textContent = formatNumberToImperial(cardData.statistics.videoCount);
  viewsNumber.textContent = formatNumberToImperial(cardData.statistics.viewCount);

  // add spans to the li elements
  subs.append(subsNumber);
  videos.append(videosNumber);
  views.append(viewsNumber);

  stats.append(subs, videos, views);
  channelLink.append(logo, title, stats);
  card.append(channelLink);

  return card;
}
