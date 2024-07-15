const score = 80;
switch (true) {
  case score < 35:
    console.log("Grade is F");
    break;
  case score >= 35 && score < 60:
    console.log("Grade is D");
    break;
  case score >= 60 && score < 70:
    console.log("Grade is C");
    break;
  case score >= 70 && score < 80:
    console.log("Grade is B");
    break;
  case score >= 80 && score < 100:
    console.log("Grade is A");
    break;
}
