function keyval () {
	this.head = null; this.tail = null;
	this.length = 0; this.keys = {};
	this.pos = null;

	this.setKey = function (key, val) {
		if (this.keys[key]) return;

		var node = {val: val};
		
		if (this.length === 0) {
			this.head = node;
			this.tail = node;
			this.pos = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		this.keys[key] = node;
		
		this.length++;
	};

	this.deleteKey = function (key) {
		var el = null;
		tmp = this.keys[key];

		if (tmp) {
			el = tmp.val;
			var prev = tmp.prev;
			var next = tmp.next;

			if (prev) prev.next = next;
			if (next) next.prev = prev;
			
			delete this.keys[key];
			this.length--;
		}

		return el;
	};

	this.getKey = function (key) {
		return this.keys[key];
	};

	this.iterate = function () {
		if (this.pos) {
			var tmp = this.pos.val;
			this.pos = this.pos.next;

			return tmp;
		} else {
			this.pos = this.head;

			return null;
		}
	};

	this.empty = function () {
		this.keys = {};
		this.head = this.tail = null;
		this.length = 0;
	};
}
