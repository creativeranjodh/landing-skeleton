
$(document).ready( function() {
    ///////////////////////
    // Navbar Scroll
    ///////////////////////
        var yinit = $(this).scrollTop(),
            scrollBreak = 80,
            navbar = $('#js-navbar');
        if (yinit > scrollBreak) {
            navbar.addClass('navbar-scroll');
            navbar.removeClass('navbar-top');
        } else {
            navbar.removeClass('navbar-scroll');
            navbar.addClass('navbar-top');
        }
        $(window).scroll(function() {
            var y = $(this).scrollTop();

            if (y > scrollBreak) {
                navbar.addClass('navbar-scroll');
                navbar.removeClass('navbar-top');
            } else {
                navbar.removeClass('navbar-scroll');
                navbar.addClass('navbar-top');
            }
        });
    ///////////////////////
    // End
    ///////////////////////





    ///////////////////////
    // Dropdown menu v2
    ///////////////////////
        var activeDropdown = null;
        $('.dropdown__switch').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var that = $(this);

            that.parent('.dropdown__container').toggleClass('dropdown__container--active');
            that.toggleClass('dropdown__switch--active');
            that.siblings('.dropdown').toggleClass('dropdown--active'); // next et pas children pour le stopPropagation()

            $(document).on('click.hideDropdown', function() {
                $('.dropdown__container').removeClass('dropdown__container--active');
                $('.dropdown__switch').removeClass('dropdown__switch--active');
                $('.dropdown').removeClass('dropdown--active');
                $(document).off('click.hideDropdown');
                activeDropdown = null;
            });

            if (activeDropdown == null) { // No active btn
                activeDropdown = that;
            } else if (activeDropdown.get(0) == this) { // Clicking again on the btn
                activeDropdown = null;
            } else if (activeDropdown != null) { // Another btn is active
                activeDropdown.parent('.dropdown__container').removeClass('dropdown__container--active');
                activeDropdown.removeClass('dropdown__switch--active');
                activeDropdown.siblings('.dropdown').removeClass('dropdown--active');
                activeDropdown = that;
            }
        });
    ///////////////////////
    // End
    ///////////////////////

    ///////////////////////
    // Navicon
    ///////////////////////
        $('#navicon__link').click(function(e) {
            e.preventDefault();
            var that = $(this);
            that.children('#navicon').toggleClass('close');
            var menu = that.closest('.navbar-right__item').siblings('.navbar__menu');
            menu.toggleClass('navbar__menu--off').toggleClass('navbar__menu--on');
        });
        $('.navbar__menu__submenu').click(function(e) {
            e.preventDefault();
            var that = $(this);
            var menu = $('#' + that.attr('data-menu'));
            that.toggleClass('navbar__menu__submenu--on');
            menu.slideToggle();
        });
    ///////////////////////
    // End
    ///////////////////////

    ///////////////////////
    // Phone Side Menu
    ///////////////////////
        $('#js-show-phone-menu').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.js-body').toggleClass('js-push-content');
            $('.phone-navbar').toggleClass('phone-navbar-on');
            $('#js-navbar').toggleClass('js-push-content');
            $('html').toggleClass('remodal-is-locked');

            $('.js-push-content').on('click.hidePhoneMenu', function() {
                $('.js-body').removeClass('js-push-content');
                $('.phone-navbar').removeClass('phone-navbar-on');
                $('#js-navbar').removeClass('js-push-content');
                $('.js-push-content').off('click.hidePhoneMenu');
                $('html').removeClass('remodal-is-locked');
            });
        });
 
} );
