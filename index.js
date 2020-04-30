const ytdl = require('ytdl-core');
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get('/video', (request, response) => {
	var url = request.query.url;
	response.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(url).pipe(response);
});

const listener = app.listen(process.env.PORT || 5000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});