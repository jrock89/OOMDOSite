/*Author: Jesse Rock
Site: Transmission Menu Navigation
Date: 4/1/16*/

$('.main_wrap').on('scroll', function(){
			//
			// var foot_in_view = isScrolledIntoView($('.inner_foot'));
			// if(foot_in_view){
			// 	$('.home_content_splitter').removeClass('close_split');
			// }
			//
			// if($('.main_wrap').scrollTop() === 0){
			// 	$('.home_content_splitter').addClass('close_split');
			// }
		});

function isScrolledIntoView(elem)
{
    var $elem = elem;
    var $window = $('.main_wrap');

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.innerHeight();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.innerHeight();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


// hover menu bar - background white non-transparent
$('.menu_bar, .who_page_overlay').on('mouseover', function(){
	$('.who_page .who_page_overlay').removeClass('slide_this_right slide_this_left');
});

//yellow contact button on navigation menu
$('.the-button, .page-contact, .contact_page_foot').on('click', function() {
	$('.back_video').addClass('super_index1');
	$('.main_wrap').addClass('super_index2');
	$('.site_wrap').toggleClass('warp');
	$('.site_wrap').fadeToggle(900);
	$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeToggle();
	// $('.menu_toggle, .home').removeClass('color_white');
	// $('.menu_toggle, .home').addClass('color_black');
	$('.menu_toggle i,.home i').addClass('menu_items_back');
});


//**************************  MY ************************** FUNCTIONS **************************
function removeAllShiftClasses() {
	$('.shifter').removeClass('shift_dwn_full shift_dwn_mid shift_up_mid shift_up_full shift_left_mid shift_left_full shift_right_mid shift_right_full shift_neutral');
}

function removeAllTransClasses() {
	$('.oom_page').removeClass('page_trans_horz_right page_trans_horz_mid page_trans_horz_left page_trans_vert_full page_trans_vert_mid page_trans_vert_bottom');
}

function scrollPagesTop() {
	$('.oom_page').scrollTop(0);
}

function menuWindowClose(colorShow, colorHide) {

		$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeOut();
		// $('.menu_toggle, .home').addClass('color_' + colorShow);
		// $('.menu_toggle, .home').removeClass('color_' + colorHide);
		$('.menu_bar').fadeIn();
		$('.main_wrap').scrollTop(0);
		scrollPagesTop();


	}
function checkNeutral(){
	$('.shifter').addClass('shift_neutral_left');
	setTimeout(function(){
		$('.shifter').removeClass('shift_neutral_left');
		$('.shifter').addClass('shift_neutral_right');
	},200);
	setTimeout(function(){
		$('.shifter').removeClass('shift_neutral_right');
		$('.shifter').addClass('shift_neutral_left');
	},400);
	setTimeout(function(){
		$('.shifter').removeClass('shift_neutral_left');
		$('.shifter').addClass('shift_neutral_right');
	},600);
	setTimeout(function(){

		$('.shifter').removeClass('shift_neutral_right shift_neutral_left');
	},800);
}


	//**************************  HOME ************************** ACTIONS **************************
$('.home, .home_foot').on('click', function() {






	$('.menu_toggle i, .home i').show();
	// $('.navTrigger').show();

	$('.menu_toggle i,.home i').removeClass('menu_items_back');
	$('.site_wrap').removeClass('warp');
	$('.site_wrap').fadeIn();
	$('.back_video').removeClass('super_index1');
	$('.main_wrap').removeClass('super_index2');

$('.home_content_splitter').addClass('close_split');
setTimeout(function(){
	$('.desktop_home img').addClass('underline_desktop_img');

}, 1000);
	$('.home i, .menu_toggle i').removeClass('blackOutMenu');
	$('.menu_bar').hide();


	removeAllShiftClasses();
	removeAllTransClasses();
	$('.menu_toggle, .home').removeClass('color_black');
	$('.menu_toggle, .home').addClass('color_white');
	if ($('.shifter').attr('data-pos') === '0') {
		$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeOut();
		$('.menu_toggle, .home').addClass('color_white');
		$('.menu_toggle, .home').removeClass('color_black');
	}
	if ($('.shifter').attr('data-pos') === '0') {

			$('.main_wrap').scrollTop(0);
	}


	if ($('.shifter').attr('data-pos') !== '0') {
		if(screenWidth > 762){

			setTimeout(function(){
				$('.menu_toggle i').addClass('font_explode');
			}, 2200);
			setTimeout(function(){
				$('.menu_toggle i').removeClass('font_explode');
			}, 2400);
			setTimeout(function(){
				$('.menu_toggle i').addClass('font_explode');
			}, 2600);
			setTimeout(function(){
				$('.menu_toggle i').removeClass('font_explode');
			}, 2800);
		}
	}







	//page 1 to home
	if ($('.shifter').attr('data-pos') === '1') {
		if(screenWidth < 762){
			$('.menu_toggle, .home').hide();
		}
		$('.oom_page_1').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_left_full shift_dwn_mid');
		setTimeout(function() {
			removeAllTransClasses();
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			$('.shifter').addClass('shift_right_mid');
		}, 450);
		setTimeout(function() {
			$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeOut();
			$('.menu_toggle, .home').addClass('color_white');
			$('.menu_toggle, .home').removeClass('color_black');
$('.mob_nav_wrap').fadeIn();
		}, 900);
		$('.shifter').attr('data-pos', '0');
	}
	//page 2 to home
	if ($('.shifter').attr('data-pos') === '2') {
		$('.oom_page_2').addClass('page_trans_vert_full');
		$('.shifter').addClass('shift_dwn_mid');
		$('.shifter').attr('data-pos', '0');
		setTimeout(function() {
			$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeOut();
			$('.menu_toggle, .home').addClass('color_white');
			$('.menu_toggle, .home').removeClass('color_black');
			$('.mob_nav_wrap').fadeIn();
		}, 450);
	}
	//page 3 to home
	if ($('.shifter').attr('data-pos') === '3') {
		$('.oom_page_3').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_right page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_mid');
		}, 450);
		setTimeout(function() {
			$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeOut();
			$('.menu_toggle, .home').addClass('color_white');
			$('.menu_toggle, .home').removeClass('color_black');
			$('.mob_nav_wrap').fadeIn();
		}, 900);
		$('.shifter').attr('data-pos', '0');
	}
	//page 4 to home
	if ($('.shifter').attr('data-pos') === '4') {
		$('.oom_page_4').addClass('page_trans_horz_mid page_trans_vert_bottom');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_left_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			$('.shifter').addClass('shift_right_mid');
		}, 450);
		setTimeout(function() {
			$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeOut();
			$('.menu_toggle, .home').addClass('color_white');
			$('.menu_toggle, .home').removeClass('color_black');
			$('.mob_nav_wrap').fadeIn();
		}, 900);
		$('.shifter').attr('data-pos', '0');
	}
	//page 5 to home
	if ($('.shifter').attr('data-pos') === '5') {
		$('.oom_page_5').addClass('page_trans_vert_bottom');
		$('.shifter').addClass('shift_up_mid');
		$('.shifter').attr('data-pos', '0');
		setTimeout(function() {
			$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeOut();
			$('.menu_toggle, .home').addClass('color_white');
			$('.menu_toggle, .home').removeClass('color_black');
			$('.mob_nav_wrap').fadeIn();
		}, 450);
	}
	//page 6 to home
	if ($('.shifter').attr('data-pos') === '6') {
		$('.oom_page_6').addClass('page_trans_vert_bottom page_trans_horz_mid');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_right page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_mid');
		}, 450);
		setTimeout(function() {
			$('.nav_container, .nav_contain_back, .top_row_nav, .bottom_row_nav, .warp_speed').fadeOut();
			$('.menu_toggle, .home').addClass('color_white');
			$('.menu_toggle, .home').removeClass('color_black');
			$('.mob_nav_wrap').fadeIn();
		}, 900);
		$('.shifter').attr('data-pos', '0');
	}
});
//**************************  PAGE 1 ************************** ACTIONS **************************
$('.page-1').click(function(e) {
	if(screenWidth < 762){
		$('.menu_toggle, .home').show();
	}
	$('.menu_toggle i, .home i').show();
	$('.navTrigger').hide();
	$('.home_content_splitter').removeClass('close_split');
	$('.menu_toggle i,.home i').addClass('menu_items_back');
	$('.desktop_home img').removeClass('underline_desktop_img');
	$('.mob_nav_wrap').fadeOut();

	if ($('.shifter').attr('data-pos') !== '1') {
		removeAllShiftClasses();
		removeAllTransClasses();

	}
	//page home to 1
	if ($('.shifter').attr('data-pos') === '0') {
		// $('.main_wrap, .back_video').addClass('page_trans_horz_right');
		$('.oom_page_space_left').addClass('page_trans_horz_mid');
		$('.oom_page_1').addClass('page_trans_horz_mid');
		$('.shifter').addClass('shift_left_full');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_bottom');
			$('.oom_page_1').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_up_full');
		}, 450);
		setTimeout(function() {
			menuWindowClose('black', 'white');

		}, 900);
		$('.shifter').attr('data-pos', '1');
	}
	//page 2 to 1
	if ($('.shifter').attr('data-pos') === '2') {
		$('.oom_page_2').addClass('page_trans_vert_full page_trans_horz_mid');
		$('.shifter').addClass('shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_mid');
			$('.oom_page_1').addClass('page_trans_horz_mid');
			$('.shifter').addClass('shift_left_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_bottom');
			$('.oom_page_1').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_left_full shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '1');
	}
	//page 3 to 1
	if ($('.shifter').attr('data-pos') === '3') {
		$('.oom_page_3').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_right page_trans_vert_mid');
			$('.oom_page_space_right').addClass('page_trans_horz_mid');
			$('.oom_page_3').addClass('page_trans_horz_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_full shift_up_mid');
			$('.oom_page_space_left').addClass('page_trans_horz_mid');
			$('.oom_page_1').addClass('page_trans_horz_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_bottom');
			$('.oom_page_1').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_left_full shift_up_full');
		}, 900);
		setTimeout(function() {}, 1350);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1800);
		$('.shifter').attr('data-pos', '1');
	}
	//page 4 to 1
	if ($('.shifter').attr('data-pos') === '4') {
		$('.oom_page_4').addClass('page_trans_horz_mid page_trans_vert_bottom');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.oom_page_1').addClass('page_trans_horz_mid');
		$('.shifter').addClass('shift_left_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_bottom');
			$('.oom_page_1').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_left_full shift_up_full');
		}, 450);
		$('.shifter').attr('data-pos', '1');
	}
	//page 5 to 1
	if ($('.shifter').attr('data-pos') === '5') {
		$('.oom_page_5').addClass('page_trans_vert_bottom');
		$('.shifter').addClass('shift_up_mid');
		setTimeout(function() {
			$('.shifter').addClass('shift_left_full');
			$('.oom_page_space_left').addClass('page_trans_horz_mid');
			$('.oom_page_1').addClass('page_trans_horz_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_bottom');
			$('.oom_page_1').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_left_full shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '1');
	}
	//page 6 to 1
	if ($('.shifter').attr('data-pos') === '6') {
		$('.oom_page_6').addClass('page_trans_vert_bottom page_trans_horz_mid');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_up_mid');
		setTimeout(function() {
			removeAllTransClasses();
			$('.oom_page_space_left').addClass('page_trans_horz_mid');
			$('.oom_page_1').addClass('page_trans_horz_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_bottom');
			$('.oom_page_1').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '1');
	}
});
//**************************  PAGE 2 ************************** ACTIONS **************************
$('.page-2').click(function(e) {
	if(screenWidth < 762){
		$('.menu_toggle, .home').show();
	}
	$('.menu_toggle i, .home i').show();
	$('.navTrigger').hide();
	$('.home_content_splitter').removeClass('close_split');
	$('.menu_toggle i,.home i').addClass('menu_items_back');
	$('.desktop_home img').removeClass('underline_desktop_img');
	$('.mob_nav_wrap').fadeOut();

	if ($('.shifter').attr('data-pos') !== '2') {
		removeAllShiftClasses();
		removeAllTransClasses();

	}
	//home to page 2
	if ($('.shifter').attr('data-pos') === '0') {
		$('.oom_page_2').addClass('page_trans_vert_mid');
		$('.shifter').addClass('shift_up_full');
		$('.shifter').attr('data-pos', '2');
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 450);
	}
	//page 1 to 2
	if ($('.shifter').attr('data-pos') === '1') {
		$('.oom_page_1').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_left_full shift_dwn_mid ');
		setTimeout(function() {
			removeAllTransClasses();
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			$('.shifter').addClass('shift_right_mid shift_dwn_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_2').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_right_mid shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '2');
	}
	//page 3 to 2
	if ($('.shifter').attr('data-pos') === '3') {
		$('.oom_page_3').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_right page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_2').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '2');
	}
	//page 4 to 2
	if ($('.shifter').attr('data-pos') === '4') {
		$('.oom_page_4').addClass('page_trans_horz_mid page_trans_vert_bottom');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_left_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_2').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '2');
	}
	//page5 to page 2
	if ($('.shifter').attr('data-pos') === '5') {
		$('.oom_page_5').addClass('page_trans_vert_bottom');
		$('.shifter').addClass('shift_up_mid');
		setTimeout(function() {
			$('.shifter').addClass('shift_up_full');
			$('.oom_page_2').addClass('page_trans_vert_mid');
		}, 450);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 900);
		$('.shifter').attr('data-pos', '2');
	}
	//page 6 to 2
	if ($('.shifter').attr('data-pos') === '6') {
		$('.oom_page_6').addClass('page_trans_vert_bottom page_trans_horz_mid');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_right page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_2').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '2');
	}
});
//**************************  PAGE 3 ************************** ACTIONS **************************
$('.page-3').click(function(e) {
	if(screenWidth < 762){
		$('.menu_toggle, .home').show();
	}
	$('.home_content_splitter').removeClass('close_split');
	$('.menu_toggle i, .home i').show();
	$('.navTrigger').hide();
	$('.menu_toggle i,.home i').addClass('menu_items_back');
	$('.desktop_home img').removeClass('underline_desktop_img');
	$('.mob_nav_wrap').fadeOut();

	if ($('.shifter').attr('data-pos') !== '3') {
		removeAllShiftClasses();
		removeAllTransClasses();

	}
	//home to 3
	if ($('.shifter').attr('data-pos') === '0') {
		$('.oom_page_space_right').addClass('page_trans_horz_mid');
		$('.oom_page_3').addClass('page_trans_horz_mid');
		$('.shifter').addClass('shift_right_full');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_vert_bottom');
			$('.oom_page_3').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_up_full');
		}, 450);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 900);
		$('.shifter').attr('data-pos', '3');
	}
	//page 1 to 3
	if ($('.shifter').attr('data-pos') === '1') {
		$('.oom_page_1').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_dwn_mid shift_left_full');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_full');
			$('.oom_page_space_right').addClass('page_trans_horz_mid');
			$('.oom_page_3').addClass('page_trans_horz_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_vert_bottom');
			$('.oom_page_3').addClass('page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_full shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '3');
	}
	//page 2 to 3
	if ($('.shifter').attr('data-pos') === '2') {
		$('.oom_page_2').addClass('page_trans_vert_full');
		$('.shifter').addClass('shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_mid');
			$('.oom_page_3').addClass('page_trans_horz_mid');
			$('.shifter').addClass('shift_right_full');
		}, 450);
		setTimeout(function() {
			removeAllShiftClasses();
			$('.oom_page_space_right').addClass('page_trans_vert_bottom');
			$('.oom_page_3').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_right_full shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '3');
	}
	//page 4 to 3
	if ($('.shifter').attr('data-pos') === '4') {
		$('.oom_page_4').addClass('page_trans_horz_mid page_trans_vert_bottom');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_left_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			$('.oom_page_space_right').addClass('page_trans_horz_mid');
			$('.oom_page_3').addClass('page_trans_horz_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_vert_bottom');
			$('.oom_page_3').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '3');
	}
	//page 5 to 3
	if ($('.shifter').attr('data-pos') === '5') {
		$('.oom_page_5').addClass('page_trans_vert_bottom');
		$('.shifter').addClass('shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_mid');
			$('.oom_page_3').addClass('page_trans_horz_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_full');
		}, 450);
		setTimeout(function() {
			removeAllShiftClasses();
			$('.oom_page_space_right').addClass('page_trans_vert_bottom');
			$('.oom_page_3').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_right_full shift_up_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '3');
	}
	//page 6 to page 3
	if ($('.shifter').attr('data-pos') === '6') {
		$('.shifter').addClass('shift_right_full shift_up_mid');
		$('.shifter').attr('data-pos', '3');
		$('.oom_page_6').addClass('page_trans_vert_bottom page_trans_horz_mid');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.oom_page_3').addClass('page_trans_horz_mid');
		setTimeout(function() {
			removeAllShiftClasses();
			// removeAllTransClasses();
			$('.shifter').addClass('shift_right_full shift_up_full');
			$('.oom_page_3').addClass('page_trans_vert_mid');
			$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_bottom');
		}, 450);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 900);
	}
});
//**************************  PAGE 4 ************************** ACTIONS **************************
$('.page-4').click(function(e) {
	if(screenWidth < 762){
		$('.menu_toggle, .home').show();
	}
	$('.home_content_splitter').removeClass('close_split');
	$('.menu_toggle i, .home i').show();
	$('.navTrigger').hide();
	$('.menu_toggle i,.home i').addClass('menu_items_back');
	$('.desktop_home img').removeClass('underline_desktop_img');
	$('.mob_nav_wrap').fadeOut();

	if ($('.shifter').attr('data-pos') !== '4') {
		removeAllShiftClasses();
		removeAllTransClasses();

	}
	//home to 4
	if ($('.shifter').attr('data-pos') === '0') {
		$('.oom_page_space_left').addClass('page_trans_horz_mid');
		$('.oom_page_4').addClass('page_trans_horz_mid');
		$('.shifter').addClass('shift_left_full');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_full');
			$('.oom_page_4').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_dwn_full');
		}, 450);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 900);
		$('.shifter').attr('data-pos', '4');
	}
	//page 1 to 4
	if ($('.shifter').attr('data-pos') === '1') {
		$('.oom_page_1').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.oom_page_4').addClass('page_trans_horz_mid');
		$('.shifter').addClass('shift_left_full shift_dwn_mid');
		$('.shifter').attr('data-pos', '4');
		setTimeout(function() {
			$('.oom_page_space_left').removeClass('page_trans_horz_right page_trans_horz_mid page_trans_horz_left page_trans_vert_full page_trans_vert_mid page_trans_vert_bottom');
			// removeAllTransClasses();
			$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_full');
			$('.oom_page_4').addClass('page_trans_vert_mid page_trans_horz_mid');
			$('.shifter').addClass('shift_left_full shift_dwn_full');
		}, 450);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 900);
	}
	//page 2 to 4
	if ($('.shifter').attr('data-pos') === '2') {
		$('.oom_page_2').addClass('page_trans_vert_full');
		$('.shifter').addClass('shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_mid');
			$('.oom_page_4').addClass('page_trans_horz_mid');
			$('.shifter').addClass('shift_left_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_full');
			$('.oom_page_4').addClass('page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_full shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 900);
		$('.shifter').attr('data-pos', '4');
	}
	//page 3 to 4
	if ($('.shifter').attr('data-pos') === '3') {
		$('.oom_page_3').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_right page_trans_vert_mid');
			$('.oom_page_space_left').addClass('page_trans_horz_mid');
			$('.oom_page_4').addClass('page_trans_horz_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_full');
			$('.oom_page_4').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '4');
	}
	//page 5 to 4
	if ($('.shifter').attr('data-pos') === '5') {
		$('.oom_page_5').addClass('page_trans_vert_bottom');
		$('.shifter').addClass('shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_mid');
			$('.oom_page_4').addClass('page_trans_horz_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_full');
			$('.oom_page_4').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '4');
	}
	//page 6 to 4
	if ($('.shifter').attr('data-pos') === '6') {
		$('.oom_page_6').addClass('page_trans_vert_bottom page_trans_horz_mid');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_right page_trans_vert_mid');
			$('.oom_page_space_left').addClass('page_trans_horz_mid');
			$('.oom_page_4').addClass('page_trans_horz_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_vert_full');
			$('.oom_page_4').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '4');
	}
});
//**************************  PAGE 5 ************************** ACTIONS **************************
$('.page-5').click(function(e) {
	if(screenWidth < 762){
		$('.menu_toggle, .home').show();
	}
	$('.home_content_splitter').removeClass('close_split');
	$('.menu_toggle i, .home i').show();
	$('.navTrigger').hide();
	$('.menu_toggle i,.home i').addClass('menu_items_back');
	$('.desktop_home img').removeClass('underline_desktop_img');
	$('.mob_nav_wrap').fadeOut();

	if ($('.shifter').attr('data-pos') !== '5') {
		removeAllShiftClasses();
		removeAllTransClasses();

	}
	//home to page 5
	if ($('.shifter').attr('data-pos') === '0') {
		$('.shifter').addClass('shift_dwn_full');
		$('.shifter').attr('data-pos', '5');
		$('.oom_page_5').addClass('page_trans_vert_mid');
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 450);
	}
	//page 1 to 5
	if ($('.shifter').attr('data-pos') === '1') {
		$('.oom_page_1').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_left_full shift_dwn_mid');
		setTimeout(function() {
			removeAllTransClasses();
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_5').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '5');
	}
	//page 2 to 5
	if ($('.shifter').attr('data-pos') === '2') {
		$('.oom_page_2').addClass('page_trans_vert_full');
		$('.shifter').addClass('shift_dwn_mid');
		setTimeout(function() {
			$('.shifter').addClass('shift_dwn_full');
			$('.oom_page_5').addClass('page_trans_vert_mid');
		}, 450);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 900);
		$('.shifter').attr('data-pos', '5');
	}
	//page 3 to 5
	if ($('.shifter').attr('data-pos') === '3') {
		$('.oom_page_3').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_right page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_5').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '5');
	}
	//page 4 to 5
	if ($('.shifter').attr('data-pos') === '4') {
		$('.oom_page_4').addClass('page_trans_horz_mid page_trans_vert_bottom');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_left_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_5').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '5');
	}
	//page 6 to 5
	if ($('.shifter').attr('data-pos') === '6') {
		$('.oom_page_6').addClass('page_trans_vert_bottom page_trans_horz_mid');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_right').addClass('page_trans_horz_right page_trans_vert_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_left_mid');
		}, 450);
		setTimeout(function() {
			$('.oom_page_5').addClass('page_trans_vert_mid');
			$('.shifter').addClass('shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '5');
	}
});
//**************************  PAGE 6 ************************** ACTIONS **************************
$('.page-6').click(function(e) {
	if(screenWidth < 762){
		$('.menu_toggle, .home').show();
	}
	$('.home_content_splitter').removeClass('close_split');
	$('.menu_toggle i, .home i').show();
	$('.navTrigger').hide();
	$('.menu_toggle i,.home i').addClass('menu_items_back');
	$('.desktop_home img').removeClass('underline_desktop_img');
	$('.mob_nav_wrap').fadeOut();

	if ($('.shifter').attr('data-pos') !== '6') {
		removeAllShiftClasses();
		removeAllTransClasses();

	}
	//home to 6
	if ($('.shifter').attr('data-pos') === '0') {
		$('.oom_page_6').addClass('page_trans_horz_mid');
		$('.oom_page_space_right').addClass('page_trans_horz_mid');
		$('.shifter').addClass('shift_right_full');
		setTimeout(function() {
			$('.oom_page_6').addClass('page_trans_vert_mid');
			$('.oom_page_space_right').addClass('page_trans_vert_full');
			$('.shifter').addClass('shift_dwn_full');
		}, 450);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 900);
		$('.shifter').attr('data-pos', '6');
	}
	//page 1 to 6
	if ($('.shifter').attr('data-pos') === '1') {
		$('.oom_page_1').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_left_full shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			$('.oom_page_6').addClass('page_trans_horz_mid');
			$('.oom_page_space_right').addClass('page_trans_horz_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_6').addClass('page_trans_vert_mid');
			$('.oom_page_space_right').addClass('page_trans_vert_full');
			$('.shifter').addClass('shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '6');
	}
	//page 2 to 6
	if ($('.shifter').attr('data-pos') === '2') {
		$('.oom_page_2').addClass('page_trans_vert_full');
		$('.shifter').addClass('shift_dwn_mid');
		setTimeout(function() {
			$('.oom_page_6').addClass('page_trans_horz_mid');
			$('.oom_page_space_right').addClass('page_trans_horz_mid');
			$('.shifter').addClass('shift_right_full');
		}, 450);
		setTimeout(function() {
			removeAllShiftClasses();
			$('.oom_page_6').addClass('page_trans_vert_mid');
			$('.oom_page_space_right').addClass('page_trans_vert_full');
			$('.shifter').addClass('shift_right_full shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '6');
	}
	//page 3 to page 6
	if ($('.shifter').attr('data-pos') === '3') {
		$('.oom_page_3').addClass('page_trans_horz_mid page_trans_vert_full');
		$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_right_full shift_dwn_mid');
		$('.oom_page_6').addClass('page_trans_horz_mid');
		$('.shifter').attr('data-pos', '6');
		setTimeout(function() {
			$('.oom_page_space_right').removeClass('page_trans_horz_right page_trans_horz_mid page_trans_horz_left page_trans_vert_full page_trans_vert_mid page_trans_vert_bottom');
			// removeAllTransClasses();
			$('.oom_page_space_right').addClass('page_trans_horz_mid page_trans_vert_full');
			$('.oom_page_6').addClass('page_trans_vert_mid page_trans_horz_mid');
			$('.shifter').addClass('shift_right_full shift_dwn_full');
		}, 450);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 900);
	}
	//page 4 to 6
	if ($('.shifter').attr('data-pos') === '4') {
		$('.oom_page_4').addClass('page_trans_horz_mid page_trans_vert_bottom');
		$('.oom_page_space_left').addClass('page_trans_horz_mid page_trans_vert_mid');
		$('.shifter').addClass('shift_left_full shift_up_mid');
		setTimeout(function() {
			$('.oom_page_space_left').addClass('page_trans_horz_left page_trans_vert_mid');
			$('.oom_page_6').addClass('page_trans_horz_mid');
			$('.oom_page_space_right').addClass('page_trans_horz_mid');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_6').addClass('page_trans_vert_mid');
			$('.oom_page_space_right').addClass('page_trans_vert_full');
			$('.shifter').addClass('shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '6');
	}
	//page 5 to 6
	if ($('.shifter').attr('data-pos') === '5') {
		$('.oom_page_5').addClass('page_trans_vert_bottom');
		$('.shifter').addClass('shift_up_mid');
		setTimeout(function() {
			$('.oom_page_6').addClass('page_trans_horz_mid');
			$('.oom_page_space_right').addClass('page_trans_horz_mid');
			$('.shifter').addClass('shift_right_full');
		}, 450);
		setTimeout(function() {
			$('.oom_page_6').addClass('page_trans_vert_mid');
			$('.oom_page_space_right').addClass('page_trans_vert_full');
			removeAllShiftClasses();
			$('.shifter').addClass('shift_right_full shift_dwn_full');
		}, 900);
		setTimeout(function() {
			menuWindowClose('black', 'white');
		}, 1350);
		$('.shifter').attr('data-pos', '6');
	}
});
