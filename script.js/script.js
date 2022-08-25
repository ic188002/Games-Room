
    
//setting out the var user selections
    const playerDisplay = document.querySelector('.display-player');
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

// starting var
    let currentUser = 'O';
    let isGameActive = true;
    let Table = ['', '', '', '', '', '', '', '', ''];



//outline the winning arrays inside an array 
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

    // this adds an event listener to every tile in the array. when we click on the  tile the 
    //user action functiuon will be called
    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });


    //function to control the back windown of the gun game
    let back = document.querySelector('.back');
    //select the .back class and asign it a varible
    let howMuch = 15;
    // set varraible, this is will be called upon in the switch case
    window.addEventListener('load', () => {
        back.style.position = 'absolute';
        back.style.left = 0;
        back.style.top = 500;
    });




    window.addEventListener('keyup', (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                back.style.left = parseInt(back.style.left) - howMuch + 'px';
                break;
            case 'ArrowRight':
                back.style.left = parseInt(back.style.left) + howMuch + 'px';
                break;
               
          
          
        }
        console.log(window)
    });



    function resultChecker() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = Table[winCondition[0]];
            const b = Table[winCondition[1]];
            const c = Table[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
                
            }
        }
    console.log(winningConditions[1])
 



    if (roundWon) {
            announce(currentUser === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }





    if (!Table.includes(''))
        announce(TIE);
    }



    const updateBoard =  (index) => {
        Table[index] = currentUser;
    }






//Change the player by removing and adding a class
    const changePlayer = () => {
        // removing the class list of the curently player
        playerDisplay.classList.remove(`player${currentUser}`);
        currentUser = currentUser === 'X' ? 'O' : 'X';
        console.log(currentUser)
        //X if it equals O and O if it equals X
        playerDisplay.innerText = currentUser;
        //update the player desiplay, with the class we have made in css
        playerDisplay.classList.add(`player${currentUser}`);
    }








//A Turn in the game
    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
             //check to see if its a valid function
             // if it has an end game state or not
            tile.innerText = currentUser;
            //if both condition are turn we set the innertext to true (X, O)
            tile.classList.add(`player${currentUser}`);
            //asigning the new class based on current player
            updateBoard(index);
            //update the array
            resultChecker();
            //check if we have a winner or not 
            changePlayer();
            //then change player methord
        }
    }
    


//checking that the move is possible
    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };





    const resetBoard = () => {
        Table = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentUser === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }



    

//Annouce the end game state to the user
const announce = (type) => {
    //recives an end game string called type, and based on that it will modifly the annoucment
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
    //we remove the hide class to show the annoument to the user 
};

//ending var
    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';




 resetButton.addEventListener('click', resetBoard);








//moving the UFO
$( "#right" ).click(function() {
    $( ".UFO" ).animate({ "left": "+=50px" }, "fast" );
  });
   
  $( "#left" ).click(function(){
    $( ".UFO" ).animate({ "left": "-=50px" }, "fast" );
  });


       // fish moving, want to get the fish moving with each awswer
        // $( ".fish" ).mouseenter(function(){
        //     $( ".fish" ).animate({ "left": "-=20px" }, "fast" );
        //   });
    

  $( ".fish" ).mouseenter(function(){
    $( ".fish" ).animate({ "left": "-=20px" }, "fast" );
  });




