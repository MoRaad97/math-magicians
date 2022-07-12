import calculate from "./calculate";

describe("calculate function tests", () => {

  describe('Behaver with different inputs', () => {

   const testObjectOne = { total: null, next: null, operation: null }

    it('AC operation test, reset the object', () => {
      expect(calculate({total: 3, next: 3, operation: "+"},'AC')).toEqual(testObjectOne)
    })
    
    it('clicking = without operation and next test', () => {
      expect(calculate(testObjectOne,'=')).toEqual({})
    })
    
    it('clicking = with operation & without the next number test', () => {
      expect(calculate({...testObjectOne, next:'5'},'=')).toEqual({})
    })
    
    it('clicking + without numbers test', () => {
      expect(calculate(testObjectOne,'+')).toEqual({operation:'+'})
    })
    
    it('clicking + with total test', () => {
      expect(calculate({...testObjectOne,total:'10'},'+')).toEqual({total:'10',operation:'+',next:null})
    })
    
    it('clicking + with numbers test', () => {
      expect(calculate({total: 3, next: 3, operation: "+"},'+')).toEqual({total:'6',operation:'+',next:null})
    })

    it('plus-minus operation test', () => {
      expect(calculate({total: "3"},'+/-')).toEqual({total: "-3"})
    })

  })

  describe('calculations', () => {

    const testObjectTwo = { total: '10', next: '5', operation: null }

    it('Plus operation test', () => {
      expect(calculate({...testObjectTwo,operation:'+'}, "=")).toEqual( { total: '15', next: null, operation: null })
    })

    it('minus operation test', () => {
      expect(calculate({...testObjectTwo,operation:'-'}, "=")).toEqual( { total: '5', next: null, operation: null })
    })
    
    it('multiply operation test', () => {
      expect(calculate({...testObjectTwo,operation:'x'}, "=")).toEqual( { total: '50', next: null, operation: null })

    })
    
    it('division operation test', () => {
      expect(calculate({...testObjectTwo,operation:'÷'}, "=")).toEqual( { total: '2', next: null, operation: null })
    })
  })
   
})