let content = document.querySelector(".mainContent");
let total  = 16*16;
// let width = content.clientWidth;
// let height = content.clientHeight;

// let cellSize = 10;

// let cols = Math.floor(width / cellSize);
// let rows = Math.floor(height / cellSize);
// let total = rows * cols;

for(i=0; i<=total; i++){
    const grid = document.createElement("div");
    grid.className ="cell";
    content.appendChild(grid);

    grid.addEventListener("mouseover", (e)=>{
        e.target.style.backgroundColor="red"
    })
}
