'use strict';

function collectSameElements(collectionA, collectionB) {
	const result = [];
	collectionA.forEach((val_A, index) => {
		collectionB.forEach((val_B, index) => {
			if(val_A == val_B){
				result.push(val_A);
			}
		});
	});
	return result;
}
