const rndNumGenerator = num => Math.floor(Math.random() * num);

const collectiveFortune = {
    sign: ['Cosmic Alignment', 'Celestial Harmony', 'Nebulous Insights', 'Astral Whispers', 'Stardust Serenity'],
    fortune: ['Joyful surprises await', 'Success beckons courageously', 'Harmony brings prosperity', 'Love transforms everything', 'Challenges test resilience', 'Caution avoids pitfalls', 'Loss sparks growth'],
    advice: ['Trust inner guidance', 'Embrace changing tides', 'Cherish present moments', 'Seek hidden opportunities', 'Forgive, find peace']
};

let personalFortune = [];

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

const formatFortune = fortuneArr => {
    let format = fortuneArr.join('\n');
    console.log(format);
}

formatFortune(personalFortune);