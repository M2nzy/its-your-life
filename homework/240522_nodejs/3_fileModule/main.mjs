import fs from "fs";

const movie_path = "movie.txt";
const tour_path = "tour.txt";

const movieData = fs.readFileSync(movie_path, {encoding:"utf8"});
const tourData = fs.readFileSync(tour_path, {encoding:"utf8"});

if (movieData && tourData){
    console.log("=====================");
    console.log("보고싶은 영화는 "+movieData+"이고,");
    console.log("가고싶은 여행지는 "+tourData);
    console.log("=====================");
}