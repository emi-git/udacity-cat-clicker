var Cat = function(settings){
    this.name = settings.name;
    this.src = settings.src;
    this.clickcount = 0;
}

Cat.prototype.updateClickcount = function () {
    this.clickcount ++;
}