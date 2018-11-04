const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon'

});

connection.connect(function (err) {

    if (err) throw err;

    console.log('Connected to Bamazon!');

    showItems();

})

function showItems() {
    connection.query("SELECT * FROM products", function (err, res) {

        if (err) throw err;
        createTable(res);
        buyStuff();

    }
    )
}


function createTable(res) {

    var table = [];
    for (var i = 0; i < res.length; i++) {

        table.push({

            'Product ID': res[i].item_id,
            'Product Name': res[i].product_name,
            'Department': res[i].department_name,
            'Price': res[i].price,
            'Stock Quantity': res[i].stock_quantity
        })
    }

    console.log(table);

}

function buyStuff() {

    inquirer.prompt([{
		name: 'item_id',
		message: 'Welcome to Bamazon! Please select the ID of the product you want to buy!'
	}, {
		name: 'quantity',
		message: 'How much would you like to buy?'
	}]).then(function(answer) {
		connection.query('SELECT * FROM `products` WHERE ?', {
			item_id: answer.item_id
		}, function (err, res) {
			if (err) throw err;
			var products = res[0].product_name;
			var quantity = res[0].stock_quantity;
			var total = res[0].price * answer.quantity;
		
			if (answer.quantity <= quantity) {
				
				var remainingProduct = quantity - answer.quantity;
				connection.query("UPDATE products SET ? WHERE ?", [{
						stock_quantity: remainingProduct
					}, {
						item_id: answer.item_id
					}], function(err, res) {
						if (err) throw err;
				
						inquirer.prompt([{
							name: 'return',
							message: 'Purchase complete!\nItem: ' + products + '\nQuantity: ' + answer.quantity + '\nTotal: $' + total,
							type: 'list',
							choices: ['Return']
						}]).then(function(answer) {
							showItems();
						});
					}
				);
			} else {
				inquirer.prompt([{
					name: 'error',
					message: 'Error - Not enough in stock',
					type: 'list',
					choices: ['Return']
				}]).then(function(answer) {
					displayAll();
				});
			}
		});
	});
}
    






