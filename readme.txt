RACING Front End Exercise
-------------------------

Notes:
-----
1. 
.js files has been blocked by my email provider.
Therefore, following files needs to be renamed (.txt to .js)
- gulpfile.txt
- fn-race-header.txt
- fn-race-ranking.txt

2. 
In case you want to modify some css styles, open css folder and styles.scss
Open a terminal and type 'gulp' in order to compile the css (be sure you have node and gulp installed)
(css/.scss >to> css/.css >to> build/.min.css)

3. Tested in all evergreen browsers (Chrome, Firefox, Opera, Safari, IE). Pixel perfect or very nearly.

Step 1 (hardcoded static data)
-----------------------------
To complete Step 1 I spent at about 3 hours.

Step 2 (dynamic json data)
--------------------------
To complete Step 2 I spent at about 3 hours.


Techonologies used:
-------------------
- HTML5
- SASS/SCSS to compile to CSS
- Gulp: to automate processes (generate css and minified css, which enhaces the performance of the website)
- Bootstrap: used of this framework to code easily the responsive styles and typography.
- Javascript: I used native javascript to all the logic. Even though no framework such as Angular/React has been used, at the end they are all based in javascript.
- AJAX: Asynchronous Javascript to render each race.

Pending Enhacements:
--------------------
- Minify js files: by use of gulp (same like scss to css)
- Loader: this should be an animated gif which is static in my project.
- Dynamic load: all the content is rendered at the same time. However, best practise is to render each race independently whilst showing other loaders, which means that its data is still fetching from JSON and generating.