/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */


// help from https://echo360.org/media/f6ceea3d-fdce-4168-b9e7-3df87fa66877/public
 exports.findAllSolutions = function(grid, dictionary) {
  let solutions = new Set();

  //check for empty input
  if (grid==null || dictionary==null){
    return [];
  }
  //check if grid is NxN
  let N=grid.length;
  for (let i=0; i<N; i++){
    if (grid[i].length!=N){
      return [];
    }
  }
  // convert everything to lowercase and check if no invalid ch in grid.
  for (let i=0; i<N; i++){
    for (let j=0; j<N;j++){
      grid[i][j]=grid[i][j].toLowerCase();
      let valid = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","v","w","x","y","z","qu","st","u","t"];
      if (!valid.includes(grid[i][j])){
        return [];
      }

    }
  }
  for (let i=0; i<dictionary.length; i++){
    let w=dictionary[i];
    dictionary[i]=w.toLowerCase();
  } 
 // prepare hash map
 var dict={};
 for (let i=0;i<dictionary.length;i++){
   dict[dictionary[i]]=1;
   for (let ind=1;ind<dictionary[i].length;ind++){
     if (dictionary[i].substr(0,ind)in dict){
       if (dict[dictionary[i].substr(0,ind)]==1){
         dict[dictionary[i].substr(0,ind)]=1;
       }
     }
      else{
        dict[dictionary[i].substr(0,ind)]=0;
       }
   }
 }
 
 // build words
 for (let i=0; i<N; i++){
   for (let j=0; j<N; j++){
     let word="";
     let used={};
     searchword(word,i,j,grid,used,dict,solutions);
   }
 }

  return Array.from(solutions);
}
searchword= function(word, y, x, grid, used, dict, solutions){
  let matrix = [[-1,-1],[-1,0],[-1,1],[0,1],[0,-1],[1,-1],[1,0],[1,1]];
  //base case: y or x out of bounds or ch was already visited.
  if(y<0||x<0||y>=grid.length||x>=grid.length||used[[y,x]]==1){
    return;
  }
  // add ch to word
  word+=grid[y][x];
  // check if word is prefix.
  if (dict[word]!=undefined){
    used[[y,x]]=1;
    //check if word is in dict.
    if (dict[word]==1){
        if (word.length>=3){
          solutions.add(word);
        }
    }
    // look for next letter recursively
    for (let i=0;i<8;i++){
      searchword(word,y+matrix[i][0],x+matrix[i][1], grid, used, dict, solutions)
    }
    
  // else unmark visited
  used[[y,x]]=0;
  }
}
