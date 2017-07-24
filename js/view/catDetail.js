var CatDetailView = {

    //init variables, set event, call render
    init: function () {
        // store pointers to our DOM elements for easy access later
        this.catElem = $('.catClicker');
        this.catNameElem = $('.cat-name');
        this.catImageElem = $('.cat-img');
        this.countElem = $('.cat-count');
        //add event listener
        this.catElem.on("click", ".cat-img", function (e) {
            octopus.incrementCounter();
        })

        this.renderAll();

    },
    //update DOM elements
    renderAll: function () {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.renderCount(currentCat.clickcount);
        this.renderName(currentCat.name);
        this.renderImg(currentCat.src);
    },
    renderCount: function (count) {
        this.countElem.text(count);
    },
    renderImg: function (src) {
        this.catImageElem.attr({ src: src });
    },
    renderName: function (name) {
        this.catNameElem.text(name);
    }
};