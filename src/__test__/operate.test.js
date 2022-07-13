import operate from '../logic/operate';

describe('Operation tests', () => {
  const num = '3';

  it('Plus Operation', () => {
    expect(operate(num, num, '+')).toEqual('6');
    expect(operate(8, 6, '+')).toEqual('14');
  });
  it('minus Operation', () => {
    expect(operate(num, num, '-')).toEqual('0');
    expect(operate(10, 7, '-')).toEqual('3');
  });
  it('multiply Operation', () => {
    expect(operate(num, num, 'x')).toEqual('9');
    expect(operate(8, 3, 'x')).toEqual('24');
  });
  it('division Operation', () => {
    expect(operate(num, num, '÷')).toEqual('1');
    expect(operate(6, num, '÷')).toEqual('2');
  });
  it('Modulo Operation ', () => {
    expect(operate(num, num, '%')).toEqual('0');
    expect(operate(4, num, '%')).toEqual('1');
  });
  it('division by zero Operation', () => {
    expect(operate(num, '0', '÷')).toEqual("Can't divide by 0.");
  });
});
