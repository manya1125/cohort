(function factorial(n) {
    const fact = n => n <= 1 ? 1 : n * fact(n - 1);
    console.log(fact(n));
})(5); 