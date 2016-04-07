/*Author: Jesse Rock
Site: OOMDO.com
Date: 4/1/16*/

// hide main load screen
$(window).load(function() {
	$('.loader').fadeOut(1000);
	setTimeout(function(){
		$('.home_content_splitter').addClass('close_split');
	}, 300);

});

//open navigation
$('.menu_toggle, .menu_foot span').on('click', function() {
	$('.back_video').removeClass('super_index1');
	$('.main_wrap').removeClass('super_index2');

	var screenWidth = $(window).width();
	if(screenWidth > 762){
			$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeToggle();
	}

	$('.menu_toggle, .home').removeClass('color_black');
	$('.menu_toggle, .home').addClass('color_white');
	$('.site_wrap').removeClass('warp');
	$('.site_wrap').fadeIn();
	$('.mobile_nav_container, .mobile_nav_back').toggleClass('mobile_nav_open');
	// $('.mob_nav_wrap').toggle();
	// $('.mob_nav_wrap').toggleClass('mob_nav_back');
});

//our digs btn on culture page
$(document).on('click', '.our_digs_btn', function(){
	$('.our_digs').removeClass('our_digs_btn');
	$('.team, .leadership, .our_digs').removeClass('team_btn');
	$('.team').addClass('slide_page_right');
	setTimeout(function(){
		$('.leadership').addClass('slide_page_right');
		$('.culture_title').addClass('shift_culture_title');
			$('.culture_title h1').addClass('culture_h1');
			$('.page_header').addClass('our_digs_header');
			$('.header_page_overlay').addClass('header_overlay_our_digs');
	},200);
	setTimeout(function(){
		$('.culture_display_info').fadeOut();
		$('.hide_head').hide();
		$('.culture_head_2').show();
		$('.our_digs').addClass('slide_wide');
	},400);
	setTimeout(function(){
		$('.culture_page_overlay').css('cursor', 'default');
		$('.oom_page_2 .page_content_section, .inner_page, .culture_page_overlay').addClass('white_background');
		$('.our_digs_content').delay(200).fadeIn();
	},800);
});

//leadership btn on culture page
$(document).on('click', '.leadership_btn', function(){
	$('.leadership').removeClass('leadership_btn');
	$('.team').addClass('slide_page_right');
	$('.team, .our_digs').fadeOut(1000);
	setTimeout(function(){
		$('.our_digs').addClass('slide_page_left');
		$('.culture_title').addClass('shift_culture_title');
		$('.culture_title h1').addClass('culture_h1');
		$('.page_header').addClass('leadership_header');
		$('.header_page_overlay').addClass('header_overlay_leadership');
	},200);
	setTimeout(function(){
		$('.culture_display_info').fadeOut();
		$('.hide_head').hide();
		$('.culture_head_3').show();
		$('.leadership').addClass('slide_wide_2');
	},400);
	setTimeout(function(){
		$('.culture_page_overlay').css('cursor', 'default');
		$('.oom_page_2 .page_content_section, .inner_page, .culture_page_overlay').addClass('white_background');
		oomOwners();
		$('.leadership_content').delay(200).fadeIn();
	},600);
	setTimeout(function(){
		$('.leader_img').addClass('stretch_img');
	},1000);
});

//leader hover effects
$('.leader_1').on('mouseover', function(){
	$('.leader_1 .own_name, .leader_1 .own_name p').addClass('own_info_show_left');
});
$('.leader_1').on('mouseleave', function(){
	$('.leader_1 .own_name, .leader_1 .own_name p').removeClass('own_info_show_left');
});
$('.leader_2').on('mouseover', function(){
	$('.leader_2 .own_name, .leader_2 .own_name p').addClass('own_info_show_right');
});
$('.leader_2').on('mouseleave', function(){
	$('.leader_2 .own_name, .leader_2 .own_name p').removeClass('own_info_show_right');
});

