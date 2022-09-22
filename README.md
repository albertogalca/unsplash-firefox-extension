# Steps to use this extension in Firefox

As I can't upload it to Firefox, these are the steps you have to use if you want to try it.

- Create a `.env` file in the root with the environments variables you can find inside the `default.env` file.
- Build it up the app using `yarn build` or `npm run build`.
- Open Firefox and go to `about:debugging`. Inside 'This Firefox' tab, click on _Load Temporary Add-on_. Open the `manifest.json` inside the `build` folder inside the project.
- Now open a new tab and you should see the extension working properly.

That's is, any question let me know :)
