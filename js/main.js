let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
//khai bao
let list = document.getElementById("vglassesList");
let avatar = document.getElementById("avatar");
let info = document.getElementById("glassesInfo");

let showList = () => {
    let content = "";
    dataGlasses.map((glasse) => {
        let {id, src} = glasse;

        content += `
        <div class="col-4" onclick="changeGlass('${id}')">
        <img src="${src}" class ="img-fluid" alt="">
        </div>
        `
    })

    list.innerHTML = content;
}

showList();

let changeGlass = (id) => {
    dataGlasses.map((glasse) => {
        let { virtualImg, brand, name, color, price, description } = glasse;
        if (glasse.id === id) {
            avatar.innerHTML = `
            <img src="${virtualImg}" class="img-fluid">
           `;
           
            info.innerHTML = `
            <h2 style="color:white;font-size:25px">${name} - ${brand} (${color})<h2>
            <div>
            <span style="color:white;font-size:20px;background-color:red">$:${price}</span>
            <span style="color:green;font-size:20px;" >Stocking</span>
            </div>
            <br>
            <p style="color:white;font-size:15px">${description}</p>
            `;
            info.classList.add('d-block');
            avatar.querySelector('img').classList.add('d-block');

        }
    })
}

window.changeGlass = changeGlass;

let changeBtn = (boolean) => {
    if (boolean) {
        avatar.querySelector('img').classList.add('d-block');
        return;
    }
    avatar.querySelector('img').classList.remove('d-block');

}

window.changeBtn = changeBtn;
