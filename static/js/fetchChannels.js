export async function fetchChannels() {
  let channels;
  try {
    const data = await fetch('/channels');

    if (data.status !== 200) {
      throw new Error();
    }

    channels = await data.json();
  } catch (error) {
    alert(`There was an error while fetching the data.`);
  }
  return channels;
}
