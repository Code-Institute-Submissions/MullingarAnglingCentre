$("div.fishdescription").text(function(index, currentText) {
    return currentText.substr(0, 175);
});