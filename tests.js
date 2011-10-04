var tests = {
	test1: function () {
		var kv = new keyval();
		
		// Set some key value pairs.
		for (var i = 1; i <= 100; i++) {
			kv.set(i.toString(), i);
		}

		// Delete half of the key value pairs.
		for (i = 1; i <= 100; i++) {
			if (i % 2 === 0) {
				kv.del(i.toString());
			}
		}

		// Iterate over the key value pairs.
		var tmp, cnt = 0;
		kv.rwd(); while (tmp = kv.itr()) cnt++;

		// Test if the above actions resulted to -
		// the expected results.
		if ((cnt === 50 &&
			kv.len === 50 &&
			kv.get("49").n.v === 51 &&
			kv.get("49").p.v === 47) === false)

			return false;
		
		// Test delete head.
		var foo;
		while (--i > 0) {
			foo = kv.del(i.toString());
		}
		if (foo === 1) return true; else return false;
	}
}
