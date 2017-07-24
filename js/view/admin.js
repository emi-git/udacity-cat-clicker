var AdminView = {
    showFlag: false,
    init: function() {
        this.$adminContent = $(".admin-content");
        this.$adminBtnElem = $("#adminBtn");
        this.$cancelBtn = $("#admin-cancel");
        this.$saveBtn = $("#admin-save");
        this.$nameInput = $("#admin-name");
        this.$urlInput = $("#admin-url");
        this.$countInput = $("#admin-count");
        var that = this;
        this.$adminBtnElem.click(function() {
            //show admin content
            that.$adminContent.toggle();
            //render data 
            that.render();
        });
        this.$saveBtn.click(function() {
            //call octopus to save data
            octopus.updateCat({
                    name: that.$nameInput.val(),
                    src: that.$urlInput.val(),
                    clickcount: that.$countInput.val()
                })
                //hide admin Content
            that.$adminContent.toggle();
            //update catListView
            CatListView.render();
            //update catDetailView
            CatDetailView.renderAll();
        });
        this.$cancelBtn.click(function() {
            that.$adminContent.toggle();
        });
        that.$adminContent.toggle(false);
    },
    //get data and update DOM Elements
    render: function() {
        var cat = octopus.getCurrentCat();
        this.$nameInput.val(cat.name);
        this.$urlInput.val(cat.src);
        this.$countInput.val(cat.clickcount);
    }
};