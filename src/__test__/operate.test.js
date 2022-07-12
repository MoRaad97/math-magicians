import operate from "../logic/operate";

describe('Operation tests', () => {
  const num = '3'

  it('Plus Operation', ()=> {
    expect(operate(num,num,'+')).toEqual('6')
  })
  it('minus Operation', ()=> {
    expect(operate(num,num,'-')).toEqual('0')
  })
  it('multiply Operation', ()=> {
    expect(operate(num,num,'x')).toEqual('9')
  })
  it('division Operation', ()=> {
    expect(operate(num,num,'÷')).toEqual('1')
  })
  it('Modulo Operation ', ()=> {
    expect(operate(num,num,'%')).toEqual('0')
  })
  it('division by zero Operation', ()=> {
    expect(operate(num,'0','÷')).toEqual("Can't divide by 0.")
  })
})