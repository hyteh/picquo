// Get jquery objects from DOM
var pageheader = $("#page-header")[0];
var appname = $("#app-name")[0];
var imgSelector = $("#my-file-selector")[0];
var tryAgainbtn = $("#tryAgainbtn")[0];
var randombtn = $("#randombtn")[0];
var home = $("#home")[0];
var edit = $("#edit")[0];
var editor = $("#editor")[0];
//Initialize Pretty Social jQuery Plugin
$('.prettySocial').prettySocial();
//Initialize tooltip
(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
//Initialize quotes
var Quote = (function () {
    function Quote(name, body) {
        this.author = name;
        this.quote = body;
    }
    return Quote;
}());
var quotesList = [];
var person = [];
var people = [];
var man = [];
var boy = [];
var woman = [];
var girl = [];
var child = [];
var smiling = [];
var animal = [];
var couple = [];
var food = [];
var coffee = [];
var computer = [];
var city = [];
var building = [];
var outdoor = [];
var nature = [];
var flower = [];
var sunny = [];
var rain = [];
var sky = [];
var dark = [];
person.push(new Quote("Jamie Redknapp", "I am a positive person and do not allow things to get on top of me."));
person.push(new Quote("Elisabetta Canalis", "In the past I would self destruct when it came to love - I was immature, throwing myself into things but now times have changed, I want a relationship where you understand the other person."));
person.push(new Quote("Eleanor Roosevelt", "Never allow a person to tell you no who doesn't have the power to say yes."));
people.push(new Quote("Marcel Proust", "Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom."));
people.push(new Quote("John Wooden", "Whatever you do in life, surround yourself with smart people who'll argue with you."));
people.push(new Quote("Hubert H. Humphrey", "The greatest gift of life is friendship, and I have received it."));
man.push(new Quote("David Brinkley", "A successful man is one who can lay a firm foundation with the bricks others have thrown at him."));
man.push(new Quote("Voltaire", "Man is free at the moment he wishes to be."));
man.push(new Quote("Godfrey Winn", "No man succeeds without a good woman behind him. Wife or mother, if it is both, he is twice blessed indeed."));
boy.push(new Quote("Cesare Pavese", "A man is never completely alone in this world. At the worst, he has the company of a boy, a youth, and by and by a grown man - the one he used to be."));
boy.push(new Quote("Krista Allen", "Men are amazing. I love the way they are. They're consistently little boys, and they need to be nurtured and loved. But at the same time, they need to feel like men."));
boy.push(new Quote("Jon Stewart", "I'm not just a boy toy. I have feelings and dreams like anybody else."));
woman.push(new Quote("Audrey Hepburn", "The beauty of a woman must be seen from in her eyes, because that is the doorway to her heart, the place where love resides."));
woman.push(new Quote("Chanakya", "The world's biggest power is the youth and beauty of a woman."));
woman.push(new Quote("Audrey Hepburn", "The beauty of a woman is not in the clothes she wears, the figure that she carries or the way she combs her hair."));
girl.push(new Quote("Hedy Lamarr", "My mother always called me an ugly weed, so I never was aware of anything until I was older. Plain girls should have someone telling them they are beautiful. Sometimes this works miracles."));
girl.push(new Quote("Anne Roiphe", "A woman whose smile is open and whose expression is glad has a kind of beauty no matter what she wears."));
girl.push(new Quote("Julianne Hough", "I think every girl needs to love herself, regardless of anything. Like if you're having a bad day, if you don't like your hair, if you don't have the best family situation, whatever, you have to love yourself and you can't do anything until you love yourself first."));
child.push(new Quote("Kailash Satyarthi", "Childhood means simplicity. Look at the world with the child's eye - it is very beautiful."));
child.push(new Quote(" Pablo Picasso", "Every child is an artist. The problem is how to remain an artist once we grow up."));
child.push(new Quote("Don Miguel Ruiz", "Just imagine becoming the way you used to be as a very young child, before you understood the meaning of any word, before opinions took over your mind. The real you is loving, joyful, and free. The real you is just like a flower, just like the wind, just like the ocean, just like the sun."));
smiling.push(new Quote("Dr. Seuss", "Don't cry because it's over. Smile because it happened."));
smiling.push(new Quote("Mark Twain", "Wrinkles should merely indicate where smiles have been."));
smiling.push(new Quote("John Ray", "Beauty is power a smile is its sword."));
smiling.push(new Quote("Leonardo da Vinci", "I love those who can smile in trouble, who can gather strength from distress, and grow brave by reflection. 'Tis the business of little minds to shrink, but they whose heart is firm, and whose conscience approves their conduct, will pursue their principles unto death."));
animal.push(new Quote("Tony Snow", "Pet lovers know that animals sometimes understand us better than we do, and the annals of human sin and desire provide plenty of stories to drive the point home."));
animal.push(new Quote("George Eliot", "Animals are such agreeable friends - they ask no questions they pass no criticisms."));
animal.push(new Quote("Roger Caras", "Dogs are not our whole life, but they make our lives whole."));
couple.push(new Quote("Anthony J. D'Angelo", "Treasure your relationships, not your possessions."));
couple.push(new Quote("Mahatma Gandhi", "Where there is love there is life."));
couple.push(new Quote("Anais Nin", "Age does not protect you from love. But love, to some extent, protects you from age."));
food.push(new Quote("Rodney Dangerfield", "I'm at the age where food has taken the place of sex in my life. In fact, I've just had a mirror put over my kitchen table."));
food.push(new Quote("Katharine McPhee", "I have an amazing relationship with food."));
food.push(new Quote("E. M. Forster", "The main facts in human life are five: birth, food, sleep, love and death."));
coffee.push(new Quote("Anne Morrow Lindbergh", "Good communication is just as stimulating as black coffee, and just as hard to sleep after."));
coffee.push(new Quote("Jim Carrey", "I wake up some mornings and sit and have my coffee and look out at my beautiful garden, and I go, 'Remember how good this is. Because you can lose it.'"));
coffee.push(new Quote("Emo Philips", "When I wake up in the morning, I just can't get started until I've had that first, piping hot pot of coffee. Oh, I've tried other enemas."));
computer.push(new Quote("Scott Weiland", "Computers and the Internet have made it really easy to rant. It's made everyone overly opinionated."));
computer.push(new Quote("Eric Schmidt", "People assume that computers will do everything that humans do. Not good. People are different from each other and they are all really different from computers."));
computer.push(new Quote("Debbie Harry", "But computers have changed the world for everyone, so there will be some way of working it out."));
city.push(new Quote("Mark Twain", "Language is a city to the building of which every human being brought a stone."));
city.push(new Quote("Simon Pegg", "There's this thing of you can live in a city and be completely alone, not notice anything going on around you."));
city.push(new Quote("Donna Karan", "I love building spaces: architecture, furniture, all of it, probably more than fashion. The development procedure is more tactile. It's about space and form and it's something you can share with other people."));
building.push(new Quote("Noel Coward", "The higher the building the lower the morals."));
building.push(new Quote("Thomas a Kempis", "The loftier the building, the deeper must the foundation be laid."));
building.push(new Quote("Arthur Erickson", "Architecture doesn't come from theory. You don't think your way through a building."));
outdoor.push(new Quote("Larry Wilcox", "Another thing I like to do is sit back and take in nature. To look at the birds, listen to their singing, go hiking, camping and jogging and running, walking along the beach, playing games and sometimes being alone with the great outdoors. It's very special to me."));
outdoor.push(new Quote("Laurieann Gibson", "I personally love to run outdoor fitness trails. I love the meditative value I get when out alone, challenging myself to run faster and higher."));
outdoor.push(new Quote("Audrey Hepburn", "I'm an introvert... I love being by myself, love being outdoors, love taking a long walk with my dogs and looking at the trees, flowers, the sky."));
nature.push(new Quote("Jimmy Carter", "It is good to realize that if love and peace can prevail on earth, and if we can teach our children to honor nature's gifts, the joys and beauties of the outdoors will be here forever."));
nature.push(new Quote("Michael Pollan", "The garden suggests there might be a place where we can meet nature halfway."));
nature.push(new Quote("Isaac Bashevis Singer", "What nature delivers to us is never stale. Because what nature creates has eternity in it."));
flower.push(new Quote("Luther Burbank", "Flowers always make people better, happier, and more helpful they are sunshine, food and medicine for the soul."));
flower.push(new Quote("Hans Christian Andersen", "Just living is not enough. One must have sunshine, freedom, and a little flower."));
flower.push(new Quote("John Lennon", "Love is the flower you've got to let grow."));
sunny.push(new Quote("David Hockney", "Shadows sometimes people don't see shadows. The Chinese of course never paint them in pictures, oriental art never deals with shadow. But I noticed these shadows and I knew it meant it was sunny."));
sunny.push(new Quote("Henry Adams", "The Indian Summer of life should be a little sunny and a little sad, like the season, and infinite in wealth and depth of tone, but never hustled."));
sunny.push(new Quote("Helen Keller", "Keep your face to the sunshine and you cannot see the shadow."));
rain.push(new Quote("Rabindranath Tagore", "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky."));
rain.push(new Quote("Langston Hughes", "Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby."));
rain.push(new Quote("Dolly Parton", "The way I see it, if you want the rainbow, you gotta put up with the rain."));
sky.push(new Quote("K.D.Lang", "The sky is an infinite movie to me. I never get tired of looking at what's happening up there."));
sky.push(new Quote("Bob Dylan", "No one is free, even the birds are chained to the sky."));
sky.push(new Quote("MC Hammer", "I always believe that the sky is the beginning of the limit."));
dark.push(new Quote("Marthin Luther King Jr.", "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."));
dark.push(new Quote("Plato", "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."));
dark.push(new Quote("Mark Twain", "Everyone is a moon, and has a dark side which he never shows to anybody."));
//All quotes
quotesList.push(person);
quotesList.push(people);
quotesList.push(man);
quotesList.push(boy);
quotesList.push(woman);
quotesList.push(girl);
quotesList.push(smiling);
quotesList.push(animal);
quotesList.push(couple);
quotesList.push(food);
quotesList.push(coffee);
quotesList.push(computer);
quotesList.push(city);
quotesList.push(building);
quotesList.push(outdoor);
quotesList.push(nature);
quotesList.push(flower);
quotesList.push(sunny);
quotesList.push(rain);
quotesList.push(sky);
quotesList.push(dark);
var refreshQuote = [];
// Register event listeners
imgSelector.addEventListener("change", function () {
    window.location.hash = '#home';
    pageheader.innerHTML = "Please wait for a moment...";
    $.LoadingOverlay("show"); //Start jQuery loading plugin
    processImage(function (file) {
        sendTagRequest(file, function (tags) {
            $.LoadingOverlay("hide"); //Stop jQuery loading plugin
            var allTags = tags.tags;
            getQuoteArray(allTags, function (quoteArray) {
                refreshQuote = quoteArray; //To get array of quotes to return when user clicks Try Again
                tryAgainbtn.style.display = "inline"; //Display try again button
                changeUI(quoteArray);
            });
        });
    });
});
tryAgainbtn.addEventListener("click", function () {
    window.location.hash = '#home';
    changeUI(refreshQuote);
});
randombtn.addEventListener("click", function () {
    window.location.hash = '#home';
    changeUI(quotesList);
});
//Check to see if file is valid
function processImage(callback) {
    var file = imgSelector.files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
    }
    else {
        console.log("Invalid file");
        $.LoadingOverlay("hide");
    }
    reader.onloadend = function () {
        if (!file.name.match(/\.(jpg|jpeg|png)$/)) {
            pageheader.innerHTML = "Please upload an image file (jpg or png).";
            $.LoadingOverlay("hide");
        }
        else {
            //if file is valid image it sends the file reference back up
            callback(file);
        }
        //Set background as the uploaded image on edit container
        edit.style.backgroundImage = "url(" + reader.result + ")";
        edit.style.backgroundSize = "contain";
    };
}
//Get quote based on file uploaded
function getQuoteArray(tags, callback) {
    var quotes = [];
    for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
        var tag = tags_1[_i];
        if (tag == 'person') {
            quotes.push(person);
        }
        else if (tag == 'people') {
            quotes.push(people);
        }
        else if (tag == 'man') {
            quotes.push(man);
        }
        else if (tag == 'boy') {
            quotes.push(boy);
        }
        else if (tag == 'woman') {
            quotes.push(woman);
        }
        else if (tag == 'girl') {
            quotes.push(girl);
        }
        else if (tag == 'child') {
            quotes.push(child);
        }
        else if (tag == 'smiling') {
            quotes.push(smiling);
        }
        else if (tag == 'animal') {
            quotes.push(animal);
        }
        else if (tag == 'couple') {
            quotes.push(couple);
        }
        else if (tag == 'food') {
            quotes.push(food);
        }
        else if (tag == 'coffee') {
            quotes.push(coffee);
        }
        else if (tag == 'computer') {
            quotes.push(computer);
        }
        else if (tag == 'city') {
            quotes.push(city);
        }
        else if (tag == 'building') {
            quotes.push(building);
        }
        else if (tag == 'outdoor') {
            quotes.push(outdoor);
        }
        else if (tag == 'nature') {
            quotes.push(nature);
        }
        else if (tag == 'flower') {
            quotes.push(flower);
        }
        else if (tag == 'sunny') {
            quotes.push(sunny);
        }
        else if (tag == 'rain') {
            quotes.push(rain);
        }
        else if (tag == 'sky') {
            quotes.push(sky);
        }
        else if (tag == 'dark') {
            quotes.push(dark);
        }
    }
    callback(quotes);
}
//Get quote and author to display 
function getQuote(quoteArray) {
    if (quoteArray.length == 0) {
        var quoteCategory = quotesList[Math.floor(Math.random() * quoteArray.length)];
        var displayQuote = quoteCategory[Math.floor(Math.random() * quoteCategory.length)];
        return ('"' + displayQuote.quote + ' ' + '" -' + displayQuote.author);
    }
    else {
        var quoteCategory = quoteArray[Math.floor(Math.random() * quoteArray.length)];
        var displayQuote = quoteCategory[Math.floor(Math.random() * quoteCategory.length)];
        return ('"' + displayQuote.quote + ' ' + '" -' + displayQuote.author);
    }
}
function postQuote(quote) {
    var postQuote = getQuote(quote);
    pageheader.innerHTML = postQuote;
    edit.innerHTML = postQuote;
    window.location.hash = '#edit';
}
// Manipulate the DOM
function changeUI(quoteArray) {
    postQuote(quoteArray);
    pageheader.style.fontSize = "56px";
}
//API call to get image tags
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
//API call to get photo editor
var PhotoEditorSDK;
var controlsOptions;
window.onload = function () {
    var container = editor;
    var editir = new PhotoEditorSDK.UI.ReactUI({
        container: container,
        assets: {
            baseUrl: 'photoeditor/assets'
        }
    });
};
