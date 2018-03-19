var bgSize, bgColor, objSize, objColor;
var c, ctx;

$(function(){
	$('.picker-color').colorpicker( { format: 'hex' })
		.on('changeColor.colorpicker', function(event){
			reGen();
		});
	c = document.getElementById("finish-bg");
	ctx = c.getContext("2d");

	bgSize = $('#sizeBg').val();
	bgColor = $('#colorBg').val();
	objSize = $('#sizeObj').val();
	objColor = $('#colorObj').val();

	reGen();

	$('input[name="pattern"]').change( function() {
		$('.lblPattern-checked').removeClass('lblPattern-checked');
		//$('input[name="pattern"]:checked').addClass('lblPattern-checked');
		console.log("label[for='pattern-" + $('input[name=pattern]:checked').val() + "']");
		$("label[for='pattern-" + $('input[name=pattern]:checked').val() + "']").addClass('lblPattern-checked'); 
	});
	$('.genValue, input[name="pattern"]').change( function() {
		reGen();
	});
	$('.txtPickerColor').focusout( function() {
		if($('#colorBg').val().length==7)
			reGen();
		else 
			setTimeout(function() { reGen(); }, 100);
	});

	var button = document.getElementById('btn-download');
	button.addEventListener('click', function (e) {
	    var dataURL = c.toDataURL('image/png');
	    button.href = dataURL;
	});
});

function reGen() {
	if($('#sizeBg').val()=="") {
		$('#sizeBg').val(bgSize);
	} else if(parseInt($('#sizeBg').val())<$('#sizeBg').attr('min')) {
		$('#sizeBg').val($('#sizeBg').attr('min'));
	}  else if(parseInt($('#sizeBg').val())>$('#sizeBg').attr('max')) {
		$('#sizeBg').val($('#sizeBg').attr('max'));
	} 
	if($('#colorBg').val()=="") {
		$('#colorBg').val(bgColor);
	} 
	if($('#sizeObj').val()=="") {
		$('#sizeObj').val(objSize);
	} else if(parseInt($('#sizeObj').val())>$('#sizeObj').attr('max')) {
		$('#sizeObj').val($('#sizeObj').attr('max'));
	} else if(parseInt($('#sizeObj').val())<$('#sizeObj').attr('min')) {
		$('#sizeObj').val($('#sizeObj').attr('min'));
	} 
	if($('#colorObj').val()=="") {
		$('#colorObj').val(objColor);
	}

	bgSize = $('#sizeBg').val();
	bgColor = $('#colorBg').val();
	objSize = $('#sizeObj').val();
	objColor = $('#colorObj').val();

	$('#sizeBg').attr('min', objSize);
	$('#sizeObj').attr('max', bgSize);

	c.width = bgSize;
	c.height = bgSize;

	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, bgSize, bgSize);

	if($('input[name="pattern"]:checked').val()=='dot') {
		drawCircle();
	} else if($('input[name="pattern"]:checked').val()=='strip') {
		drawVerticalLine();
	} else if($('input[name="pattern"]:checked').val()=='strip2') {
		drawHorizontalLine();
	} else if($('input[name="pattern"]:checked').val()=='checked') {
		drawVerticalLine();
		drawHorizontalLine();
	}

	$('#preview-area').css( {'background-image': 'url(' + c.toDataURL() + ')' });
}

function drawCircle() {
	ctx.beginPath();
	ctx.arc(bgSize/2, bgSize/2, objSize/2, 0, 2 * Math.PI, false);
	ctx.fillStyle = objColor;
	ctx.fill();
	ctx.lineWidth = 0;
	ctx.strokeStyle = objColor;
	ctx.stroke();
}

function drawVerticalLine() {
		ctx.beginPath();
		ctx.moveTo(bgSize/2, 0);
		ctx.lineWidth = objSize;
		ctx.strokeStyle = objColor;
		ctx.lineTo(bgSize/2, bgSize);
		ctx.stroke();
}

function drawHorizontalLine() {
		ctx.beginPath();
		ctx.moveTo(0, bgSize/2);
		ctx.lineWidth = objSize;
		ctx.strokeStyle = objColor;
		ctx.lineTo(bgSize, bgSize/2);
		ctx.stroke();
}