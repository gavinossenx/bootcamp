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
          function addCharacterToHtml(){
            var node = document.createElement("div")
            var img = document.createElement("img")
            var character = document.getElementById('characters')
            character.appendChild(node)
            node.appendChild(img)
            img.setAttribute("src",familytree[i].image)
            node.insertAdjacentText("beforebegin","Name:"+familytree[i].name+"|"+"Origin:"+familytree[i].origin.name+"|"+"Status"+familytree[i].status+"|"+"Species:"+familytree[i].species)
          }addCharacterToHtml()
        }
    })  
  }) 
  const familytree = [];
  