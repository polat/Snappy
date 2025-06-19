# Snappy

Snappy is a front-end UI development library created by me. It provides a collection of Sass stylesheets and jQuery components to help you quickly build responsive websites.

## Features

- **Sass Based** – Modular SCSS files with variables and mixins for easy customization.
- **Ready‑made Components** – Includes common widgets such as accordions and tabs.
- **jQuery Integrations** – Uses plugins like Magnific Popup, AOS and Toastr for interactive UI features.
- **Build Workflow** – Grunt tasks compile Sass, concatenate and minify JavaScript, optimize SVGs and start a BrowserSync development server.

## Getting Started

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Run `grunt` to start BrowserSync and watch for changes.

Compiled assets are written to the `dist/` directory:

- `dist/css/style.min.css`
- `dist/js/script.min.js`

Use these files in your HTML pages. During development you can modify the sources under `src/` and let Grunt regenerate the dist files.

## Project Structure

```
Snappy/
  dist/      # Compiled CSS, JS and assets
  src/
    js/      # JavaScript source
    sass/    # Sass source
  gruntfile.js
  package.json
```

## Grunt Tasks

- `grunt` – start BrowserSync and watch for Sass/JS changes.
- `grunt css` – compile and minify styles.
- `grunt js` – concatenate and minify scripts.
- `grunt svg` – optimize SVG icons.

## Contributing

Feel free to fork the repository and submit pull requests. The project currently does not include automated tests.

## License

This repository does not contain an explicit license file. Please contact the author before using it in a commercial project.
