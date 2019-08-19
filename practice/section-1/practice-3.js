'use strict';

function collectSameElements(collectionA, objectB) {
	const result = [];
	collectionA.forEach((val_A, index_A) => {
		objectB.value.forEach((val_B, index_B) => {
			if(val_A == val_B){
				result.push(val_A);
			}
		});
	});
	return result;
}
