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

var input = document.querySelector('.url');

document.getElementById('video').addEventListener('click', () => {
	console.log(`URL: ${input.value}`);
    window.location.href = `/video?url=${input.value}`;
});
