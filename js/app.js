// MODEL

var Cat = function() {
	var self = this;
	self.clickCount = ko.observable(0);
	self.name = ko.observable('Catilicious');
	self.imgUrl = ko.observable('https://cdn.pixabay.com/photo/2016/08/10/02/55/kitten-1582384_960_720.jpg');
	self.nicknames = ko.observable(['Catty', 'Lush', 'Tilly']);

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
		else if(self.clickCount() > 100 && self.clickCount() <= 101) {
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
	self.currentCat = ko.observable(new Cat());

	// increase click count for each click
	self.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
};

var vm = new ViewModel();
ko.applyBindings(vm);

// ko.applyBindings(new ViewModel());
