   function isLongerThanFiveCharacters(str) {
       return str.length > 5 ? 'Longer than 5 characters' : '5 characters or shorter';
   }
   console.log(isLongerThanFiveCharacters("Hello!"));
   console.log(isLongerThanFiveCharacters("Hi"));
   