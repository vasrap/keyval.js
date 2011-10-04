<h1>keyval.js BETA</h1>
<h4>a fast key value pair library</h4>
<h3>USAGE</h3>
<pre>
// Instantiate keyval.
var kv = new keyval();

// Add 1 million key value pairs.
for (var i = 1; i &lt;= 1000000; i++) {
  // 1st arg is the key, second is the value.
  kv.set(i.toString(), i);
}

// Delete a key value pair.
kv.del('100000');

// Iterate over the key value pairs.
var tmp, foo;
while (tmp = kv.itr()) {
  // Assign the value to foo.
  foo = tmp.v;
}

// Rewind the iterator to the first key.
kv.rwd();

// Get the number of key value pairs set.
var length = kv.len;

// Empty the key value pair pool.
kv.empty();
</pre>
<h3>FEATURES</h3>
<ul>
  <li>Iterates key value associated data faster than using a JavaScript object (~10x on Chrome, ~5x on Firefox)</li>
  <li>Finds a specified key in 0ms</li>
  <li>Deletes a specified key in 0ms</li>
  <li>Provides key count in 0ms</li>
  <li>Sets key value associated data a bit slower than using a JavaScript object</li>
</ul>
<i>Benchmarked using 1 million string keys; with each one of them associated to 1 integer value</i>
<br />
<i>Tested on Chrome, Firefox (pending for the rest of the browsers)</i>
