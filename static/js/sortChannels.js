import { clearNumber } from './utils.js';

export function sortChannels(channels, sortBy, isDescendingOrder = true) {
  const sortByMatch = {
    'sort-subscribers': 'subscriberCount',
    'sort-videos': 'videoCount',
    'sort-views': 'viewCount',
  };

  if (!isDescendingOrder) {
    if (sortBy === 'sort-title') {
      return channels.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase(), 'pl'),
      );
    }

    return channels.sort(
      (a, b) =>
        clearNumber(a.statistics[sortByMatch[sortBy]]) -
        clearNumber(b.statistics[sortByMatch[sortBy]]),
    );
  }

  if (sortBy === 'sort-title') {
    return channels.sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase(), 'pl'),
    );
  }

  return channels.sort(
    (a, b) =>
      clearNumber(b.statistics[sortByMatch[sortBy]]) -
      clearNumber(a.statistics[sortByMatch[sortBy]]),
  );
}
