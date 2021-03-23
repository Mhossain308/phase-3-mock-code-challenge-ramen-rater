// write your code here
const ramenMenu = document.querySelector('div#ramen-menu')


function renderAllRamens(){
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramenObject => {ramenObject.forEach(ramen => {renderOneRamen(ramen)})
 })

}

renderAllRamens()

function renderOneRamen(ramenObject) {
    const ramenImg = document.createElement('img')
    ramenImg.dataset.id = ramenObject.id

    ramenImg.src = ramenObject.image
    console.log(ramenMenu)
    ramenMenu.append(ramenImg)
   

    
}




