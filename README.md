This is a sample Angular app as an assignment for Paperfly

## how to install and run

Firstly install everything by running

```
npm i
```

Then run the JSON mock API by running

```
npm run db
```

This will make the JSON available as a simple API at localhost:3000
There is small delay (1s) in order to better emulate real application
You can change the port and delay in the `package.json`

Finally run the app as usal

```
npm run start
```

It should be available at http://localhost:4200/

In case you mess up the json somehow there's a backup

## implements

This solution implements all the main requirements and these extra ones:

- It loads data dynamically as well as saves the data in the JSON using json-server
- It applies all the settings in the tiles view
- There's a drag and drop of the tiles
- There are some animations using Material library (eg. modal loading, button ripple effects, etc.)
- There's a loading state when updating settings
- The dialog should usable on all screen sizes (but could be improved)

## Possible improvements

- Drag and drop doesn't look that nice
- it could have some snackbar when it fails to POST the data
- it could have better error state when there's an error fetching settings
- it should use scss variables to define breakpoints and colors
- modal responsivity could be better
- there's no url validation at the moment
