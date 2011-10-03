function keyval () {
	"use strict";

	var _head, _tail, _pos;
	var _keys = {};
	this.len = 0;

	this.set = function (k, v) {
		if (! _keys[k]) {
			var node = {v: v};
			
			if (this.len === 0) {
				_head = node;
				_tail = node;
				_pos = node;
			} else {
				node.p = _tail;
				_tail.n = node;
				_tail = node;
			}
			_keys[k] = node;
			
			this.len++;
		}
	};

	this.del = function (k) {
		var el;
		var tmp = _keys[k];
		
		if (tmp) {
			el = tmp.v;
			var prev = tmp.p;
			var next = tmp.n;

			if (prev) prev.n = next;
			if (next) next.p = prev;
			
			delete _keys[k];
			this.len--;
		}
		
		return el;
	};

	this.get = function (k) {
		return _keys[k];
	};

	this.itr = function () {
		if (_pos) {
			var tmp = _pos.v;
			_pos = _pos.n;
			
			return tmp;
		} else {
			_pos = _head;
			
			return;
		}
	};

	this.empty = function () {
		_keys = {};
		_head = _tail = null;
		this.len = 0;
	};
}
