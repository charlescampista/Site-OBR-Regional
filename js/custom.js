// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

let range = document.getElementById('seletor-raio');
let valor = document.getElementById('valor-raio');

$range.addEventListener('input', function() {
	valor.textContent = this.value;
  });