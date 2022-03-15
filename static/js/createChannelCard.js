import { formatNumberToImperial } from './utils.js';

export function createChannelCard(cardData) {
  const card = document.createElement('div');
  card.classList.add('card__wrapper');

  // create card logo
  const logo = document.createElement('img');
  logo.classList.add('card__logo');

  // create card title
  const title = document.createElement('p');
  title.append(cardData.title);

  // create card stats
  const stats = document.createElement('ul');
  stats.classList.add('card__stats');

  // create card stats elements
  const subs = document.createElement('li');
  const videos = document.createElement('li');
  const views = document.createElement('li');

  subs.textContent = `Subscribers: ${formatNumberToImperial(cardData.statistics.subscriberCount)}`;
  videos.textContent = `Videos: ${formatNumberToImperial(cardData.statistics.videoCount)}`;
  views.textContent = `Views: ${formatNumberToImperial(cardData.statistics.viewCount)}`;

  [(subs, videos, views)].forEach((element) => element.classList.add('cards__statsElement'));

  stats.append(subs, videos, views);

  card.append(logo);
  card.append(title);
  card.append(stats);
  return card;
}
