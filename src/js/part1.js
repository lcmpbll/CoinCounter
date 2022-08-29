export function coinCounter(
  money,
  quarters = 0,
  dimes = 0,
  nickles = 0,
  pennies = 0
) {
  // determine exact amount of change needed in quarters dimes nickels and pennies
  if (money === 0) {
    return `Your change is ${quarters} in quarters, ${dimes} in dimes, ${nickles} in nickles, and ${pennies} in pennies`;
  } else {
    if (money >= 0.25) {
      quarters = Math.floor(money / 0.25);
      money = (money * 100 - quarters * 0.25 * 100) / 100;
      return coinCounter(money, quarters, dimes, nickles, pennies);
    } else if (money >= 0.1) {
      dimes = Math.floor(money / 0.1);
      money = (money * 100 - dimes * 0.1 * 100) / 100;
      return coinCounter(money, quarters, dimes, nickles, pennies);
    } else if (money >= 0.05) {
      nickles = Math.floor(money / 0.05);
      money = (money * 100 - nickles * 0.05 * 100) / 100;
      return coinCounter(money, quarters, dimes, nickles, pennies);
    } else {
      pennies = Math.floor(money / 0.01);
      money = (money * 100 - pennies * 0.01 * 100) / 100;
      return coinCounter(money, quarters, dimes, nickles, pennies);
    }
  }
}
