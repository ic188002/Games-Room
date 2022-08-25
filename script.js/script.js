
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




  
//moving the box
  let circle = document.querySelector('.back');
  let moveBy = 10;
  window.addEventListener('load', () => {
      circle.style.position = 'absolute';
      circle.style.left = 0;
      circle.style.top = 500;
  });
  window.addEventListener('keyup', (e) => {
      switch (e.key) {
          case 'ArrowLeft':
              circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
              break;
          case 'ArrowRight':
              circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
              break;
        
        
      }
  });