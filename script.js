const myTable = document.createElement("table");

for(let i = 0; i < 11; i ++){
    const tr = document.createElement("tr");
    tr.classList.add("p-tr");
    

    for(let j = 0; j < 11; j++){
        const td = document.createElement("td");
        td.innerText = `${i * j}`;

        tr.append(td);
    
        if (i === 0 || j === 0)  {
        td.innerText = "";
        td.style.display = "none";
        }
        
    }


    myTable.append(tr);
}


const body = document.querySelector("body");
body.append(myTable);
