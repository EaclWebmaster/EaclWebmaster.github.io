function toggle_visibility(e, id) 
{
	e.preventDefault();
	$("#"+id).toggle();
}

function hide_visibility(e, id)
{
	e.preventDefault();
	$("#"+id).hide();
}
