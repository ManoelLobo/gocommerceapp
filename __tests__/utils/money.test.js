import { brl } from 'utils/money';

describe('Testing money format utils', () => {
  it('formats only cents (< 10)', () => {
    expect(brl(0.01)).toEqual('R$0,01');
  });

  it('formats only cents (>= 10)', () => {
    expect(brl(0.99)).toEqual('R$0,99');
  });

  it('formats full value, without cents', () => {
    expect(brl(99)).toEqual('R$99,00');
  });
});
