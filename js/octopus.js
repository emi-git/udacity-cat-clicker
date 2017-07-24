var octopus = {
    //init model and view
    init: function() {
        model.currentCat = model.cats[0];
        CatListView.init();
        CatDetailView.init();
        AdminView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },
    getCats: function() {
        return model.cats;
    },
    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        var currentCat = this.getCurrentCat();
        currentCat.incrementClickCount();
        CatDetailView.renderCount(currentCat.getClickcount());
    },
    getCatbyName: function(catname) {
        var cat;
        var cats = model.cats;
        for (var i = 0; i < cats.length; i++) {
            if (cats[i].name === catname) {
                cat = cats[i];
                break;
            }
        }
        return cat;
    },
    // set newcat attribute to currently-selected cat
    updateCat: function(newcat) {
        var cats = this.getCats();
        var currentCat = this.getCurrentCat();
        var index;
        for (var i = 0; i < cats.length; i++) {
            if (currentCat.name === cats[i].name) {
                index = i;
                break;
            }
        };
        model.cats[index] = Object.assign(new Cat({}), model.cats[index], newcat);
        this.setCurrentCat(model.cats[index]);
    }
};

octopus.init();