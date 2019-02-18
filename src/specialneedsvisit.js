/* global module: true */

var jQuery = require('jquery');
window.jQuery = window.$ = jQuery;
var Backbone = require('backbone');
var _ = require('underscore');
require('bootstrap');

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var SpecialNeedsVisitView = Backbone.View.extend({
    events: {
        'click .btn-print': 'onPrint',
        'shown.bs.collapse .panel-group': 'onShowAnswer',
        'hidden.bs.collapse .panel-group': 'onHideAnswer'
    },
    initialize: function(options) {
        _.bindAll(
            this, 'onShowAnswer', 'onHideAnswer',
            'maybeComplete', 'onPrint', 'beforeUnload');
        jQuery(this.el).find('.panel-group').collapse({toggle: false});
        this.total = jQuery(this.el).find('.panel-heading').length;
        jQuery(this.el).show();

        var quiet = getUrlParameter('quiet') === '1';
        if (!quiet) {
            jQuery(window).on('beforeunload', this.beforeUnload);
        }
    },
    maybeComplete: function() {
        var clicked = jQuery(this.el).find('.panel-heading.visited').length;
        if (clicked === this.total) {
            jQuery('.activity-complete').show();
        } else {
            jQuery('.activity-complete').hide();
        }
    },
    onShowAnswer: function(evt) {
        var $heading = jQuery(evt.target).prev();
        $heading.addClass('visited');
        $heading.find('.glyphicon').removeClass('glyphicon-chevron-right')
            .addClass('glyphicon-chevron-down');
        this.maybeComplete();
    },
    onHideAnswer: function(evt) {
        if (jQuery(this.el).is(':visible')) {
            var $heading = jQuery(evt.target).prev();
            $heading.find('.glyphicon').removeClass('glyphicon-chevron-down')
                .addClass('glyphicon-chevron-right');
        }
    },
    onPrint: function(evt) {
        window.print();
    },
    beforeUnload: function() {
        if (jQuery('.activity-complete:hidden').length > 0) {
            return 'The activity is not complete. ' +
                'Your progress will not be saved if you leave this page.';
        }
    }
});

module.exports.SpecialNeedsVisitView = SpecialNeedsVisitView;
