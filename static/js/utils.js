function clearNumber(number) {
  return number.replace(/,+|\.+| +/g, '');
}

export function formatNumberToImperial(number) {
  return new Intl.NumberFormat('en-GB').format(clearNumber(number));
}
