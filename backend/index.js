import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	next();
});
app.use(bodyParser.json());

const readJSONFile = (filename) => {
	return new Promise((resolve, reject) => {
	// get data from file
		fs.readFile(filename, 'utf8', (err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			// task list data from file
			resolve({"expenses": JSON.parse(data)})
		});
	})
}

app.get('/expenses', function (req, res) {
	readJSONFile('./data/expenses.json')
		.then(expenses => {
			res.json(expenses)
		})
})

app.listen(3008, () => {
	console.log('backend server connected')
})

