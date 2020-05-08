// Copyright 2020 Khushraj Rathod
//
// This file is part of YoutubeDownloader.
//
// YoutubeDownloader is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// YoutubeDownloader is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with YoutubeDownloader.  If not, see <https://www.gnu.org/licenses/>.


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
