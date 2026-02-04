
// зробив по фану і вийшло ось так:
function color(params) {
    let user = +prompt("enter number to choose the color: 1 for Red, 2 for Green, 3 for Blue");
    let userConfirm = confirm("do u want to continue?");
    

    
        switch(user){
            case 1:
                console.log("Red");
                break;
            case 2:
                console.log("Green");
                break;
            case 3:
                console.log("Blue");
                break;
            default: 
                console.log("Invalid input");
        }
    
    
    if (userConfirm === true){
        return color();
    }  else {
        console.log("Thank you for using the color chooser!");
    }

}
color();