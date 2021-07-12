o2.request =
{

	init()
	{
		$('#_request__telefon').mask("+7(999)999-9999",{autoclear: false});
	},



	textareaFocus(_this)
	{
		let message = $(_this).parent().children('._active');
		$(message).css('display', 'inline-flex')
	},

	textareaBlur(_this)
	{
		let message = $(_this).parent().children('._active');
		$(message).css('display', 'none')
	},

	fileAdd(_this)
	{

		let file = $('#file').change(function(e){
			let value = (e.target);
			if(value)
			{
				$('._request__file-text').css('display', 'none');

				for (var i = 0; i < value.files.length; i++)
				{
					let name = value.files[i].name;
					$('._request__file-name').append(`<div class="request__file"><span>${name}</span><button onclick="o2.request.deleteFile(this)"><img src="svg/del.svg"></button></div>`)
				}

			}
		});
	},
	deleteFile(_this)
	{	
		let parent = $(_this).parent();
		$(parent).remove()

		let leng= $('._request__file-name').find('._request__file');

		if(leng.length < 1)
		{
			$('._request__file-text').css('display', 'inline-block');
		}
	},

	btnSubmit(_this)
	{
		let input = $('._request__input'),
			textarea = $('._request__textarea'),
			s = 0;

		for(let i = 0; i < input.length; i++)
		{
			if($(input[i]).val() === "")
			{
				$(input[i]).css('border', '2px solid #DC1020')
				$(input[i]).parent().children('._massage').addClass('_active'),
				s++;
			}else{
				$(input[i]).css('border', 'none');
				$(input[i]).parent().children('._massage').removeClass('_active');
			}
		}

		if(s > 0)
		{
			$('html').animate({
				scrollTop : 0
			}, 800)
		}

		if(textarea.val() == "")
		{
			textarea.css('border', '2px solid #DC1020');
			textarea.parent().children('._massage').addClass('_active');

			if(s === 0)
			{
				$('html').animate({
					scrollTop : textarea.offset().top
				}, 800)
			}
		}else{
			textarea.css('border', 'none');
			textarea.parent().children('._massage').removeClass('_active');
		}
	}



}


