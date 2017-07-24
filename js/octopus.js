$(document).ready(function() {

    $("main").on("click", ".list-cat", function(e) {
        CatDetailView.removeExistingCat();
        //place the new cat
        var $catli = $(e.target);
        var catName = $catli.data("id");
        var i = 0;
        var currentCat;
        for (i = 0; i < cats.length; i++) {
            if (cats[i].name === catName) {
                currentCat = cats[i];
                break;
            }
        }
        CatDetailView.addCatToDoc(cats[i]);
    });
    $("main").on("click", ".cat-pic", function(e) {
        var $catimg = $(e.target);
        var catName = $catimg.data("id");
        var i = 0;
        var currentCat;
        for (i = 0; i < cats.length; i++) {
            if (cats[i].name === catName) {
                currentCat = cats[i];
                break;
            }
        }
        currentCat.updateClickcount();
        $catimg.siblings(".cat-count").text(currentCat.clickcount);
    })

    var cats = [
        new Cat({ name: "Bujo", src: "img/624175845_8b1aab1f72_n.jpg" }),
        new Cat({ name: "Princess", src: "img/624215185_6ee2b029b5_n.jpg" }),
        new Cat({ name: "Black", src: "img/625049770_852d817de9_n.jpg" }),
        new Cat({ name: "White", src: "img/625069434_db86b67df8_n.jpg" }),
        new Cat({ name: "Momo", src: "img/625112530_b0c88f4dac_n.jpg" })
    ]
    CatListView.addCatListToDoc(cats);
});