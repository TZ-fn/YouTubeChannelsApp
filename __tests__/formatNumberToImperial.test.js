import { formatNumberToImperial } from '../static/js/utils';

describe('Test function formatNumberToImperial', () => {
  const expectedNumber = '123,123,123';

  it('it formats the numbers correctly', () => {
    expect(formatNumberToImperial('123123123')).toBe(expectedNumber);
    expect(formatNumberToImperial('1.2.3.123.123')).toBe(expectedNumber);
    expect(formatNumberToImperial('123...123.,1 23')).toBe(expectedNumber);
    expect(formatNumberToImperial('1 23... ,,123...1  23')).toBe(expectedNumber);
  });
});
