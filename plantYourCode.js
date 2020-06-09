// Challenge 1.1 Solution

function grid(seedCount) {
  console.log("point");
  const length = Math.ceil(Math.sqrt(seedCount));
  const width = Math.ceil(seedCount / length);
  return [length, width];
}

// Challenge 1.2 Solution

function whereToWater(plantsArray) {
    return plantsArray
        .filter(plant => plant.needsWater)
        .map(plant => plant.gardenLocation)
}

// Challenge 1.3 Solution

function translatePlantLatin(message) {
  message = message.toLowerCase();
    let newMessage = Array.from(message)
        .reduce((acc, val) => {
            return acc + val + ({
                a: 'tiva',
                e: 'llia',
                i: 'mus',
                o: 'phylum',
                u: 'rea',
            }[val] || '')
        }, '')
    return newMessage;
}
