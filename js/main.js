$(document).ready(function() {
    function addCatToDoc(cat) {
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
                $(document.createElement("img")).attr({
                    src: cat.src,
                    alt: "cat"
                }).addClass("cat-pic").data({
                    id: cat.name
                })
            )
        );
    };


    var cats = [
        new Cat({ name: "Bujo", src: "img/624175845_8b1aab1f72_n.jpg" }),
        new Cat({ name: "Princess", src: "img/624215185_6ee2b029b5_n.jpg" })
    ]

    cats.forEach(function(currentValue, index, array) {
        addCatToDoc(currentValue);
    });

    $(".cat-pic").click(function(e) {
        var $catimg = $(e.target);
        var catName = $catimg.data("id");
        var i = 0;
        var currentCat;
        for (i = 0; i < cats.length; i++) {
            if(cats[i].name === catName){
                currentCat = cats[i];
                break;
            }
        }
        currentCat.clickcount ++;
        $catimg.siblings(".cat-count").text(currentCat.clickcount);
    });


});