//open team page
$(document).on('click', '.team_btn', function(){
	$('.team').removeClass('team_btn');
	$('.our_digs').addClass('slide_page_left');
	$('.leadership, .our_digs').fadeOut(1000);
	setTimeout(function(){
	  $('.leadership').addClass('slide_page_left');
		$('.culture_title').addClass('shift_culture_title');
		$('.culture_title h1').addClass('culture_h1');
		$('.page_header').addClass('team_header');
		$('.header_page_overlay').addClass('header_overlay_team');
	},200);
	setTimeout(function(){
		$('.culture_display_info').fadeOut();
		$('.hide_head').hide();
		$('.culture_head_4').show();
		$('.team').addClass('slide_wide_3');
	},400);
	setTimeout(function(){
		$('.culture_page_overlay').css('cursor', 'default');
		$('.oom_page_2 .page_content_section, .inner_page, .culture_page_overlay').addClass('white_background');
		$('.team_content').delay(200).fadeIn()
		oomPeople();
	},600);
});

//close culture sub categories
$('.culture_title, .home, .page-1, .page-2, .page-3, .page-4, .page-5, .page-6').on('click', function(){
	$('.leader_img').removeClass('stretch_img');
	$('.team_content ul').empty();
	$('.team').addClass('team_btn');
	$('.our_digs').addClass('our_digs_btn');
	$('.leadership').addClass('leadership_btn');
	$('.oom_page_2 page_content_section, .inner_page, .culture_page_overlay').removeClass('white_background');
	$('.hide_head, .leadership_content, .our_digs_content').hide();
	$('.culture_title').removeClass('shift_culture_title');
	$('.culture_head_1').show();
	$('.our_digs, .leadership, .team').removeClass('slide_wide slide_wide_2	slide_wide_3 slide_page_left slide_page_right');
	$('.culture_display_info').fadeIn();
	$('.team_content').fadeOut();
	$('.culture_page_overlay').css('cursor', 'pointer');
	$('.leadership, .our_digs, .team').show();
	$('.culture_title h1').removeClass('culture_h1');
	$('.page_header').removeClass('team_header leadership_header our_digs_header');
	$('.header_page_overlay').removeClass('header_overlay_our_digs');
	$('.header_page_overlay').removeClass('header_overlay_team');
	$('.header_page_overlay').removeClass('header_overlay_leadership');
});

//oom owners
var oom_owners = [
	{name: 'Michael Donovan', description: 'Description', img: 'assets/employeePhotos/michael.png'},
	{name: 'Ryan DeBoom', description: 'Description', img: 'assets/employeePhotos/ryan.png'}
];

