export const episodeCodeFormatter = (
  seasonNum: number,
  episodeNum: number
): string => {
  return `S${seasonNum.toLocaleString("en-UK", {
    minimumIntegerDigits: 2,
  })}E${episodeNum.toLocaleString("en-UK", { minimumIntegerDigits: 2 })}`;
};

/*
S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.
*/
