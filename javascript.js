const body = document.querySelector("body");
const sketchContainer = document.createElement("div");
sketchContainer.classList.add("sketchContainer");


body.appendChild(sketchContainer);
sketchContainer.setAttribute("style", "display:flex; justify-content: center; margin: 80px 0px");


//Create window to draw grids inside of 
const sketchWindow = document.createElement("div");
sketchWindow.classList.add("sketch");
sketchWindow.setAttribute("style", "background-color: lightblue; width: 400px;\
 height: 400px; display: flex; flex-wrap: wrap; padding:0px; margin:0px; border: 1px solid lightblue");
sketchContainer.appendChild(sketchWindow);


//Random Color button
// const randomColor = Math.floor(Math.random()*16777215).toString(16);
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
let randomColorSwitch = 0; 
const randomGridBtn = document.createElement("button");
randomGridBtn.textContent = "Random Colors"
randomGridBtn.setAttribute("style", "background-color: pink; padding: 20px;width 200px; height 100px; border-radius:10px;");




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
            if(randomColorSwitch == 1){
                grid.style.backgroundColor = `${getRandomColor()}`;
            }
            else{                         
            grid.style.backgroundColor = "black";
            }
                
        });
        grid.setAttribute("style" , `background-color: white; \
        width: ${gridWidth}%; height: ${gridWidth}%;
        box-shadow: inset 0 0 1px black;; margin: 0px; padding: 0px;`);
        
        sketchWindow.appendChild(grid);
    }


    

};

setGrid(16);



const setGridBtn = document.createElement("button");
const resetGridBtn = document.createElement("button");
const btnContainer = document.createElement("div");
setGridBtn.textContent = "Set Grid";
resetGridBtn.textContent = "Reset Grid";
setGridBtn.setAttribute("style", "background-color: pink; padding: 20px; \
 width 200px; height 100px; border-radius:10px;")
resetGridBtn.setAttribute("style", "background-color: pink; padding: 20px; \
 width 200px; height 100px; border-radius:10px;")
btnContainer.setAttribute("style", "display:flex; justify-content: center;\
 margin-top: 40px; gap: 40px;")
body.insertBefore(btnContainer, sketchContainer);   
btnContainer.appendChild(setGridBtn);
btnContainer.appendChild(resetGridBtn);
btnContainer.appendChild(randomGridBtn);


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

//Reset the sketch window back to white 
resetGridBtn.addEventListener('click', (e) => {
    let grids = document.querySelectorAll("#grid");
    grids.forEach((grid) => grid.style.backgroundColor = "white");

});


//Enable and disable random colors
randomGridBtn.addEventListener('click', (e) => {
    switch(randomColorSwitch)
    {
        case 0:
            randomColorSwitch = 1;
            randomGridBtn.style.backgroundColor = "#a83b3b";
            console.log("turned on")
            break;
        case 1:
            randomColorSwitch = 0;
            randomGridBtn.style.backgroundColor = "pink"
            console.log("turned off")
            break;
    }
    

});



console.log(Number.isInteger(10));