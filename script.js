function solution(arr){
let answer=0 ;
let n= arr.length;
let sum1=sum2=0;
for(let i = 0; i < n ; i++){
  sum1=sum2=0;
  for(let j = 0 ; j < n ; j++){
    sum1 += arr[i][j];
    sum2 += arr[j][i];
  }
  answer = Math.max(answer, sum1, sum2);
}
sum1=sum2=0;
for(let i = 0 ; i <n ; i++){
  sum1 += arr[i][i];
  sum2 += arr[i][n-i-1];  
}
  answer = Math.max(answer, sum1,sum2);
  return answer; 
}
 let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));


