// Get jquery objects from DOM
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];
var imgSelector = $("#my-file-selector")[0];
var refreshbtn = $("#refreshbtn")[0];
var randombtn = $("#randombtn")[0];
// Register event listeners
imgSelector.addEventListener("change", function () {
    pageheader.innerHTML = "Please wait a moment..."; /**TODO: Add jquery loading plugin? */
    processImage(function (file) {
        //Get tags based on image (Pic analyzing API)
        sendTagRequest(file, function (tags) {
            var allTags = tags.tags;
            pageheader.innerHTML = allTags;
            sendQuoteRequest(allTags, function (quote) {
                pageheader.innerHTML = quote;
            });
            changeUI();
        });
    });
});
function processImage(callback) {
    var file = imgSelector.files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
    }
    else {
        console.log("Invalid file");
    }
    reader.onloadend = function () {
        if (!file.name.match(/\.(jpg|jpeg|png)$/)) {
            pageheader.innerHTML = "Please upload an image file (jpg or png).";
        }
        else {
            //if file is valid photo it sends the file reference back up
            callback(file);
        }
    };
}
refreshbtn.addEventListener("click", function () {
    // Load random song based on mood
    alert("You clicked the button"); //can demo with sweetAlert plugin
});
randombtn.addEventListener("click", function () {
    pageheader.innerHTML = "Random";
});
// Manipulate the DOM
function changeUI() {
    //Display song refresh button
    refreshbtn.style.display = "inline";
}
function sendTagRequest(file, callback) {
    $.ajax({
        url: "https://api.projectoxford.ai/vision/v1.0/describe",
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "a42ca3a903954538a8d4ba53fb98b416");
        },
        type: "POST",
        data: file,
        processData: false
    })
        .done(function (data) {
        var tags = data.description;
        callback(tags);
    })
        .fail(function (error) {
        alert("fail!");
        pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
        console.log(error.getAllResponseHeaders());
    });
}
function sendQuoteRequest(file, callback) {
    $.ajax({
        url: "https://favqs.com/api/",
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Authorization", "Token token=b045822845282381895618db496667d7");
        },
        type: "GET",
    })
        .done(function (data) {
        alert("SUCCESSS!!!");
        var tags = data.description;
        callback(tags);
    })
        .fail(function (error) {
        alert("fail!");
        pageheader.innerHTML = "Sorry, something went wrong. :( Try again in a bit?";
        console.log(error.getAllResponseHeaders());
    });
}
