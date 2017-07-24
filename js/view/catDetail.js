var CatDetailView = {
    addCatToDoc: function(cat) {
        $("main").append(
            $(document.createElement("div"))
            .css({
                width: "50%",
                display: "inline-block"
            })
            .addClass("catClicker")
            .append(
                $(document.createElement("p")).text(cat.name).addClass("cat-name"),
                $(document.createElement("p")).text(cat.clickcount).addClass("cat-count"),
                $(document.createElement("img"))
                .attr({
                    src: cat.src,
                    alt: "cat"
                }).addClass("cat-pic")
                .data({
                    id: cat.name
                })
            )
        );
    },
    removeExistingCat : function(){
        $(".catClicker").remove();
    }
};