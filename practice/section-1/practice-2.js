'use strict';

function collectSameElements(collectionA, collectionB) {
	const result = [];
	collectionA.forEach((val_A, index_A) => {
		collectionB.forEach((val_B, index_B) => {
			val_B.forEach((e, index_e) => {
				if(val_A == e){
					result.push(val_A);
				}
			});
		});
	});
	return result;
}
