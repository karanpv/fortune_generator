const rndNumGenerator = num => Math.floor(Math.random() * num);

const collectiveFortune = {
    sign: ['Cosmic Alignment', 'Celestial Harmony', 'Nebulous Insights', 'Astral Whispers', 'Stardust Serenity'],
    fortune: ['Joyful surprises await', 'Success beckons courageously', 'Harmony brings prosperity', 'Love transforms everything', 'Challenges test resilience', 'Caution avoids pitfalls', 'Loss sparks growth'],
    advice: ['Trust inner guidance', 'Embrace changing tides', 'Cherish present moments', 'Seek hidden opportunities', 'Forgive, find peace']
};

let personalFortune = [];
