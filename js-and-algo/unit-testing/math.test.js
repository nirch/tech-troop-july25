const {add, multiply} = require("./math");

// describe string with a title to this tests - its like a bundle tests
// in each describe you have multiple tests
describe('Math functions', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 5);
    expect(result).toBe(7);
    // expect(add(2, 5)).toBe(7);
  })
  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 5)).toBe(10);
  })


  // it('should check object equality with toBe', () => {
  //     const p1 = {name: "John"};
  //     const p2 = {name: "John"};
  //     expect(p1).toBe(p2);
  // })

  it('should check object equality with toEqual', () => {
      const p1 = {name: "John"};
      const p2 = {name: "John"};
      expect(p1).toEqual(p2);
  })

  it('should multiply in async', (done) => {
    setTimeout(() => {
      expect(multiply(2, 5)).toBe(10);
      expect(multiply(10, 5)).toBe(50);
      done();
    }, 2000)

    // fs.readFile("test.txt", "r", (err, data) => {
    //   expect(err).toBeUndefined();
    //   expect(data).toBe('bla bla bla');
    //   done();
    // })

  })




  function readConfig() {
    // read from file

    // manipulation

    // return manipulated data
  }

  

})


