var solve = function(board) {
     let n=board.length;
        let m=board[0].length;
        
        boundaryRow(board,0);  //identify 1st row , loop holes
        boundaryRow(board,n-1); //identify last row , loop holes
        boundaryColumn(board,0); //identify 1st column , loop holes
        boundaryColumn(board,m-1); //identify last column, loop holes
        
         for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                
                if(board[i][j]=='O')
                    board[i][j]='X';
              }
         }
        
        
         for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                
                if(board[i][j]=='P')
                    board[i][j]='O';
              }
         }
        
       
    }
    
    var boundaryRow = function(board, i){
        
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]=='O'){
                reserved(board,i,j);
            }
        }
    }
    
    
    var boundaryColumn = function( board, j){
        
        for(let i=0;i<board.length;i++){
            if(board[i][j]=='O'){
                reserved(board,i,j);
            }
        }
    }
    
    //dsf call to connected holes from boundary condition
   var reserved = function( board, i, j){
        if(i<0 || i>=board.length || j<0 || j>=board[0].length)
            return;
        
        if(board[i][j]=='X' || board[i][j]=='P')
            return;
        
        board[i][j]='P';
        reserved(board,i+1,j);
        reserved(board,i-1,j);
        reserved(board,i,j+1);
        reserved(board,i,j-1);
    }
