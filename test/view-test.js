/* global before: true, describe: true, it: true */

var assert = require('chai').assert;
var jQuery = require('jquery');
var module = require('../src/specialneedsvisit');

function waitFor(testFx, doneFx, millis) {
    var timeout = millis ? millis : 3000; // Default Max Timout is 3s
    var start = new Date().getTime();

    var interval = setInterval(function() {
        var condition = testFx();

        if (condition) {
            clearInterval(interval);
            doneFx();
        } else if ((new Date().getTime() - start >= timeout)) {
            clearInterval(interval);
            doneFx(new Error('timeout occurred'));
        }
    }, 250); //< repeat check every 250ms
}

describe('SpecialNeedsVisitTest', function() {
    var view;

    before(function() {
        var el = jQuery('.specialneedsvisit');
        assert.equal(el.length, 1, 'el is defined');

        view = new module.SpecialNeedsVisitView({el: el});
    });

    describe('interaction', function() {
        it('initialized', function() {
            assert.isFalse(jQuery('.activity-complete').is(':visible'));
        });

        it('click item', function() {
            var $panel = view.$el.find('.panel').first();
            assert.equal($panel.length, 1, 'Panel is defined');

            var $heading = $panel.find('.panel-heading').first();
            var $link = $heading.find('a').first();
            var $icon = $link.find('.glyphicon');

            assert.equal($heading.length, 1, 'Heading is defined');
            assert.equal($link.length, 1, 'Link is defined');
            assert.equal($icon.length, 1, 'Icon is defined');

            assert.isFalse($heading.hasClass('visited'));
            assert.isTrue($icon.hasClass('glyphicon'));

            $link.click();
        });

        it('item is complete', function(done) {
            var $heading = view.$el.find('.panel-heading').first();
            waitFor(function() {
                return $heading.hasClass('visited');
            }, done, 1000);
        });

        it('activity is complete', function() {
            assert.isTrue(jQuery('.activity-complete').is(':visible'));
        });
    });
});
