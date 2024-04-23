

fetch('http://localhost:3000/dogs')
.then(res=>res.json())
.then(data=>{
    let ul2=document.getElementById('breeds') 
        let li2=document.createElement('li')
        let details=document.getElementById('details')
        let btn=document.getElementById('btn')
        let mainImage=document.getElementById('mainImage')

    data.forEach(obj=>{
        let li2=document.createElement('li')
        
        let li=document.createElement('li')
        let image=document.createElement('img')
        let ul=document.getElementById('images') 
      
        //let mainImage=document.getElementById('mainImage')
        image.src=obj.img
        image.alt=obj.breed
        image.style.width="100px"

        image.addEventListener('click',function(){
            mainImage.src= this.src;
            keeyss(obj);

        })
        //console.log(image)
        let breedText=document.createTextNode(obj.breed)
        li2.appendChild(breedText)
      
        li.appendChild(image);
        ul.appendChild(li)
        ul.appendChild(li2)
    
    })
  function keeyss(obj){
    let keys=''
    for(let key in obj){
      
        if(key!=='img' && key !=='breed'&& key!=='id'){
            if(key === 'link'){
                keys += `${key}:<a href='${obj[key]}'>${obj[key]}</a><br>`
            }else{
            keys+=`${key}:${obj[key]}<br>`
            console.log(keys)
        }
    }}
    let details=document.getElementById('details')
let detail=document.createTextNode(keys)
details.innerHTML=keys
//details.appendChild(detail)
img.appendChild(details)
   }
  
})
function clickMe(){
  let input=prompt('please enter your breed of choice:','').toLowerCase();
let availableBreeds=[
    'Akita',
    'Affenpinscher',
    'Afghan Hound',
    'Africanis',
    'Aidi',
    'Airedale Terrier',
    'Akbash'
]
if (availableBreeds.map(breed=>breed.toLowerCase()).includes(input)){
    prompt('Please input your number:');
    alert('Thank you we will reach out shortly with a survey to determine whether you\'ll provide a suitable home for our babies')
} else {
    alert('sorry we don not have this breed at the moment:')
}

}
