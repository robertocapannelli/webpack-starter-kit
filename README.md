# Webpack Starter kit
A simple webpack starter kit that could further be customized according with your needs.

# Usage
Install all npm dependencies running.
```
npm install
```
For development run
```
npm start
```
this command will open your browser and you'll see live changes during your development, inspecting the code you won't see any assets because are placed in memory.

If you want to go in production and create your minified files to upload run the following command:
```
npm run build
```
This command will also generate an index.html under the dist folder with all dependencies included automatically.
Files name are generated with an hash following the name, something like "filename_hashxxxxhash.ext" this will avoid cache busting.