//oom employees
var oom_people = [
	{name: 'Jessica Baker-Colver', description: 'PPC • At OOMDO since 2013 \“I am Mrs. Luke Bryan, he just doesn’t know it yet.”', img: 'assets/employeePhotos/jessica.png'},
	{name: 'Christa Bramberger', description: 'PPC • At OOMDO since 2013 “I am Mrs. Luke Bryan, he just doesn’t know it yet.”', img: 'assets/employeePhotos/christa.png'},
	{name: 'Nik Roschko', description: 'PPC & Design • At OOMDO since 2016 I’m the tallest human alive. Seriously.', img: 'assets/employeePhotos/nik.png'},
	{name: 'Angel Rodriguez', description: 'Design • At OOMDO since 2012 The Real Foosball MVP.', img: 'assets/employeePhotos/angel.png'},
	{name: 'Kyle Franzen', description: 'Design • At OOMDO since 2013 Thinks cucumbers are a dumb vegetable.', img: 'assets/employeePhotos/kyle.png'},
	{name: 'Brian France', description: 'Design • At OOMDO since 2015 Spontaneous dance battle champ.', img: 'assets/employeePhotos/brian.png'},
	{name: 'Mike Villa', description: 'Design • At OOMDO since 2016 Eats salad while feeding everyone junk.', img: 'assets/employeePhotos/mike.png'},
	{name: 'Mark Monto', description: 'Operations • At OOMDO since 2014 “Dad jokes” extraordinare.', img: 'assets/employeePhotos/mark.png'},
	{name: 'Victoria Stamey', description: 'Account Manager • At OOMDO since 2014 Not destined to weild a NERF gun.', img: 'assets/employeePhotos/victoria.png'},
	{name: 'Julie Powers', description: 'Account Manager • At OOMDO since 2012 My alter ego is Maxwell Smart.', img: 'assets/employeePhotos/julie.png'},
	{name: 'Amanda Fortune', description: 'Social Media • At OOMDO since 2014 "likes cats more than most humans."', img: 'assets/employeePhotos/amanda.png'},
	{name: 'Kim Fagan', description: 'Copy & Social • At OOMDO since 2016 “Copy is the frozen tundra.”', img: 'assets/employeePhotos/kim.png'},
	{name: 'Tara Swahlan', description: 'Copy & Social • At OOMDO since 2014 “Copy’s a beach.”', img: 'assets/employeePhotos/tara.png'},
	{name: 'Lindsay Panzica', description: 'Copy & Social • At OOMDO since 2014 I love blogging. Really… I do.', img: 'assets/employeePhotos/lindsay.png'},
	{name: 'Lori Strow', description: 'Project Manager • At OOMDO since 2015 “Don’t make me punch you like a child.”', img: 'assets/employeePhotos/lori.png'},
	{name: 'Gary Test', description: 'SEO • At OOMDO since 2015 I can juggle, whilst windsurfing.', img: 'assets/employeePhotos/gary.png'},
	{name: 'Connor McManus', description: 'Development • At OOMDO since 2013 Kanye West is everything.', img: 'assets/employeePhotos/connor.png'},
	{name: 'Jesse Rock', description: 'Development • At OOMDO since 2016 Converts caffeine into code.', img: 'assets/employeePhotos/jesse.png'},
	{name: 'Ray Hickock', description: 'Development • At OOMDO since 2015 I really am “All-the-way-Ray.”', img: 'assets/employeePhotos/ray.png'},
	{name: 'Your Name', description: 'A new career awaits!<br>Click to view current openings', img: 'assets/employeePhotos/new_user.jpg'}
];

//oom colors
var oomColors = ['rgba(152, 255, 62, 0.8)', 'rgba(255, 182, 0, 0.8)', 'rgba(2, 219, 255, 0.8)', 'rgba(224, 0, 121, 0.8)', 'rgba(183, 15, 255, 0.8)'];

var num_of_oom_people = oom_people.length;
var num_of_oom_owners = oom_owners.length;


$(document).on('click', '.new_person', function(){
	$('.page-6').click();
});


function oomPeople(){
	$('.team_content ul').empty();
	for(i = 0; i < num_of_oom_people; i++)
	{

		var randomNum = Math.floor((Math.random() * 4) + 1);
		var randomColor = oomColors[randomNum];

		//check for the new user/career button
		if(i === num_of_oom_people - 1){
			$('.team_content ul').append('<li class="people_container new_person"><div><img src="' + oom_people[i].img + '"><div class="people_info" style="background:' + randomColor + '"><div class="center_info"><h1>' + oom_people[i].name + '</h1><p>' + oom_people[i].description + '</p></div></div></div></li>');
		}else{
			$('.team_content ul').append('<li class="people_container"><div><img src="' + oom_people[i].img + '"><div class="people_info" style="background:' + randomColor + '"><div class="center_info"><h1>' + oom_people[i].name + '</h1><p>' + oom_people[i].description + '</p></div></div></div></li>');
		}
	}
}






function oomOwners(){
	// $('.leadership_content').empty();



	for(i = 0; i < num_of_oom_owners; i++)
	{

		var randomNum = Math.floor((Math.random() * 4) + 1);
		var randomColor = oomColors[randomNum];

	}
}
