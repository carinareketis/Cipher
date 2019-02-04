function testEquality(input, exit) {
  if (input === exit) {
    console.log("Passou!");
    return true;
  } else {
    console.log("Deu Erro! ");
    return false;
  }
}

//Caso 1
testEquality(cipherEncode("abc", 1), "bcd");
//Caso 2
testEquality(cipherEncode("abc", -1), "`ab");

//Caso 3
testEquality(cipherEncode("xyz", 1), "yz{");
//Caso 4
testEquality(cipherEncode("xyz", -1), "wxy");

//Caso 5
testEquality(cipherEncode("ABC", 1), "BCD");
//Caso 6
testEquality(cipherEncode("ABC", -1), "@AB");

//Caso 7
testEquality(cipherEncode("XYZ", 1), "YZ[");
//Caso 8
testEquality(cipherEncode("XYZ", -1), "WXY");

//Caso 9
testEquality(cipherEncode("abc", 50), "456");
//Caso 10
testEquality(cipherEncode("abc", -50), "/01");

//Caso 11
testEquality(cipherEncode("xyz", 50), "KLM");
//Caso 12
testEquality(cipherEncode("xyz", -50), "FGH");

//Caso 13
testEquality(cipherEncode("ABC", 50), "stu");
//Caso 14
testEquality(cipherEncode("ABC", -50), "nop");

//Caso 15
testEquality(cipherEncode("XYZ", 50), "+,-");
//Caso 16
testEquality(cipherEncode("XYZ", -50), "&'(");

//Caso 17
testEquality(cipherEncode("abc", 100), "fgh");
//Caso 18
testEquality(cipherEncode("abc", -100), "\]^");

//Caso 19
testEquality(cipherEncode("xyz", 100), "}~ ");
//Caso 20
testEquality(cipherEncode("xyz", -100), "stu");

//Caso 21
testEquality(cipherEncode("ABC", 100), "FGH");
//Caso 22
testEquality(cipherEncode("ABC", -100), "<=>");

//Caso 23
testEquality(cipherEncode("XYZ", 100), "]^_");
//Caso 24
testEquality(cipherEncode("XYZ", -100), "STU");


//Caso 25
testEquality(cipherDecode("bcd", 1), "abc");
//Caso 26
testEquality(cipherDecode("BCD", 1), "ABC");

//Caso 27
testEquality(cipherDecode("456", 50), "abc");
//Caso 28
testEquality(cipherDecode("stu", 50), "ABC");

//Caso 29
testEquality(cipherDecode("abc", 100), "\]^");
//Caso 30
testEquality(cipherDecode("ABC", 100), "FGH");

//Caso 31
testEquality(cipherDecode("`ab", -1), "abc");
//Caso 32
testEquality(cipherDecode("@AB", -1), "ABC");

//Caso 33
testEquality(cipherDecode("/01", -50), "abc");
//Caso 34
testEquality(cipherDecode("nop", -50), "ABC");

//Caso 35
testEquality(cipherDecode("\]^", -100), "abc");
//Caso 36
testEquality(cipherDecode("<=>", -100), "ABC");

