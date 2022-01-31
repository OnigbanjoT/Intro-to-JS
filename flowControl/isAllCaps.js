function isLongerThanTen(string) {
  if(string.length > 10) {
    console.log(string.toUpperCase());
    return string.toUpperCase();
    
  } else {
    console.log(string);
    return string
    
  }
}

isLongerThanTen('hello world');
isLongerThanTen('goodbye');
isLongerThanTen(10 + 10);

