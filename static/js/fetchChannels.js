export async function fetchChannels() {
  let channels;
  try {
    const data = await fetch('/channels');
    channels = await data.json();
  } catch (error) {
    alert(`There was an error while fetching the data: ${error}`);
  }
  return channels;
}
