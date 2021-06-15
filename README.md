# README

This app is an implementation of
[https://grumpy.iona.dev/](https://grumpy.iona.dev/).

This app is currently deployed in Firebase Hosting. These are the relevant urls:
- [base url](https://enatividad-cat-browser.web.app/) -
  `https://enatividad-cat-browser.web.app/`
- [Homepage](https://enatividad-cat-browser.web.app/cats) -
  `https://enatividad-cat-browser.web.app/cats`
- [Single Cat Page](https://enatividad-cat-browser.web.app/cats/tOGSsMx5J) -
  `https://enatividad-cat-browser.web.app/cats/:catId`

## Implementation Notes

- The `thecatapi.com` gives out random results when not using a registered api
  key. In particular, `/v1/images/search`'s pagination does shows duplicates
  from previous pages. Because of that, I had to implement the "Load More"
  button in a more complex way in order to remove the duplicates.
- The root page `/` redirects to `/cats`. Otherwise, this app is implemented the
  same way as [https://grumpy.iona.dev/](https://grumpy.iona.dev/).
- If connection to `thecatapi.com` fails for any reason (e.g. their server is
  offline due to maintenance), the user is alerted that this app is temporarily
  unavailable.
- This app is automatically deployed to Firebase Hosting whenever I push to the
  `master` branch of this repository.

## Dependencies

- node 12+
- yarn 1

## Development Environment Setup

- run `yarn install` from inside the project directory to install the remaining
  dependencies
- run `yarn start` to start the local development server

## License

This app was developed by Emmanuel Natividad.
Copyright © 2021, Emmanuel Natividad
