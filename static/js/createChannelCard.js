export function createChannelCard(cardData) {
  const card = document.createElement('div');
  card.classList += 'card-wrapper';

  // create card logo
  const logo = document.createElement('img');
  logo.classList += 'card__logo';

  // create card title
  const title = document.createElement('p');
  title.append(cardData.title);

  // create card stats
  const stats = document.createElement('ul');
  stats.classList += 'card__stats';

  // create card stats elements
  const subs = document.createElement('li');
  const videos = document.createElement('li');
  const views = document.createElement('li');

  [subs, videos, views].forEach((element) => (element.classList += 'cards__statsElement'));

  stats.append(subs, videos, views);

  card.append(logo);
  card.append(title);
  card.append(stats);
  return card;
}
