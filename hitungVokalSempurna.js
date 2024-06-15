// process.argv to get what user write in command line and return it to array
const kalimat = process.argv[2];

const hitungVokal = (kalimat) => {
  // lowercase all word and split all
  const kalimatArr = kalimat.toLowerCase().split("");
  const vokal = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
    // methode to return total of vocal letter
    total() {
      return this.a + this.i + this.u + this.e + this.o;
    },
  };

  kalimatArr.forEach((huruf) => {
    // using switch because the conditional is more than three
    switch (huruf) {
      case "a":
        vokal.a++;
        break;
      case "i":
        vokal.i++;
        break;
      case "u":
        vokal.u++;
        break;
      case "e":
        vokal.e++;
        break;
      case "o":
        vokal.o++;
        break;
      default:
        break;
    }
  });

  console.log("");
  console.log(`Kalimat: ${kalimat}`);
  console.log("");
  console.log("Jumlah huruf vokal");
  console.log("------------------");
  console.log(`A: ${vokal.a}`);
  console.log(`I: ${vokal.i}`);
  console.log(`U: ${vokal.u}`);
  console.log(`E: ${vokal.e}`);
  console.log(`O: ${vokal.o}`);
  console.log(`Total: ${vokal.total()}`);
  console.log("");
};

hitungVokal(kalimat);
