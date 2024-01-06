// random number generator

const rndNumGenerator = num => Math.floor(Math.random() * num);

// terms related to fortune

const collectiveFortune = {
    sign: ['Cosmic Alignment', 'Celestial Harmony', 'Nebulous Insights', 'Astral Whispers', 'Stardust Serenity'],
    fortune: ['Joyful surprises await', 'Success beckons courageously', 'Harmony brings prosperity', 'Love transforms everything', 'Challenges test resilience', 'Caution avoids pitfalls', 'Loss sparks growth'],
    advice: ['Trust inner guidance', 'Embrace changing tides', 'Cherish present moments', 'Seek hidden opportunities', 'Forgive, find peace']
};


// personal fortune array

let personalFortune = [];

// for loop to generate the personal fortune 

for (let step in collectiveFortune) {
    let fortuneIdx = rndNumGenerator(collectiveFortune[step].length);

    switch(step) {
        case 'sign':
            personalFortune.push(`Your sign right now is: "${collectiveFortune[step][fortuneIdx]}".`);
            break;
        case 'fortune':
            personalFortune.push(`It means: "${collectiveFortune[step][fortuneIdx]}".`);
            break;
        case 'advice':
            personalFortune.push(`My personal advice for you is: "${collectiveFortune[step][fortuneIdx]}".`);
            break;
        default:
            personalFortune.push('The crystal ball is showing swirling vortex of multiple mixed fortunes, please come back later!');
            break;
    }
}

// function to turn array of fortune into a paragraph 

const formatFortune = fortuneArr => {
    let format = fortuneArr.join('\n');
    console.log(format);
}

// calling the function 

formatFortune(personalFortune);