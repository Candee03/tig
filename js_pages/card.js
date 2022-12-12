const cards = document.getElementsByClassName('mycard')

for (const card of cards){
    card.addEventListener('click', () => {
        if(card.className.split(' ').length > 1){
            card.className = "mycard"
        }else{
            card.className = "mycard info"
        }
    })
} 