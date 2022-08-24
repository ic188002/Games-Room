

// window.addEventListener('DOMContentLoaded', () => {
//     const tiles = Array.from(document.querySelectorAll('.tile'));
//     const playerDisplay = document.querySelector('.display-player');
//     const resetButton = document.querySelector('#reset');
//     const announcer = document.querySelector('.announcer');
// //we are wrapping around with the array. from function. becasue the query selector function returns a node list which is like an array like object

// //this script will be processed before any html elem,ent on the page

// // creating an array with 9 empty string 

// let board = ['', '', '', '', '', '', '', '', '']
// let currentPlayer = 'X';
// let isGameActive = true;
// //we will store the current playerX or O and store if the game is still active

// //THESE REPERSENT OUR END GAME STATE
// const PLAYERX_WON = 'PLAYERX_WON'
// const PLAYERO_WON = 'PLAYERO_WON'
// const TIE = 'TIE';


// //this is our wining condition array of our array
// const winningPatterns = 
// [
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6],
// ]





// function handleResultValidation() {
//     let roundWon = false;
//     for (let i = 0; i <= 7; i++) {
//         const winCondition = winningConditions[i];
//         const a = board[winCondition[0]];
//         const b = board[winCondition[1]];
//         const c = board[winCondition[2]];
//         if (a === '' || b === '' || c === '') {
//             continue;
//         }
//         if (a === b && b === c) {
//             roundWon = true;
//             break;
//         }
//     }




// const announce = (type) => {
//     switch(type){
//         case PLAYERO_WON:
//             announcer.innerHTML = 'Player <span class="playerO">O</span>Won'
//             break;
//         case PLAYERX_WON:
//             announcer.innerHTML = 'Player <span class="playerX">X</span>Won'
//             break;
//             case TIE:
//                 announcer.innerHTML = 'Tie'
//     }
//     announcer.classList.remove('hide')
// }



// const isValidAction = (tile) => {;
//     if (tile.innerHTML === 'X' || tile.innerText === "O"){;
//         return false;
//     }
//     return true;
// };




// const updateBoard = (index) => {
//     board[index] = currentPlayer;
// }



// const changePlayer = () => {
//     playerDisplay.classList.remove(`player${currentPlayer}`);
//     currentPlayer = currentPlayer;
//     playerDisplay.innerText = currentPlayer;
//     playerDisplay.classList.add(`player${currentPlayer}`)
// }
// // when a tile is clicked a user function will be called and referance to a specific tile

// // the user action function
// const userAction = (tile, index) => {
//     if(isValidAction(tile) && isGameActive){
//         tile.innerText = currentPlayer;
//         tile.classList.add(`player${currentPlayer}`);
//             updateBoard(index)
//             handleResultValidation();
//             changePlayer();
//     }
// }

// const resetBoard = () => {
//     board = ['', '', '', '', '', '', '', '', ''];
//     isGameActive = true;
//     announcer.classList.add('hide');

//     if (currentPlayer === 'O') {
//         changePlayer()
//     }
//     tiles.forEach(tile => {
//     tile.innerText = '';
//     tile.classList.remove('playerX');
//     tile.classList.remove('playerO');
//     });
// };


// tiles.forEach( (tile, index) => {
//     tile.addEventListener('click', () => userAction(tile, index));
// });

// // if we have a valid action and the game is active then we will set the innerText to the current plater,
// // and we will assign the player x or player o class based on the current player
// //we are not using template stringsliterals so the current player inside the curely 
// //brakets will be o or x depending on the current player.
// // we update the board array 
// // check winner or not
// //change player 



// resetButton.addEventListener('click', resetBoard)
// })

window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';


    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }



        // fish moving, want to get the fish moving with each awswer
        // $( ".fish" ).mouseenter(function(){
        //     $( ".fish" ).animate({ "left": "-=20px" }, "fast" );
        //   });
    
    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    }


    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerOO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerXX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };
    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
    
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });


    resetButton.addEventListener('click', resetBoard);
});


// $('.fish').click(function() {
//     let box2 = $('.fish');

//     function animation() {
//     box2.animate({'margin-left': '100px'}, 1000);//calling animiation recursuvely
//     box2.animate({'margin-left': '0px'}, 500);
//     box2.animate({'margin-left': '100px'}, 1000);//calling animiation recursuvely
//     box2.animate({'margin-left': '0px'}, 500);
//     }
//     animation()
//     //call back funtion here
// })




//moving the UFO
$( "#right" ).click(function() {
    $( ".UFO" ).animate({ "left": "+=50px" }, "fast" );
  });
   
  $( "#left" ).click(function(){
    $( ".UFO" ).animate({ "left": "-=50px" }, "fast" );
  });
// working


// //annimating the fish
//   $(".fish").click(function(){
//     $(".fish").animate({
//       right: '100px', slow,
//       left: '250px', slow,
      
    
//     });
//   }); 

  $( ".fish" ).mouseenter(function(){
    $( ".fish" ).animate({ "left": "-=20px" }, "fast" );
  });