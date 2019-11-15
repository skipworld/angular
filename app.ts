let hamburguesa : string = 'Hamburguesa con queso';
const calorias  : number = 3000;
const sabor : boolean = true;
var contenido = "Hola a todos";



class Menu {
    items : Array<string>;
    display: string = '';
    constructor(item_list:Array<string>){
        this.items = item_list;
    }

    listar(){
        this.display += "Nuestro menú para hoy";
        this.display += '<ul>';
        for(let i= 0; i<this.items.length; i++){ 
            this.display += `<li>${this.items[i]}</li>`;
        }
        this.display += '</ul>';
        document.querySelector("#contenido").innerHTML = this.display;
    }
}

const items = ['Pastas','Helado','Café'];
let menu = new Menu(items);
menu.listar();