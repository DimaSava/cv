

console.log('Hi!');

$('#show_more').click(function() {
	if($(this).hasClass('active') == false) {
		$(this).addClass('active');
		$('#visible_show').slideDown( "slow", function() {
			$('#down_up').css('transform', 'rotate(180deg)');
		});
	}
	else {
		$(this).removeClass('active');
		$('#visible_show').slideUp( "slow", function() {
			$('#down_up').css('transform', 'rotate(0deg)');
		});
	}
});
document.cookie = "userName=en; expires=15/02/2018 00:00:00"

var cook_l = document.cookie.split('=')[1];
console.log(cook_l);
if (cook_l == undefined || cook_l != 'en') {
	cook_l = 'ru';
	$('#lang_ru').addClass('active_lang');
}
$('#lang_ru').click(function() {
	$('.lang').removeClass('active_lang');
	$(this).addClass('active_lang');
	document.cookie = "userName=ru; expires=15/02/2018 00:00:00";
	cook_l = 'ru';
	replaceText();
});
$('#lang_en').click(function() {
	$('.lang').removeClass('active_lang');
	$(this).addClass('active_lang');
	document.cookie = "userName=en; expires=15/02/2018 00:00:00";
	cook_l = 'en';
	replaceText();
});



$('#color_green').click(function() {
	delClassColor($(this));
	$('.corp_color').css('color', '#009688');
	$('.bg_corp_color').css('background-color', '#009688');
});
$('#color_orange').click(function() {
	delClassColor($(this));
	$('.corp_color').css('color', '#f44336');
	$('.bg_corp_color').css('background-color', '#f44336');
});
function delClassColor(el) {
	$('.span_color').removeClass('active_color');
	console.log(el);
	var el_id = $(el).attr("id");
	console.log(el_id);
	$('#'+ el_id).addClass('active_color');
}


var lang = {
	'ru': {
		kiev: 'Украина, Киев',
		skils: 'Навыки',
		language: 'Языки',
		rus: 'Русский',
		engl: 'Английский',
		ua: 'Украинский',
		my_name: 'Дмитрий',
		my_surname: 'Савчук',
		exp: 'Опыт работы',
		admin: 'html-верстальщик, администратор сайта',
		current: 'Cейчас',
		feb: 'Февраль',
		front: 'Верстальщик',
		may: 'Май',
		dec: 'Декабрь',
		jan: 'Январь',
		apr: 'Апрель',
		add_ed: 'Дополнительное образование',
		books: 'Книги',
		remote_work: 'Верстальщик (удаленная работа)',
		self: 'Самостоятельное обучение',
	}, 
	'en': {
		kiev: 'Ukraine, Kiev',
		skils: 'Skills',
		language: 'Language',
		rus: 'Russian',
		engl: 'English',
		ua: 'Ukrainian',
		my_name: 'Dmitriy',
		my_surname: 'Savchuk',
		exp: 'Work Experience',
		admin: 'html-coder, site administrator',
		current: 'Current',
		feb: 'February',
		front: 'Front End Developer',
		may: 'May',
		dec: 'December',
		jan: 'January',
		apr: 'April',
		add_ed: 'Additional education',
		books: 'Books',
		remote_work: 'html-coder, (remote work)',
		self: 'Selfeducation',
	},
};
function replaceText() {
	$('#trans_kiev').text(lang[cook_l]['kiev']);
	$('#skills').text(lang[cook_l]['skils']);
	$('#language').text(lang[cook_l]['language']);
	$('#rus').text(lang[cook_l]['rus']);
	$('#engl').text(lang[cook_l]['engl']);
	$('#ua').text(lang[cook_l]['ua']);
	$('#exp').text(lang[cook_l]['exp']);
	$('#my_name').text(lang[cook_l]['my_name']);
	$('#my_surname').text(lang[cook_l]['my_surname']);
	$('#admin').text(lang[cook_l]['admin']);
	$('#current_lang').text(lang[cook_l]['current']);
	$('#feb').text(lang[cook_l]['feb']);
	$('#front').text(lang[cook_l]['front']);
	$('#may').text(lang[cook_l]['may']);
	$('#dec').text(lang[cook_l]['dec']);
	$('#jan').text(lang[cook_l]['jan']);
	$('#apr').text(lang[cook_l]['apr']);
	$('#add_ed').text(lang[cook_l]['add_ed']);
	$('#self').text(lang[cook_l]['self']);
	$('#remote_work').text(lang[cook_l]['remote_work']);
}
