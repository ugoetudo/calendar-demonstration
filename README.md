# Learning React: A Simple Calendar Build

## Setting up a Parcel Project for React.js
First install parcel in your project
`npm install parcel`

Next, scaffold an empty application using parcel:
```sh
npm create parcel react-client my-app-name
```

See the docs for more:
https://parceljs.org/getting-started/webapp/

## Tailwind CSS in Parcel
https://v3.tailwindcss.com/docs/guides/parcel

```sh
npm install -D tailwindcss@3 postcss
npx tailwindcss init
```
Create a new file `.postcssrc`. In the `.postcssrc` file, add the following:

```json
{
    "plugins": {
        "tailwindcss": {}
    }
}
```

After you ran `npx tailwindcss init` earlier, you may have noticed that a `tailwind.config.js` file was created for you. Edit that file so that it looks like this:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Go to `src/App.css` and add the following directives to the beginning of the file. Also, delete the boilerplate CSS in that file. It was created by Parcel and we'll write custom styles:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can now begin using Tailwind Styles in your project.