const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  // console.log(`Hi ${name}`);
  rl.question('What\'s an activity you like doing? ' , (activity) => {
    // console.log(`I see ${name} like ${activity}`);
    rl.question('What do you listen to while doing work?', (music) => {
      // console.log(`Oh you like listen ${music}`)
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (food) => {
        // console.log(`Hi ${name}`);
        rl.question('Which sport is your absolute favourite?', (sport) => {
        //  console.log(`Hi ${name}`);
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!'
            , (answer) => {
            console.log(`Hi ${name},Thank you for taking the survey. We know you like ${activity},you listen ${music} when you do work, ${food} is your favriout meal. and you good at ${sport}! You have superPower!!! such as ${answer}`);
            rl.close();
          });
      });
     });   
    });
  }); 
});



