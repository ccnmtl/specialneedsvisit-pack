/* global jQuery: true */

require('!file-loader?name=[name].[ext]!../static/index.html');
require('!file-loader?name=[name].[ext]!../static/img/logo-ctl.png');
require('!file-loader?name=[name].[ext]!../static/img/logo-cdm.png');

// load and apply css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/common.css';
import '../static/css/specialneedsvisit.css';

import jQuery from 'jquery';
import module from './specialneedsvisit.js';

jQuery(document).ready(function() {
    new module.SpecialNeedsVisitView({
        el: '.specialneedsvisit'
    });
});
