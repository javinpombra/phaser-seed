var box = function(game) {};

box.prototype = {
    type: "palette",
    width: 100,
    height: 100,
    color: "red",
    border_color: "blue",
    
    create: function(game) {
        console.log("we in here");
    },
};