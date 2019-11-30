# merge-objects
> Merges properties of two different objects.


## Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save @fjbo-net/merge-objects
```


## Usage
```js
'use-strict';

// Let's suppose you have 2 objects:
let
originalObject = {
	make: 'VW',
	model: 'Bettle',
	color: 'blue',
	year: 2019,
	info: {
		odometer: 0,
		interior: 'black',
		sunroof: false,
	}
},
newValues = {
	make: 'Volkswagen',
	doors: 4,
	info: {
		sunroof: true,
		interior: 'Black/beige',
		packages: [
			'Premium Audio',
			'Keyless access with push-button start'
		]
	}
};

// To use merge-objects, you would have to:
// 1. Import it
const mergeObjects = require('@fjbo-net/merge-objects');

// 2. Call it
mergeObjects(
	// parameter: origin [plain object]
	newValues,
	// parameter: target [plain object]
	originalObject
);
// Will return:
//{
// 	make: 'Volkswagen',
//	model: 'Bettle',
//	color: 'blue',
//	year: 2019,
//	info:
//	{
//		odometer: 0,
//		interior: 'Black/beige',
//		sunroof: true,
//		packages: [
//			'Premium Audio',
//			'Keyless access with push-button start'
//		]
//	}
//}


mergeObjects(
	// parameter: origin [plain object]
	// Is the object that will be merged
	newValues,
	// parameter: target [plain object]
	// Is the object that will be returned,
	// with the contents of 'origin'
	originalObject,
	// parameter: addNewValues [boolean]
	// Indicates if properties that doesn't exist
	// will be added to the 'target' object.
	// Defaults to false for root properties,
	// but will be ALWAYS true for nested objects.
	true,
);
// Will return:
// {
// 	make: 'Volkswagen',
// 	model: 'Bettle',
// 	color: 'blue',
// 	year: 2019,
// 	info: {
// 		odometer: 0,
// 		interior: 'Black/beige',
// 		sunroof: true,
// 		packages: [
// 			'Premium Audio',
// 			'Keyless access with push-button start'
// 		]
// 	},
// 	doors: 4
// }
```


## About
### Author
**FJBO | Francisco Javier Becerra-Ortiz**

### License
Copyright © 2019, [FJBO](https://github.com/fjbo-net).
Released under the [MIT License](LICENSE).
