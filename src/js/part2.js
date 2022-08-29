// export const coinCounter = (money) => {
//   return () => {
//     quarters = Math.floor(money / 0.25);
//     money = (money * 100 - quarters * 0.25 * 100) / 100;
//     return () => {
//       dimes = Math.floor(money / 0.1);
//       money = (money * 100 - dimes * 0.1 * 100) / 100;
//       return () => {
//         nickles = Math.floor(money / 0.05);
//         money = (money * 100 - nickles * 0.05 * 100) / 100;
//         return () => {
//           pennies = Math.floor(money / 0.01);
//           money = (money * 100 - pennies * 0.01 * 100) / 100;
//           return () => {
//             return `Your change is ${quarters} in quarters, ${dimes} in dimes, ${nickles} in nickles, and ${pennies} in pennies`;
//           };
//         };
//       };
//     };
//   };
// };

// function coinCounter() {
//   const money = 0.44;
//   function quarters(money) {
//     quarters = Math.floor(money / 0.25);
//     money = (money * 100 - quarters * 0.25 * 100) / 100;
//     return quarters;
//   }

//   function dimes(money) {
//     dimes = Math.floor(money / 0.1);
//     money = (money * 100 - dimes * 0.1 * 100) / 100;
//     return dimes;
//   }

//   function nickles(money) {
//     nickles = Math.floor(money / 0.05);
//     money = (money * 100 - nickles * 0.05 * 100) / 100;
//     return nickles;
//   }

//   function pennies(money) {
//     pennies = Math.floor(money / 0.01);
//     money = (money * 100 - pennies * 0.01 * 100) / 100;
//     return pennies;
//   }

//   function change(quarters, dimes, nickles, pennies) {
//     return `Your change is ${quarters} in quarters, ${dimes} in dimes, ${nickles} in nickles, and ${pennies} in pennies`;
//   }
//   return change(quarters(money), dimes(money), nickles(money), pennies(money));
// }

// const changes = coinCounter();
// console.log(coinCounter());

const cc = function (money) {
  let privateMoney = money;
  let quarters = 0;
  let dimes = 0;
  let nickles = 0;
  let pennies = 0;
  function changeBy(change) {
    privateMoney = change;
  }

  return {
    subtractQuarters() {
      const qs = Math.floor(privateMoney / 0.25);
      changeBy((privateMoney * 100 - qs * 0.25 * 100) / 100);
      quarters = qs;
      return qs;
    },
    subtractDimes() {
      const ds = Math.floor(privateMoney / 0.1);
      changeBy((privateMoney * 100 - ds * 0.1 * 100) / 100);
      dimes = ds;
      return ds;
    },
    subtractNickles() {
      const ns = Math.floor(privateMoney / 0.05);
      changeBy((privateMoney * 100 - ns * 0.05 * 100) / 100);
      nickles = ns;
      return ns;
    },
    subtractPennies() {
      ps = Math.floor(privateMoney / 0.01);
      changeBy((privateMoney * 100 - quarters * 0.01 * 100) / 100);
      pennies = ps;
      return ps;
    },
    allTheCoins(num) {
      if (num >= 4) {
        this.subtractQuarters();
      }
      if (num >= 3) {
        this.subtractDimes();
      }
      if (num >= 2) {
        this.subtractNickles();
      }
      this.subtractPennies();
      return `Your change is ${quarters} in quarters, ${dimes} in dimes, ${nickles} in nickles, and ${pennies} in pennies`;
    },
  };
};

console.log(cc(0.44).subtractPennies());
console.log(cc(0.44).subtractNickles());
console.log(cc(0.44).subtractDimes());
console.log(cc(0.44).subtractQuarters());
console.log(cc(0.44).allTheCoins());
console.log(cc(0.44).allTheCoins(2));
console.log(cc(0.44).allTheCoins(3));
console.log(cc(0.44).allTheCoins(4));
