// MODEL

var initialCats = [
		{
			clickCount: 0,
			name: 'Catilicious',
			imgUrl: 'http://www.cutestpaw.com/wp-content/uploads/2011/11/HALP.jpeg',
			nicknames: ['Catty', 'Lush', 'Tilly']
		},
		{
			clickCount: 0,
			name: 'Lion',
			imgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/51/d6/e3/51d6e3dcccd3bdac300202a5a3e99de0--pretty-cats-beautiful-cats.jpg',
			nicknames: ['Grrr', 'The King']
			},
		{
			clickCount: 0,
			name: 'Kit Kat',
			imgUrl: 'https://ae01.alicdn.com/kf/HTB1Zjq5MVXXXXbDXVXXq6xXFXXXe/Animal-A-font-b-brown-b-font-cat-font-b-eyes-b-font-close-up-4.jpg',
			nicknames: ['Kitty', 'Choco', 'Coco']
			},
		{
			clickCount: 0,
			name: 'Pepper',
			imgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/88/50/2b/88502b58b2ca3509be47473044fde8cc--wink-wink-adorable-animals.jpg',
			nicknames: ['Peppep', 'Peppy']
			},
		{
			clickCount: 0,
			name: 'Snow White',
			imgUrl: 'https://s-media-cache-ak0.pinimg.com/originals/dc/34/c5/dc34c566d7537841aedbeff7fdaa93db.jpg',
			nicknames: ['Snow', 'Whitten', 'Nono']
			}
]

var Cat = function(data) {
	var self = this;
	self.clickCount = ko.observable(data.clickCount);
	self.name = ko.observable(data.name);
	self.imgUrl = ko.observable(data.imgUrl);
	self.nicknames = ko.observable(data.nicknames);

	// set cat title based on number of clicks
	self.title = ko.computed(function() {
		if(self.clickCount() >= 0 && self.clickCount() <= 5) {
			return "Newbie"
		}
		else if (self.clickCount() > 5 && self.clickCount() <= 10) {
			return "Cutie"
		}
		else if (self.clickCount() > 10 && self.clickCount() <= 25) {
			return "Cutie pie"
		}
		else if (self.clickCount() > 25 && self.clickCount() <= 50) {
			return "Picking steam"
		}
		else if (self.clickCount() > 50 && self.clickCount() <= 100) {
			return "Little wonder"
		}
		else if(self.clickCount() > 100 && self.clickCount() <= 111) {
			return "Rockstar!"
		}
		else {
			return "Go get a life!"
		}
	});
}

// VIEW MODEL

var ViewModel = function() {
	var self = this;

	self.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	self.currentCat = ko.observable(self.catList()[0]);

	// set current cat to clicked cat
	self.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};

	// increase click count for each click
	self.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
};

var vm = new ViewModel();
ko.applyBindings(vm);

// ko.applyBindings(new ViewModel());
