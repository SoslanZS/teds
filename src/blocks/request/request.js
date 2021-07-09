o2.request =
{

	init()
	{
		$('#_request__telefon').mask("+7(999)999-9999");
		console.log($('#file')[0].files.length)
	},

	inputFocus(_this)
	{
		placeholder = $(_this).siblings();

		$(placeholder).css('top', '16px');
		$(placeholder).css('font-size', '12px');
	},

	inputBlur(_this)
	{
		if(!$(_this).val())
		{
			placeholder = $(_this).siblings();

			$(placeholder).css('top', '27px');
			$(placeholder).css('font-size', '17px');
		}
	},

	fileAdd(_this)
	{

		let file = $('#file').change(function(e){
			let value = $(this).get(0).files().text();
			console.log(value)
			if(value)
			{
				$('._request__file-text').css('display', 'none')
			}
		});
	}
} 