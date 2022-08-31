/*
> painter1.paints()
"Paints green!"
> painter2.paints()
"Paints yellow!"
> painter3.paints()
"Paints red!"
*/

const paint = function () {
  const painter = {
    paints: function (color) {
      return `Paints ${color}!`;
    },
    cannotpaint: function (uncolor) {
      return `Can't paint ${uncolor}`;
    },
  };
  return painter;
};

const drive = (person) => ({
  drives: (car) => {
    return `${person.name} Drives ${car}!`;
  },
});

const paintsAndDrives = (name) => {
  let person = {
    name,
  };
  return { ...paint(), ...drive(person) };
};

// const person = paintsAndDrives();

// console.log(person.drives('truck'));
// console.log(person.paints('white'));
// console.log(person.cannotpaint('black'));

// const painter = person.paints('truck');

// console.log(painter);

const seung = paintsAndDrives('seung');
const seungCar = seung.drives('truck');

console.log(seungCar);

// const painter1 = paint('green', 'black');
// const painter2 = paint('yellow', 'white');
// const painter3 = paint('red', 'green');

// console.log(painter1.paints());
// console.log(painter2.paints());
// console.log(painter3.paints());

// console.log(painter1.cannotpaint());
// console.log(painter2.cannotpaint());
// console.log(painter3.cannotpaint());

// const painter4 = paint2('green');
// const painter5 = paint2('yellow');
// const painter6 = paint2('red');

// console.log(painter4.paints2());
// console.log(painter5.paints2());
// console.log(painter6.paints2());

/*
> faucet.sound()
"Drip drip drip."
> oldCar.sound()
"Grumble grumble"
> sleepyBear.sound()
"Grrr...yawn"
*/

// const stuff = (noise) => ({
//   sound: () => {
//     return `${noise}`;
//   },
// });

// const faucet = stuff('Drip drip drip.');
// const oldCar = stuff('Grumble grumble');
// const sleepyBear = stuff('Grrr...yawn');
// console.log(faucet.sound());
// console.log(oldCar.sound());
// console.log(sleepyBear.sound());

const toss = (distance) => {
  return function (speed) {
    return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour`;
  };
};

const battleRobot1 = toss(100)(20);
console.log(battleRobot1);

// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"

/*
First use closures to create three dance moves. For instance, a dancer should be able to do the following:

> dancer.samba()
"The dancer sambas!"
> dancer.tango()
"The dancer tangos!"

Then add the dance moves to a dancer.
*/
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const samba1 = () => ({
  samba2: () => {
    console.log(`the dancer samabas!`);
  },
});

const tango1 = () => ({
  tango2: () => {
    console.log(`the dancer tangos!`);
  },
});

// dancer.samba1();
// dancer.tango1();

// const dancer = dance('samba');
// const painter2 = dance('tango');
// console.log(dancer.dance());
// console.log(painter2.paints());

// const dance = (color) => {
//   const obj = {
//     paints: function () {
//       let test = color;
//       console.log(`${test}`);
//     },
//   };
//   return obj;
// };

const samba = (person) => ({
  samba: () => {
    return `The ${person.job} sambas!`;
  },
});

const tango = (person) => ({
  tango: () => {
    return `The ${person.job} tangos!`;
  },
});

const sambaingTango = (job) => {
  let person = {
    job,
  };
  return { ...samba(person), ...tango(person) };
};

const dncr = sambaingTango('dancer');

console.log(dncr.samba());
console.log(dncr.tango());
