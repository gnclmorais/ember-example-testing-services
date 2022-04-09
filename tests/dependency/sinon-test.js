import sinon from 'sinon';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Dependency | Sinon.JS', function (hooks) {
  setupTest(hooks);

  test('should work', function (assert) {
    // Arrange
    const spy = sinon.spy();

    // Act
    spy();

    // Assert
    assert.true(spy.calledOnce);
  });
});
