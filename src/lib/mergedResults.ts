import { IMediaData } from "@/types/data";

const mergedResults = (movie: IMediaData[], tv: IMediaData[]) => {
  let mergedResults = [];

  if (movie && tv) {
    let i = 0;
    let j = 0;

    while (i < movie.length && j < tv.length) {
      if (movie[i].popularity > tv[j].popularity) {
        mergedResults.push(movie[i]);
        i++;
      } else {
        mergedResults.push(tv[j]);
        j++;
      }
    }

    while (i < movie.length) {
      mergedResults.push(movie[i]);
      i++;
    }

    while (j < tv.length) {
      mergedResults.push(tv[j]);
      j++;
    }
  }
  return mergedResults;
};

export default mergedResults;

// the function checks the first movie in the array and the first series in the array
// then pushes it to the first position in the new array
// then repeats the action until it empties both arrays
// such sorting makes the first results more relevant to what the user is looking for
