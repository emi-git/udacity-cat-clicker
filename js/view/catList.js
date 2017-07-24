    var CatListView = {
        addCatListToDoc: function(cats) {
            var catsList = [];
            cats.forEach(function(currentValue, index, array) {
                catsList.push(
                    $(document.createElement("li"))
                    .text(currentValue.name)
                    .data({
                        id: currentValue.name
                    })
                    .addClass("list-cat")
                );
            });
            $("main").append(
                $(document.createElement("div")).addClass("cats-list").append(catsList)
            );
        }
    };