var input = document.querySelector('.url');

document.getElementById('video').addEventListener('click', () => {
	console.log(`URL: ${input.value}`);	
    window.location.href = `/video?url=${input.value}`;
});