var CatListView = {
    //init variables, set event, call render
    init: function () {
        // store the DOM element for easy access later
        this.catListElem = $("#cat-list");
        this.catListElem.on("click", ".cat-item", function (e) {
            // get the current Cat and call Octopus to set to model
            //call CatDetailView.render();
            var currentCat = octopus.getCatbyName($(e.target).data("id"));
            octopus.setCurrentCat(currentCat);
            CatDetailView.renderAll();
        });
        this.render();
    },

    //update DOM elements
    render: function () {
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();
        var catsList = [];
        // empty the cat list
        this.catListElem.empty();

        cats.forEach(function (currentValue, index, array) {
            catsList.push(
                $(document.createElement("li"))
                    .text(currentValue.name)
                    .data({
                        id: currentValue.name
                    })
                    .addClass("cat-item"));
        });
        this.catListElem.append(catsList);
    },
};