Special Needs Dental Visit: Standalone Interactive Exercise 
==========

[![Greenkeeper badge](https://badges.greenkeeper.io/ccnmtl/specialneedsvisit-pack.svg)](https://greenkeeper.io/)
Over the course of one's career as an oral health care provider the opportunity to meet individuals from all stages and stations in life will be great. Included among these individuals exists a category of persons whose health care needs are often neglected...persons with disabilities or special health care needs. While this occurs for varying reasons it is clear that even the process of identifying this group can be daunting. Persons with special needs encompass such a wide range of unique characteristics that the term “disability” does not have a single definition. While there is little doubt that this population has a significant economic impact on health care estimating its depth and breadth is often dependent on the definition used to classify the disability.

This interactive is a small piece of the larger Special Needs module of [PASS](https://pass.ccnmtl.columbia.edu), a population-based approach to patient services and professional success. PASS was a five-year project to build a website with tools to educate pre-doctoral dental students about patient populations and how demographics play into decision of building a successful dental practice. The PASS content and interactives are being migrated to a sustainable home in the Health Resources and Services Administration [Train](https://www.train.org/) environment.

This and other interactives were developed by the Columbia University [College of Dental Medicine](http://dental.columbia.edu/) in collaboration with the Columbia University [Center ror Teaching & Learning (CTL)](http://ctl.columbia.edu).

REQUIREMENTS
------------
npm
webpack

DEV INSTALLATION
------------
1. Clone the repository
2. Type make runserver. This command will install the necessary npm modules, build the bundle and spin up Webpack's dev server.
3. Navigate to http://localhost:8080.
4. Play around with the interactive!

NPM INSTALLATION
------------
1. npm install specialneedsvisit-pack
2. ./node_modules/webpack/webpack.js --output-path <output_path> --config ./node_modules/specialneedsvisit-pack/webpack.config.js
3. Embed the interactive via an iframe.

```
<code>
    <iframe src="<server>/<output_path>/index.html"></iframe>
</code>
```

#### Configuration
The interactive will alert the user on page navigation if the activity is not yet complete. To turn off this behavior, add a ```quiet=1``` parameter to the url. For example:

```
<code>
    <iframe src="<server>/<output_path>/?quiet=1"></iframe>
</code>
```
