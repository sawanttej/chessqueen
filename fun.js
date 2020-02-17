let queen = {
    x: 4,
    y: 0
};
//        ^
//        |
//        |
//        |
//<------ Q ------->
//        |
//        | 
//        |
//        V   

N 2
S 2
SW 3


function changedirection(steps, direction) {
    var temp;
    switch (direction) {
        case "N":
            temp = queen.y - steps;
            if(boundary(temp) == true) {
                queen.y = temp;
            }
            else {
                console.log("Outside the boundary");
            }
            console.log("direction N");
            break;

        case "S": 
        temp = queen.y + steps;
        if(boundary(temp) == true) {
            queen.y = temp;
        }
        else {
            console.log("Outside the boundary");
        }

            queen.y= queen.y + steps;
            console.log("direction S");
            break;

        case "E":
            temp = queen.y + steps;
            if(boundary(temp) == true) {
                queen.y = temp;
            }
            else {
                console.log("Outside the boundary");
            }
            queen.x = queen.x + steps;
            console.log("direction E");
            break;

        case "W":
            temp = queen.x + steps;
            if(boundary(temp) == true) {
                queen.x = temp;
            }
            else {temp = queen.x + steps;
               s    
                console.log("Outside the boundary");
            }

            queen.x = queen.X - steps;
            console.log("direction W");
            break;

        case " NE":
            temp = queen.y + steps;
            if(boundary(temp) == true) {
                queen.y = temp;
            }
            else {
                console.log("Outside the boundary");
            }

        

            queen.y = queen.y * queen.x - steps;
            console.log("direction NE");
            break;

        case " NW":
            temp = queen.y + steps;
            if(boundary(temp) == true) {
                queen.y = temp;
            }
            else {
                console.log("Outside the boundary");
            }

            queen.y = queen.y * queen.x + steps;
            console.log("direction NW");
            break;

        case " SE":
            temp = queen.y + steps;
            if(boundary(temp) == true) {
                queen.y = temp;
            }
            else {
                console.log("Outside the boundary");
            }

            queen.y = queen.y * queen.x + steps;
             console.log("direction SE");
            break;

        case " SW":
            temp = queen.y + steps;
            if(boundary(temp) == true) {
                queen.y = temp;
            }
            else {
                console.log("Outside the boundary");
            }

            queen.y = queen.y * queen.x - steps;
            console.log("direction SW");
            break;


    }
}


function boundary(position) {
    if(position > 7 || position <0) {
        return false;
    }
    else {
        return true;
    }
}
// function MoveForward(N, S, E, W, NE, NW, SE, SW)