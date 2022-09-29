## TOOLING

- ESLint - react-native-community configuration
- Prettier
- Styled Components for styling and theming
- Made a design infrastructure/system from scratch
- Used React Native Paper as a component library
- React Navigation
- React Context
- AsyncStorage
- Expo Camera
- Firebase (Cloud Functions)
- Lottie
- [Google Maps Service](https://github.com/googlemaps/google-maps-services-js)
- Google Places API
- Google Geocoding API

### Camera

Camera doesn't have a service and a context file because I chose to use it locally for the settings screen only. If it were a global functionality, I would've chosen that approach.

### Firebase Functions

I couldn't connect to the local server when I wanted to test my functions. Perhaps it had something to do with me running this on WSL and tunneling my server to connect to it.
I logged my errors and found that they first stopped in the `location.service.js` file and trickled down to the `restaurant.service.js` file. The error was a `[TypeError: Network request failed]` error. I haven't found an way to resolve the error locally yet.
After I deployed the functions to the cloud, the requests started working.
