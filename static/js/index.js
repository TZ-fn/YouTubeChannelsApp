import { fetchChannels } from './fetchChannels.js';
import { createChannelCard } from './createChannelCard.js';
import { sortChannels } from './sortChannels.js';
import { saveAppVisits } from './saveAppVisits.js';

const documentBody = document.querySelector('.wrapper');
const channelsListWrapper = document.querySelector('.js-content');
const filterInput = document.querySelector('#filter-input');
const sortOptions = document.querySelector('.sort__options');
const sortRadioButtons = document.querySelectorAll('.choice--radio');
const clearButton = document.querySelector('#clear-button');
const orderButton = document.querySelector('#order-button');
const reverseColorsButton = document.querySelector('#reverse-colors-button');

const channelsData = await fetchChannels();
let sortedChannels = channelsData;
let isDescendingOrder = true;
let sortBy = 'sort-title';

function renderChannelCards() {
  channelsListWrapper.replaceChildren();
  sortedChannels.map((element) => {
    let channelCard = createChannelCard(element);
    channelsListWrapper.append(channelCard);
  });
  [...channelsListWrapper.childNodes].forEach((child) =>
    child.addEventListener('click', (e) => handleCardClick(e)),
  );
}

// event handlers
function handleCardClick(e) {
  e.currentTarget.querySelector('.card__channel-link').href += `?${Date.now()}`;
}

function handleFilterInputChange(e) {
  sortedChannels = channelsData.filter(({ title }) =>
    title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()),
  );
  renderChannelCards();
}

function handleSortOptionsChange(e) {
  sortBy = e.target.id;
  sortedChannels = sortChannels(sortedChannels, sortBy, isDescendingOrder);
  renderChannelCards();
}

async function handleClearButtonClick() {
  [...sortRadioButtons].forEach((radio) => (radio.checked = false));
  filterInput.value = '';
  sortedChannels = await fetchChannels();
  renderChannelCards();
}

function handleOrderButtonClick() {
  if (isDescendingOrder) {
    orderButton.textContent = 'Order: ascending ⬆️';
  }
  if (!isDescendingOrder) {
    orderButton.textContent = 'Order: descending ⬇️';
  }
  isDescendingOrder = !isDescendingOrder;
  sortedChannels = sortChannels(sortedChannels, sortBy, isDescendingOrder);
  renderChannelCards();
}

filterInput.addEventListener('input', (e) => handleFilterInputChange(e));
sortOptions.addEventListener('change', (e) => handleSortOptionsChange(e));
clearButton.addEventListener('click', handleClearButtonClick);
orderButton.addEventListener('click', (e) => handleOrderButtonClick(e));
reverseColorsButton.addEventListener('click', () => documentBody.classList.toggle('inverted'));

// render default cards on the first run
renderChannelCards();
saveAppVisits();

// log the visit stats
console.log(
  ` Visited ${localStorage.getItem('visits-count')} times. Last visit: ${localStorage.getItem(
    'last-visit-date',
  )}`,
);
