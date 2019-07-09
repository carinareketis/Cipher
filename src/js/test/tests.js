function testEquality(input, exit) {
  if (input === exit) {
    console.log("Passou!");
    return true;
  } else {
    console.log("Deu Erro!");
    return false;
  }
}

//Caso 1
testEquality(encode("abc", 1), "bcd");
//Caso 2
testEquality(encode("abc", -1), "zab");

//Caso 3
testEquality(encode("xyz", 1), "yza");
//Caso 4
testEquality(encode("xyz", -1), "wxy");

//Caso 5
testEquality(encode("ABC", 1), "BCD");
//Caso 6
testEquality(encode("ABC", -1), "ZAB");

//Caso 7
testEquality(encode("XYZ", 1), "YZA");
//Caso 8
testEquality(encode("XYZ", -1), "WXY");

//Caso 9
testEquality(encode("abc", 50), "yza");
//Caso 10
testEquality(encode("abc", -50), "cde");

//Caso 11
testEquality(encode("xyz", 50), "vwx");
//Caso 12
testEquality(encode("xyz", -50), "zab");

//Caso 13
testEquality(encode("ABC", 50), "YZA");
//Caso 14
testEquality(encode("ABC", -50), "CDE");

//Caso 15
testEquality(encode("XYZ", 50), "VWX");
//Caso 16
testEquality(encode("XYZ", -50), "ZAB");

//Caso 17
testEquality(encode("abc", 100), "wxy");
//Caso 18
testEquality(encode("abc", -100), "efg");

//Caso 19
testEquality(encode("xyz", 100), "tuv");
//Caso 20
testEquality(encode("xyz", -100), "bcd");

//Caso 21
testEquality(encode("ABC", 100), "WXY");
//Caso 22
testEquality(encode("ABC", -100), "EFG");

//Caso 23
testEquality(encode("XYZ", 100), "TUV");
//Caso 24
testEquality(encode("XYZ", -100), "BCD");

//Caso 25
testEquality(encode("123", 1), "123");
//Caso 26
testEquality(encode("-_=+", 1), "-_=+");
//Caso 27
testEquality(encode("çÇ", 1), "çÇ");
//Caso 27
testEquality(encode("áã", 1), "áã");
