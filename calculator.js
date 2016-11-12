/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */


function calculatorModule(){
  var memory = 0;
  var total = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   function getLoad(x){
    validate(x);
    total = x;
    return total;
   }


  /**
   * Return the value of `total`
   * @return { Number }
   */

   function theTotal(){
    return total;
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   function sum(x){
    validate(x);
    total += x;
   }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function difference(x){
    validate(x);
    total -= x;
   }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function product(x){
    validate(x);
    total *= x;
   }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function quotient(x){
    validate(x);
    total /= x;
   }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   function theMemory(){
    return memory;
   }




  /**
   * Stores the value of `total` to `memory`
   */

   function savedMemory(){
    memory = total;
   }



  /**
   * Clear the value stored at `memory`
   */

   function clearMemory(){
    memory = 0;
   }

  /**
   * Validation
     */

    function validate(x){
      if(typeof x !== 'number'){
        throw Error();
      }
    }



  return {
    load: getLoad,
    getTotal: theTotal,
    add: sum,
    subtract: difference,
    multiply: product,
    divide: quotient,
    recallMemory: theMemory,
    saveMemory: savedMemory,
    clearMemory: clearMemory

  };
 }