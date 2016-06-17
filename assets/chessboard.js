$(function(){
  'use strict';
});

var board = [
['R','N','B','Q','K','B','N','R'],
['P','P','P','P','P','P','P','P'],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
['p','p','p','p','p','p','p','p'],
['r','n','b','q','k','b','n','r'] ];

var count = 0

$('.forwardBtn').click(function forward(){
  count ++
  if (count === 1){
  board[6][3] = [4][3]
  board[6][3] = '';
  }
  console.log('1st click')
});
