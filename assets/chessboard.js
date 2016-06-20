$(function(){
  'use strict';
});

//Sequence 1

// var board = [
// ['#rb-1','#knb-1','#bb-1','#Qb','Kb','#bb-2','#knb-2','#rb-2'],
// ['#p-9','#p-10','#p-11','#p-12','#p-13','#p-14','#p-15','#p-16'],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// ['#p-1','#p-2','#p-3','#p-4','#p-5','#p-6','#p-7','#p-8'],
// ['#rw-1','#knw-1','#bw-1','#Qw','Kw','#bw-2','#knw-2','#rw-2'] ];
//
// var count = 0;

//This attempt pushes content through--showing up in the console log. However, no change in the position of the pieces:

// $('.forwardBtn').click(function(e){
//   e.preventDefault
//   count ++
//   if (count === 1){
//   board[6][3] = [4][3]
//   $('#p-4').animate({ //Telling the desired piece to move according to following parameters. One thing: I don't know how to tell it to move. I can change the size of the icon, tell it how long I want it to take, etc. But I'm not sure how to tell it to move any which direction.
//   }, 2000);
//
// }
    // $('#p-4').append(board); Literally appended board to spot [6][3] lol opposite of what we need.


//Different attempt
//I figured some kind of append thing would work, however, I clearly have no idea how to append stuff to things. Ugh.

// $('.forwardBtn').click(function moveOne (e){
//     e.preventDefault
//     count ++
//     if (count === 1){
//       board[6][3] = [4][3]
//       (board).append('#p-4');
//     }
// });
//
//   console.log(board)


//Sequence 2
// var board = [
// ['#rb-1','#knb-1','#bb-1','#Qb','Kb','#bb-2','#knb-2','#rb-2'],
// ['#p-9','#p-10','#p-11','#p-12','#p-13','#p-14','#p-15','#p-16'],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ','#p-4 ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// ['#p-1','#p-2','#p-3',' ','#p-5','#p-6','#p-7','#p-8'],
// ['#rw-1','#knw-1','#bw-1','#Qw','Kw','#bw-2','#knw-2','#rw-2'] ];
// //Can redraw each board and loop through. Then append each element to each div.
//
//
// var count = 1
//
// $('.forwardBtn').click(function forward(){
//   count ++
//   if (count === 2){
//   board[0][6] = [2][5]
//   board[0][6] = '';
//   }
//   console.log(count)
//
// });
//
// var board = [
// ['R','N','B','Q','K','B',' ','R'],
// ['P','P','P','P','P','P','P','P'],
// [' ',' ',' ',' ',' ','N ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ','#p-4 ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' '],
// ['p','p','p','','p','p','p','p'],
// ['r','n','b','q','k','b','n','r'] ];


//The really lame way to do this (just so I have something to show in class):

var count = 0

$('.forwardBtn').click(function moveOne (e){
    e.preventDefault
    count ++
    if (count === 1){
    $('#p-4--new').css('display', 'block')
    $('#p-4').css('display','none');
  }
  else if (count === 2){
    $('#knb-2--new').css('display', 'block')
    $('#knb-2').css('display','none');
  }
  else if (count === 3){
    $('#p-3--new').css('display', 'block')
    $('#p-3').css('display','none');
  }
  else if (count === 4){
    $('#pb-5--new').css('display', 'block')
    $('#pb-5').css('display','none');
  }
  else if (count === 5){
    $('#p-7--new').css('display', 'block')
    $('#p-7').css('display','none');
  }
  else if (count === 6){
    $('#pb-4--new').css('display', 'block')
    $('#pb-4').css('display','none');
  }
  else if (count === 7){
    $('#bw-2--new').css('display', 'block')
    $('#bw-2').css('display','none');
  }
  else if (count === 8){
    $('#bb-2--new').css('display', 'block')
    $('#bb-2').css('display','none');
  }
  else if (count === 9){
    $('#knw-2--new').css('display', 'block')
    $('#knw-2').css('display','none');
  }
});
