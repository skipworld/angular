var hamburguesa = 'Hamburguesa con queso';
var calorias = 3000;
var sabor = true;
var contenido = "Hola a todos";
var Menu = /** @class */ (function () {
    function Menu(item_list) {
        this.display = '';
        this.items = item_list;
    }
    Menu.prototype.listar = function () {
        this.display += "Nuestro menú para hoy";
        this.display += '<ul>';
        for (var i = 0; i < this.items.length; i++) {
            this.display += "<li>" + this.items[i] + "</li>";
        }
        this.display += '</ul>';
        document.querySelector("#contenido").innerHTML = this.display;
    };
    return Menu;
}());
var items = ['Pastas', 'Helado', 'Café'];
var menu = new Menu(items);
menu.listar();
