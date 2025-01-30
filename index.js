const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());//Enable CORS

//Endpoint to return JSON response 
app.get("/", (req, res) => {
	const response = {
		email: "diberifavour@gmail.com",
		current_datetime: new Date().toISOString(),
		github_url:"https://github.com/Molonia2002/hng-api-task"
	};

	res.json(response);
});

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Serverrunning on port ${PORT}');
});
