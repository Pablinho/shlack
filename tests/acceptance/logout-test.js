import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /teams and clicking "Logout"', async function(assert) {
    await visit('/teams');
    await click('.team-sidebar__logout-button');

    assert.equal(currentURL(), '/login');
  });
});
