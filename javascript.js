const body = document.querySelector("body");
const sketchContainer = document.createElement("div");
sketchContainer.classList.add("sketchContainer");


body.appendChild(sketchContainer);
sketchContainer.setAttribute("style", "display:flex; justify-content: center; margin: 80px 0px");


//Create window to draw grids inside of 
const sketchWindow = document.createElement("div");
sketchWindow.classList.add("sketch");
sketchWindow.setAttribute("style", "background-color: lightblue; width: 400px; height: 400px; display: flex; flex-wrap: wrap; padding:0px; margin:0px; border: 1px solid lightblue");
sketchContainer.appendChild(sketchWindow);





//Function for creating grid on sketch window
let setGrid = (gridNum) => { 
    
    //Clear sketching window of grids

    if(gridNum == 0){
        while(sketchWindow.firstChild){
            sketchWindow.removeChild(sketchWindow.lastChild);
            
        }
    }

    for(let i = 0; i < Math.pow(gridNum, 2); i++){
        let grid = document.createElement("div");
        grid.setAttribute("id", "grid");
        let gridWidth = 100 / gridNum;  
        grid.addEventListener('mousemove', (e) => {
            grid.style.backgroundColor = "black";
            console.log(e);
                
        });
        grid.setAttribute("style" , `background-color: white; width: ${gridWidth}%; height: ${gridWidth}%;
        box-shadow: inset 0 0 1px black;; margin: 0px; padding: 0px;`);
        
        sketchWindow.appendChild(grid);
    }


    

};

setGrid(4);



const setGridBtn = document.createElement("button");
const btnContainer = document.createElement("div");
setGridBtn.textContent = "Set Grid";
setGridBtn.setAttribute("style", "background-color: lightyellow; padding: 20px; width 200px; height 100px; border-radius:10px;")
btnContainer.setAttribute("style", "display:flex; justify-content: center; margin: 0px;")
body.insertBefore(btnContainer, sketchContainer);   
btnContainer.appendChild(setGridBtn);


setGridBtn.addEventListener('click', (event) => {
    let num = window.prompt("Set Grid Value (1-100)");
    if(Number.isInteger(Number(num)) == true){
        setGrid(0);
        setGrid(num);
    } 
    else{
        return alert("Please enter an integer for grid size.");
    }
    
});




console.log(Number.isInteger(10));