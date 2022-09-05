 exports.findAllSolutions = function(grid, dictionary) {
  let solutions = [];

  for(var word = 0; word < dictionary.length; word++){
    let curr = "";
    let pos = [0,0];
    let used = [];
    for(var col=0; col<grid.length; col++){
      curr=""
      for (var tile=0; tile<grid[col].length; tile++){
        if (dictionary[word][0].toLocaleLowerCase()===grid[col][tile].toLowerCase() || dictionary[word].slice(0,2).toLocaleLowerCase()===grid[col][tile].toLowerCase()){
          curr = curr+grid[col][tile].toLowerCase();
          pos = [col,tile];
          used.push(pos);
          for (var i=1; i<dictionary[word].length; i++){
            let top = [pos[0]-1,pos[1]];
            let bottom = [pos[0]+1,pos[1]];
            let left = [pos[0],pos[1]-1];
            let right = [pos[0],pos[1]+1];
            let tl = [pos[0]-1,pos[1]-1];
            let tr = [pos[0]-1,pos[1]+1];
            let bl = [pos[0]+1,pos[1]-1];
            let br = [pos[0]+1,pos[1]+1];
            let neighbors=[top,bottom,left,right,tl,tr,bl,br];
            let valid = [];
            for (var x=0; x<neighbors.length; x++){
             if (grid.length>neighbors[x][0] && neighbors[x][0]>=0 && neighbors[x][1]>=0 && neighbors[x][1]<grid[0].length){
                valid.push(neighbors[x]);
              }
            }
            for (var el=0; el<valid.length; el++){
              let one = dictionary[word][i].toLowerCase();
              let two = grid[valid[el][0]][valid[el][1]].toLowerCase();
              if (two.length===2){
                if (two[0]==="s" || two[0]==="q"){
                  one=dictionary[word].slice(i,i+2).toLowerCase();
                }
              }
              if (one === two && !used.includes(valid[el])&&["st","qu"].includes(two)){
                curr += one;
                pos = valid[el];
                used.push(valid[el]);
                if (curr === dictionary[word].toLowerCase()&&curr.length>2 && !solutions.includes(curr)){
                  solutions.push(curr);
    }
              }
              if (one === two && !used.includes(valid[el])&&curr+one===dictionary[word].toLowerCase().slice(0,curr.length+1)){
                curr += one;
                pos = valid[el];
                used.push(valid[el]);
                if (curr === dictionary[word].toLowerCase()&&curr.length>2 && !solutions.includes(curr)){
                  solutions.push(curr);
    }
              }
            }
          }
        }
      }
    }
  }

  return solutions;
}
