export function pyramid(floor) {
  const baseFloorLength = floor * 2 - 1;
  let starsCounter = 1;
  for (let i = 1; i <= floor; i++) {
    const floorString = '*'
      .repeat(starsCounter)
      .padStart(
        Math.ceil((baseFloorLength - starsCounter) / 2) + starsCounter,
        ' '
      )
      .padEnd(baseFloorLength, ' ');
    console.log(floorString);
    starsCounter += 2;
  }
}

pyramid(10);
