/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let Output = [];
  let newObj = {};


  transactions.forEach((element) => {
    
  });

  return Output;
}

console.log(calculateTotalSpentByCategory(
  [{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 2,
		timestamp: 16561376800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
]
));

module.exports = calculateTotalSpentByCategory;
