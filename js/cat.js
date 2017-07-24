var Cat = function (settings) {
    this.name = settings.name;
    this.src = settings.src;
    this.clickcount = 0;
}

Cat.prototype.incrementClickCount = function () {
    this.clickcount++;
}

Cat.prototype.getClickcount = function () {
    return this.clickcount;
}
