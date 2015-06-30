$(document).ready(function() {
	var parrafo_uno = $('div.sections div.container div.row:nth-of-type(5) div.span8 > p:nth-child(1)')
	
	var sugerencia = "Obama has since his first days in the White House seemed to be 
	searching for an American exceptionalism that felt true to his life experience. 
	<span style='background-color:yellow;'>As a new president, he dismissed the very idea, noting that Greeks and the 
	Brits think their countries are special, too.</span> Five years later, and a little 
	grayer, Obama summed up his feelings on the subject differently. “I believe in 
	American exceptionalism with every fiber of my being,” he told graduating cadets 
	at the U.S. Military Academy."

	parrafo_uno.innerHTML = sugerencia;

});