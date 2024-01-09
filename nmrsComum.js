function nmrsEmComum(arrayA, arrayB){
    let nmrComum = [];
    let c = 0;

    for(let c1 = 0 ; c1 < arrayA.length ; c1++){
        for(let c2 = 0 ; c2 < arrayB.length ; c2++){
            if(arrayA[c1] == arrayB[c2]){
                nmrComum[c] = arrayA[c1];
                c++;
                break;
            }
        }
    }
    return nmrComum;
}

let arrayA = [15 , 36 , 84 , 59 , 62 , 44 , 35 , 99 , 22 , 15];
let arrayB = [84 , 33 , 92 , 36 , 64 , 99 , 36 , 39 , 46 , 12];

let result = nmrsEmComum(arrayA , arrayB);

console.log(result);