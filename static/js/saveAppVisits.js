export function saveAppVisits() {
  let visitsCount, lastVisitDate;

  if (localStorage.getItem('visits-count')) {
    visitsCount = localStorage.getItem('visits-count');
    visitsCount = Number(visitsCount) + 1;
  } else {
    visitsCount = 1;
  }

  lastVisitDate = new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date());

  localStorage.setItem('visits-count', visitsCount);
  localStorage.setItem('last-visit-date', lastVisitDate);
}
