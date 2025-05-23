   function containsHello(str) {
       return str.includes('hello') ? 'Contains "hello"' : 'Does not contain "hello"';
   }
   console.log(containsHello("hello world")); 
   console.log(containsHello("Goodbye"));
   