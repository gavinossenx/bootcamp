fetch('https://rickandmortyapi.com/api/character/?name=smith&status=alive')
 .then(function(response) {
    response.json()
    .then((data) => {
        let i;
        for (i = 0; i < data.results.length; i++) { 
         if (data.results[i].origin.name === "Earth (C-137)") {
             familytree.push(data.results[i])
         }
        }
        console.log(familytree)
        for (i=0; i<familytree.length;i++){
        document.getElementById("names").innerText +=" "+ familytree[i].name
        document.getElementById("dimention").innerText += " " +familytree[i].origin.name
        var node = document.createElement("img");
        var image =document.getElementById("image")
        node.setAttribute("src",familytree[i].image);
        image.appendChild(node);

       
        
        
        
        
       
  }
    })
  })
  const familytree = [];