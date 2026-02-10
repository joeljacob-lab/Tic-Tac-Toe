const GameBoard=(()=>{
    let board=["","","","","","","","",""];

    const setCell=(index,marker)=>{
        if(board[index]===""){
            board[index]=marker;
            return true
        }
        else{
            alert("Cell is already marked!")
            return false
        }
    }

    const getBoard=()=>{
        return board
    }

    const resetBoard=()=>{
        board.fill("")
    }

    return{
        setCell,getBoard,resetBoard
    }

})();


function Player(name,marker){
    return {name,marker}
}



const GameController=(()=>{
    let gameover=false;
    let activePlayer;
    let PlayerX;
    let PlayerY;

    const startGame=(Player1,Player2)=>{
        PlayerX=Player(Player1,"X");
        PlayerY=Player(Player2,"O");
        activePlayer=PlayerX;
        gameover=false;
        GameBoard.resetBoard();
    }

    const switchTurn=()=>{
        if(activePlayer===PlayerX){
            activePlayer=PlayerY
        }
        else{
            activePlayer=PlayerX
        }
    }


    const PlayGround=(index)=>{
        if(gameover){
            return
        }
        const markSuccess=GameBoard.setCell(index,activePlayer.marker)

        if(!markSuccess){
            return
        }
        if(checkWinner()){
            gameover=true
            alert(`Game Over! Winner is player ${activePlayer.name}`);
        }
        else if(checkTie()){
            gameover=true
            alert("Its a tie!")
        }
        else{
            switchTurn()
            return
        }
    }


    const checkWinner=()=>{
        let board=GameBoard.getBoard()
        const winConditions=[[0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
        return winConditions.some(([a,b,c])=>{
    
            if(board[a]!==""&&board[a]===board[b]&&board[a]===board[c]){
                return true
            }
        }
    )
}


    const checkTie=()=>{
        let board=GameBoard.getBoard()
        return board.every(cell=>cell!=="")
    }

   return{
    startGame,PlayGround,switchTurn
   }
})();





const DisplayController=(()=>{
    const cells=document.querySelectorAll(".cell")
    const startBtn=document.querySelector(".start")
    const resetBtn=document.querySelector(".reset")

    const renderBoard=()=>{
        let board=GameBoard.getBoard()

        for(let i=0;i<board.length;i++){
            cells[i].textContent=board[i]
        }
    }


    const handleCellClick=()=>{
        cells.forEach(cell=>{
            cell.addEventListener("click",()=>{
                let clickedIndex=Number(cell.dataset.index);
                GameController.PlayGround(clickedIndex)
                renderBoard();
        })
    })         
    }



    const handleStartGame=()=>{
        startBtn.addEventListener("click",()=>{
            alert("GAME BEGINS!")
            let player1name=document.getElementById("name1").value;
            let player2name=document.getElementById("name2").value;
            GameController.startGame(player1name,player2name)
            renderBoard()
        })
    }

    const reset=()=>{
        resetBtn.addEventListener("click", () => {
            GameBoard.resetBoard();
            renderBoard();
        });
    };




    const init = () => {
        handleCellClick();
        handleStartGame();
        reset();
        renderBoard();
    };

    return{init};

})();

DisplayController.init();