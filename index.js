'use-strict';


const mergeObjects = function(origin, target, addNewValues) {
	for(let propertyName in origin) {
		let newProperty = origin[propertyName];

		if(	addNewValues
			|| (target.hasOwnProperty(propertyName)
				&& typeof newProperty == typeof target[propertyName])) {
			switch(newProperty.__proto__) {
				case {}.__proto__:
					mergeObjects(newProperty, target[propertyName], true);
					break;
				default:
					target[propertyName] = origin[propertyName];
					break;
			}
		}
	}

	return target;
};


module.exports = mergeObjects;
