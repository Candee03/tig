const cards = [
    {
        titulo: "title-card1",
        text: "txt-card1",
        imgCard: src="../img/cards-seguros/card-NS1.png",
        imgCardPhone: src="../img/cards-seguros/card-NS1-phone.png",
        imgLogo: src="../img/logos/card1-mini.png",
        imgLogoGrande: src="../img/logos/card1.png",
    },
    {
        titulo: "title-card2",
        text: "txt-card2",
        imgCard: src="../img/cards-seguros/card-NS2.png",
        imgCardPhone: src="../img/cards-seguros/card-NS2-phone.png",
        imgLogo: src="../img/logos/card2-mini.png",
        imgLogoGrande: src="../img/logos/card2.png",
    },
    {
        titulo: "title-card3",
        text: "txt-card3",
        imgCard: src="../img/cards-seguros/card-NS3.png",
        imgCardPhone: src="../img/cards-seguros/card-NS3-phone.png",
        imgLogo: src="../img/logos/card3-mini.png",
        imgLogoGrande: src="../img/logos/card3.png",
    },
    {
        titulo: "title-card4",
        text: "txt-card4",
        imgCard: src="../img/cards-seguros/card-NS4.png",
        imgCardPhone: src="../img/cards-seguros/card-NS4-phone.png",
        imgLogo: src="../img/logos/card4-mini.png",
        imgLogoGrande: src="../img/logos/card4.png",
    },
    {
        titulo: "title-card5",
        text: "txt-card5",
        imgCard: src="../img/cards-seguros/card-NS5.png",
        imgCardPhone: src="../img/cards-seguros/card-NS5-phone.png",
        imgLogo: src="../img/logos/card5-mini.png",
        imgLogoGrande: src="../img/logos/card5.png",
    },
    {
        titulo: "title-card6",
        text: "txt-card6",
        imgCard: src="../img/cards-seguros/card-NS6.png",
        imgCardPhone: src="../img/cards-seguros/card-NS6-phone.png",
        imgLogo: src="../img/logos/card6-mini.png",
        imgLogoGrande: src="../img/logos/card6.png",
    },
];
const contenedorCards = document.getElementById("section-cards")

const pintarCards = () => {
    contenedorCards.innerHTML= ""

    cards.forEach((card) => {
        const contMyCard = document.createElement("div")
        contMyCard.classList.add("mycard")

        contMyCard.innerHTML=`
        <div class="card-on">
            <div class="cont-card-on">
                <img src="${card.imgCard}" class="card-img" alt="">
                <img src=${card.imgCardPhone} class="card-img-phone" alt="">
                <img src="${card.imgLogo}" alt="" class="logo">
                <span class="title-card" lng=${card.titulo}></span>
            </div>
        </div>
        <div class="card-off">
            <div class="cont-card-off">
                <div class="cont-titulo">
                    <img src="${card.imgLogoGrande}" alt="" class="logo2">
                    <span class="title-card" lng=${card.titulo}></span>
                </div>
                <p class="text-card" lng=${card.text}></p>
            </div>
            <div class="cont-btn-card">
                <a class="btn-card" href="contact.html" lng="boton-card"></a>
            </div>
        </div>
        `
        contenedorCards.appendChild(contMyCard)

        // contMyCard.addEventListener("click", () => {
        //     contMyCard.className.split(' ').length > 1? contMyCard.className = "mycard" : contMyCard.className = "mycard info"
        // })

        contMyCard.addEventListener("mouseover", () => contMyCard.className = "mycard info")
        contMyCard.addEventListener("mouseout", () => contMyCard.className = "mycard")
    });
}

pintarCards()