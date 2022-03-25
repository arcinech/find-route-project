import { readyArray } from './settings.js';

const startPoint = [0,0];
const endPoint = [0,4];
let routeBreach = [[]];
let routeBreachId = 0;

for (const row in readyArray){
  for (const col in readyArray[row]){
    //check if current place is avaible
    if(readyArray[row][col] == '1'){
        if(readyArray[row - 1][col] == '1'){
          
        }
        }
    } 
  }
}