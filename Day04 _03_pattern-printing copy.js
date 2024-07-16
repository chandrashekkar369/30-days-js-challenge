//Activity04
i = 1;
j = 1;
let line = "";
for (i = 1; i < 6; i++) {
  for (j = 1; j < i + 1; j++) {
    line = line + "* ";
  }
  console.log(line);
  line = "";
}
