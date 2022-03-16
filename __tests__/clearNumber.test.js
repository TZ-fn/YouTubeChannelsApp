import { clearNumber } from '../static/js/utils';

describe('Test function clearNumber', () => {
  const expectedNumber = '123123123';

  it('removes dots (.) from the number', () => {
    expect(clearNumber('123.123.123')).toBe(expectedNumber);
    expect(clearNumber('1.2.3.123.123')).toBe(expectedNumber);
    expect(clearNumber('123...123...123')).toBe(expectedNumber);
  });

  it('removes spaces ( ) from the number', () => {
    expect(clearNumber('123 123 123')).toBe(expectedNumber);
    expect(clearNumber(' 123 1 2 3 12 3')).toBe(expectedNumber);
    expect(clearNumber('123 12   3   123')).toBe(expectedNumber);
  });

  it('removes commas (,) from the number', () => {
    expect(clearNumber('123,123,,123')).toBe(expectedNumber);
    expect(clearNumber(',,123,1,23123')).toBe(expectedNumber);
    expect(clearNumber('123,12,,3,,123')).toBe(expectedNumber);
  });
});
