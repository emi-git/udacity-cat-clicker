var Cat = function(settings){
    this.name = settings.name;
    this.src = settings.src;
    this.clickcount = 0;
}

Cat.prototype.setClickcount = function () {
    this.clickcount ++;
}