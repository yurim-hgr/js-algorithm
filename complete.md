210619
1 . 가장작은수구하기 
function solution(a, b, c){
    let answer ;
    if(a<b) answer = a;
    else answer = b;
    if (answer > c) answer =c;
    return answer;        
  }

  console.log(solution(2, 5, 1));


2. 삼각형 가능한지구하기 

function solution(a, b, c){
  let answer = "NO" ;
  let max ;
  const sum = a+b+c;
    if(a>b)  max = a;
    else max = b;
    if (max < c) max =c;
    if(max < sum - max)
      answer ="YES"
    return answer;        
  }

  console.log(solution(6, 5, 2));

4. 1부터 N 까지 구하기
   function solution(n){
  let answer=0 ;
  let i = 0;
  while (i<6){
    i++;
    answer += i;
  }
  return answer;        
  }

  console.log(solution(6));

5. 최솟값구하기
function solution(arr){
  let min = arr[0];
  for( let i = 0 ; i < arr.length ; i++){
    if(arr[i] < min) min = arr[i]
  }
   return min;
 }
let arr = [ 5,7,1,3,2,9,11]
console.log(solution(arr));

210620
6. 홀수 구하기
내가푼거

function solution(arr){

  let sum ,min;
  let odd = [] ;
  for(let i = 0 ; i< arr.length ; i++){
    if(arr[i] % 2==1){
      odd.push(arr[i])
    }
    
    console.log(odd )
  }
  min = odd[0]
  sum = odd[0]
  for(let i = 1 ; i< odd.length ; i++){
    sum += odd[i]   
    if(odd[i] < min){
      min = odd[i]
    }
  }
   return [sum ,min];
 }
let arr = [ 12, 77, 38, 41, 53, 92, 85]
console.log(solution(arr));

쌤이 푼거 ㅋ
 function solution(arr){

  let sum =0 ,min = Number.MAX_SAFE_INTEGER;
  let answer = [] ;
  for( let i of arr){
    if(i % 2==1){
      sum += i
      if(min> i)
        min = i
    }
  }
   answer.push(sum);
   answer.push(min)
   return [sum ,min];
 }
let arr = [ 12, 77, 38, 41, 53, 92, 85]
console.log(solution(arr));

-> for of 로 풀기 
바로 계산가넝 ㅋ

7. 자동차 10부제
 function solution(n, arr){

  let answer =0;
  for( let i of arr){
    if(i % 10 == n )  answer += 1
  }
   return answer;
 }
const n = 3
let arr = [25, 23, 11, 47, 53, 17, 33]
console.log(solution(n, arr));

8. 백설공주 
 function solution( arr){

  let answer=arr , sum;

  // for( let i = 0 ; i <arr.length ; i++){
  //   sum+=arr[i];
  // }
  //console.log(sum)
  sum = answer.reduce((pre, cur)=>{
    return pre+cur;
  })
   
  for( let i = 0 ; i <answer.length ; i++){
    for(let j = i+1; j<answer.length ;j++){
      if(sum -( answer[i]+answer[j]) === 100){
      answer.splice(j, 1)
      answer.splice(i, 1)
      }
    }
  }
   return answer;
 }

let arr = [20, 7, 23, 19, 10, 15 ,25, 8, 13]
console.log(solution(arr));



9. A => # 으로
- 내풀이 
function solution( str){

  let arr = [...str]

  for(let i in arr){
    if (arr[i] ==="A"){
      arr.splice(i , 1, "#")
    }
  }
   return arr;
 }

let str = "BANANA"
console.log(solution(str));

- 쌤풀이 ㅋ
function solution( str){

  let answer = "";

  for(let i of str){
    if (i ==="A") answer+= "#"
    else answer +=i 
  }
   return answer;
 }
let str = "BANANA"
console.log(solution(str));

깨달은점 for of 는 문자열 가넝 ㅋ 
거기에 추가해도되는 방향스로 가능 ㅋ

10 .문자열에 특정문자 갯수
function solution(n, str){

  let answer = 0;

  for(let i of str){
    if (i ===n) answer+= 1
  }
   return answer;
 }
let n = "R"
let str = "COMPUTERPROGRAMMING"
console.log(solution(n, str));

11. 대문자인 애들 갯수찾기
function solution(str){

  let answer = 0;

  for(let i of str){
    if (i === i.toUpperCase()) answer+= 1
    // answer ++ ; 해도돼
  }
   return answer;
 }

