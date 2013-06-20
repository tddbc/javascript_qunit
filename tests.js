module("QUnit の使い方");


test( "assert.ok の使い方", function(assert) {
  var truth = true;
  assert.ok(truth, "assert.ok は引数が truthy であるかどうかを検証します");

  var falsy = null;
  assert.ok(!falsy);
});


// QUnit の assert.equal 系は引数の順番が actual, expected の順(JUnit の逆)なので注意してください

test( "equal, notEqual の使い方", function(assert) {
  assert.equal('hoge', 'hoge');
  assert.equal(1, '1', 'equal は == を使います');
  assert.notEqual('foo', 'bar');
});


test( "strictEqual, notStrictEqual の使い方", function(assert) {
  assert.strictEqual('1', '1');
  assert.notStrictEqual(1, '1', 'strictEqual は === を使います');
});


test( "deepEqual, notDeepEqual の使い方", function(assert) {
  var ary = ['foo', 'bar'];
  assert.deepEqual(ary.map(function(str){return str.toUpperCase();}), ['FOO', 'BAR'], 'Array の比較を行えます');

  var o1 = {name: 'foo', age: 20};
  var o2 = {age: 20, name: 'foo'};
  assert.deepEqual(o1, o2, 'オブジェクト同士の比較もできます');

  var o3 = {name: 'bar', age: 32};
  assert.notDeepEqual(o1, o3);
});


test( "例外のテストの書き方", function(assert) {
  assert.throws(function () {
      throw new Error('例外');
  }, 'throws で例外が投げられることをテストできます');
});
