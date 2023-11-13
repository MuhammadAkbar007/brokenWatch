class Time {
  constructor(hour = 0, minute = 0, type) {
    this.hour = hour;
    this.minute = minute;
    this.type = type;
  }

  increment() {
    switch (this.type) {
      case "watch":
        this.minute += 60;
        if (this.minute === 60) {
          this.minute = 0;
          if (this.hour === 23) {
            this.hour = 0;
          } else {
            this.hour += 1;
          }
        }
        break;
      case "real":
        let temp = this.minute + 48;
        if (temp >= 60) {
          this.minute = temp - 60;
          if (this.hour === 23) {
            this.hour = 0;
          } else {
            this.hour += 1;
          }
        } else {
          this.minute = temp;
        }
        break;
      default:
        console.error("wrong input!");
        break;
    }
  }
}

const realTime = new Time(0, 0, "real");
const watchTime = new Time(0, 0, "watch");
const answerTime = new Time(0, 0, "watch");

console.log("************************************");
console.log("* watch = 00 : 00 | real = 00 : 00 *");
console.log("************************************");

while (watchTime.hour <= 21) {
  realTime.increment();
  watchTime.increment();

  const log = `* watch = ${
    watchTime.hour === 0 ? watchTime.hour + "0" : watchTime.hour
  } : ${
    watchTime.minute === 0 ? watchTime.minute + "0" : watchTime.minute
  } | real = ${realTime.hour === 0 ? realTime.hour + "0" : realTime.hour} : ${
    realTime.minute === 0 ? realTime.minute + "0" : realTime.minute
  } *`;

  console.log(log);
  console.log("************************************");

  answerTime.hour = realTime.hour;
  answerTime.minute = realTime.minute;
}

let added = answerTime.hour + 4;
console.log(
  `\n ### Answer is = ${added >= 24 ? added - 24 : added} : ${
    answerTime.minute
  } ###`,
);