let str = "KoreaTimeGood"
console.log(solution(str));

12. 대문자로 통일
function solution(str){

  let answer = "";

  for(let i of str){
    if (i === i.toUpperCase()) answer+= i.toLowerCase();
    else answer += i.toUpperCase();
  }
   return answer;
 }

let str = "StuDY"
console.log(solution(str));

13. 대소문자 변환
function solution(str){

  let answer = "";

  for(let i of str){
    if (i === i.toUpperCase()) answer+= i.toLowerCase();
    else answer += i.toUpperCase();
  }
   return answer;
 }

let str = "StuDY"
console.log(solution(str));

14. 가장 긴 문자열 출력
function solution(arr){

  let answer = "";
  
  for(let i of arr){
    if (answer.length < i.length ) answer= i; 
  }
   return answer;
 }

let arr = ["student" ,"beautiful","good"]
console.log(solution(arr));

15. 가운데 출력
function solution(arr){

  let answer = "";
  
  let a =  Math.floor(arr.length /2)
  
  if(arr.length % 2 === 0) answer = arr[a-1]+arr[a]
  else answer =arr[a]
  return answer; 
}

let arr = "good"
console.log(solution(arr));

16. 문자열 중복제거출력
function solution(arr){

  let answer = "";
  
  for(let i = 0 ; i<arr.length ; i++){
    console.log( arr[i] , i , arr.indexOf(arr[i]))
    if(arr.indexOf(arr[i])=== i){
      answer+= arr[i]
    }
  }
  return answer; 
}

let arr = "good"
console.log(solution(arr));


17. 중복단어 제거
function solution(arr){

  let answer = [];
  
  answer = arr.filter((v, i) => {
    return arr.indexOf(v)=== i
  })  
  return answer; 
}

 let str=["good", "time", "good", "time", "student"];
console.log(solution(str));

220621
2-1.큰수출력

function solution(arr){

let answer = [];
answer.push(arr[0])
for(let i = 1 ; i< arr.length ; i++){
 
 if(arr[i-1]<arr[i]) answer.push(arr[i])
}
  return answer; 
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));

2. 보이는 학생
keypoint max 에 가장 큰값 담기

function solution(arr){

let answer = 1;
let max = arr[0]
for(let i = 1 ; i< arr.length ; i++){
 if(max<arr[i]) {
   max = arr[i]
   answer+=1
 }
}
  return answer; 
}

  let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

2-3 . 가위바위보
function solution(a,b){

let answer ="";

for(let i = 0 ; i< a.length ; i++){
 if(a[i]===b[i])  answer += "D";
 else if(a[i]===1 & b[i]===3)  answer += "A";
 else if(a[i]===2 & b[i]===1)  answer += "A";
 else if(a[i]===3 & b[i]===2)  answer += "A";
 else answer += "B";
}
  return answer; 
}
let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a,b));

2-4. 점수계산

function solution(arr){

let answer=0 , cnt=0 ;
for(let i of arr ){
  if ( i === 1 ){
    cnt +=1;
    answer +=cnt;
  }
  else cnt = 0;
}
  return answer; 
}
  let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

2-5. 등수 계산
function solution(arr){

let narr = arr
  let idx;
  let retarr = []
for(let i = 0 ; i <narr.length ; i++){
  for(let j = i+1 ; j<narr.length ;j++){
  if ( narr[i] < narr[j] ){
    temp = narr[i]
    narr[i] = narr[j]
    narr[j] = temp
    }
  
  }
}
  console.log(narr)
 
for(let i = 0 ; i<arr.length ; i++){
   idx = arr.indexOf(narr[i])
  retarr.push(idx)
}

  return retarr; 
}
let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));

다시 배열을짠다음에 다시 배열을짜는게 아니고 
고자리에서 더 큰게 있으면 카운트를 해주는 아이디어를 생각못했음
나는 순서를 정렬한담에
그 인덱스를 다시 검색해서 할라고 햇슴 

function solution(arr){

let n= arr.length;
let answer = Array.from({length:n}, ()=> 1)
console.log(answer);
for(let i = 0 ; i <arr.length ; i++){
  for(let j = 0 ; j<arr.length ;j++){
  if ( arr[i] < arr[j] ){
   answer[i] += 1;
    }
  }
}
  return answer; 
}
 let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));


2-6.격자판 최대합
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
let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));


