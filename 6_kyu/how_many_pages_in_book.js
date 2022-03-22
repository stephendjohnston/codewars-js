"use strict";

/*
Every book has n amount of pages. You will be given the summary which 
was made by adding up the number of digits contained in each page 
number in a book(from 1 to n). The task is to find how many pages a 
book has- n.

Example:
When input is 25 (summary). The output must be 17(n). There are 9 
one-digit pages and 8 two-digit pages(8 ones and 8 digits from 0 to 7)

Be aware that you'll get enormous books having up to 100.000 pages.

All input will be valid

PEDAC
-----

input: number
output: number

rules:
- input will always be valid
  - number > 0
- input can be 6 digit numbers
- output will be number > 0
- summary is the input which represents the the number of digits
contained in each page number in a book from n-1

example:
summary = 25
n = 17
- to get 25 digits, and counting sequentially from page 1, means
there will be all the digits from 1-9 which is 9 digits and then from 10 - 25
is 16 digits or 8 two digit numbers. so 9 one digit numbers plus 8 two
digits numbers = 17 pages

Mental Model:
create an array of total digits for each number from 1-5, where the first
number will be 9 because 9 one digit numbers. 180 because 90 two digit
numbers. 2700 because 900 three digit numbers etc.
eg. [9, 180, 2700, 36000, 450000, 5400000]
Iterate over this array. On each iteration, check if the summary is
less than the current number in the array. If it is, subtract that number
from the summary. If the number is greater, then divide the current
summary number by the current index and then add all the numbers from
index 0 up to the (not including) the current index. 
This will be the number of pages.

Algorithm:
- create array of numbers/total digits
- create a result variable
- iterate over array using for loop
  - if summary > current value
    - subtract current value from summary
  - if summary < current value
    - summary / current index
    - sum all array values from index 0 up to current index
    - add this sum value to divided summary
    - return this value


185 - 9 = 176
176 / 2 = 88
88 + 9 = 97

1095 - 9 = 1086
1086 - 180 = 906
906 / 3 = 302
302 + 99 = 401

660 - 9 = 651
651 - 180 = 471
471 / 3 = 157
157 + 99 = 256

4086 - 9 = 4077
4077 - 180 = 3897
3897 - 2700 = 1197
1197 

684 - 9 = 675
675 - 180 = 495
495 / 3 = 165
165 + 99 = 264

2727 - 9 = 2718
2718 - 180 = 2538
2538 / 3 = 846
846 + 99 = 945

3061 > 9 === true
3061 - 9 = 3052
3052 > 180 === true
3052 - 180 = 2872
2872 > 2700 === true
2872 - 2700 = 172
172 > 36000 === false
172 / 4 = 43
43 + 9 + 90 + 900 = 1042


*/

function amountOfPages(summary) {
  const digits = [0, 9, 180, 2700, 36000, 450000, 5400000];
  const numbers = [0, 9, 90, 900, 9000, 90000]

  for (let i = 1; i < digits.length; i += 1) {
    if (summary > digits[i]) {
      summary -= digits[i];
    } else {
      summary /= i;
      summary += numbers.slice(0, i).reduce((acc, val) => acc + val);
      return summary
    }
  }
}

// Codewar solution

function amountOfPages(summary){
  let counter = 0;
  
  while (summary > 0) {
    counter++;
    summary -= counter.toString().length;
  }
  
  return counter;
}

amountOfPages(5); // 5
amountOfPages(25); // 17
amountOfPages(1095); // 401
amountOfPages(185); // 97
amountOfPages(660); // 256
amountOfPages(684); // 264
amountOfPages(2727); // 945
amountOfPages(3061); // 1042