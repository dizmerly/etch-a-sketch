const body = document.querySelector("body");
const sketchContainer = document.createElement("div");
sketchContainer.classList.add("sketchContainer");


body.appendChild(sketchContainer);
sketchContainer.setAttribute("style", "display:flex; justify-content: center; margin: 80px 0px");



const sketchWindow = document.createElement("div");
sketchWindow.classList.add("sketch");
sketchWindow.setAttribute("style", "background-color: lightblue; width: 400px; height: 400px; display:flex; flex-wrap: wrap;");
sketchContainer.appendChild(sketchWindow);

const setGridBtn = document.createElement("button");
const btnContainer = document.createElement("div");
setGridBtn.textContent = "Set Grid";
setGridBtn.setAttribute("style", "background-color: lightyellow; padding: 20px; width 200px; height 100px; border-radius:10px;")
btnContainer.setAttribute("style", "display:flex; justify-content: center; margin: 0px;")
body.insertBefore(btnContainer, sketchContainer);   
btnContainer.appendChild(setGridBtn);


let setGrid = (gridNum) => {
    
    for(let i = 0; i < gridNum; i++){
        let grid = document.createElement("div");
        let gridWidth = (sketchWindow.offsetWidth / (gridNum / Math.round(Math.sqrt(gridNum)))) - 2;

        grid.setAttribute("style" , `background-color: blue; width: ${gridWidth}px; height: ${gridWidth}px;
         border: 1px solid lightblue; margin: 0px; padding: 0px;`);

        sketchWindow.appendChild(grid);
    }
    
    
};

setGrid(81);

