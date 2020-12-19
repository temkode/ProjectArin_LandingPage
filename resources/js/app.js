$(document).ready(function() {
    const preloadLogo = document.querySelector('.preload-logo');

    preloadLogo.addEventListener('animationend', () => {
        if (preloadLogo.classList.contains('animate__zoomIn')) {
            preloadLogo.classList.remove('animate__zoomIn');
            preloadLogo.classList.add('animate__flip');        
        } else if (preloadLogo.classList.contains('animate__flip')) {
            preloadLogo.classList.remove('animate__flip');
            $('.preload').append('<h2 class="preload-text animate__animated animate__fadeIn">SyberPong<br><div class="preload-subtext">presents</div></h2>');
            
            const preloadText = document.querySelector('.preload-text');
            preloadText.addEventListener('animationend', () => {
                preloadLogo.classList.add('rotate'); 
                $('<img/>').attr('src', '../resources/css/img/bg.png').on('load', function() {
                    $(this).remove(); // prevent memory leaks
                    $('body').css('background-image', 'url(../resources/css/img/bg.png)');
                    
                    $('.preload').addClass('preload-finish');
                    $('main').addClass('arin-intro');
                    $('main').one("transitionend", function(event) {                    
                        $('.main-content').css('display', 'flex');

                        document.querySelector('.main-content').addEventListener('animationend', () => {
                            if (window.innerWidth > 767) {
                                $('#puzzle-btn-border').css('display', 'inline-block');
                            } else {
                                $('.socials-container').css('display', 'flex');
                                $('.radiobuttons-container').css('display', 'flex');
                                $('.discord-container').css('display', 'flex') ;                     
                            }
                            document.querySelector('#puzzle-btn-border').addEventListener('animationend', () => {
                                $('#about-btn-border').css('display', 'inline-block');
                                document.querySelector('#about-btn-border').addEventListener('animationend', () => {
                                    $('.radiobuttons-container').css('display', 'flex');
                                    $('.socials-container').css('display', 'flex');    
                                    $('.discord-container').css('display', 'flex') ;                     
                                });
                            });
                        });
                    });
                });
            });
        }
    });

    var faqs = {
        'what': [
            '<h2>WHAT<br>IS<br><div class="text-red">PROJECT ARIN</div>?</h2>',
            '<span>PROJECT ARIN is a singleplayer, story-based, puzzle, survival-horror game set in <div class="text-red">post-apocalyptic</div> Mongolia, and is the first project developed by SyberPong.</span>'
        ],
        'when': [
            '<h2>WHEN IS<br>RELEASE OF<br><div class="text-red">PROJECT ARIN</div>?</h2>',
            '<span>The first fully <div class="text-red">playable</div> version of PROJECT ARIN will be released in the <div class="text-red">Fall of 2020</div>.</span>'
        ],
    };

    $('input[type=radio][name=faq]').change(function() {
        $('.card-content').empty();
        $('.card-content').append(faqs[this.value][0], faqs[this.value][1]);
    });

    document.querySelector(".socials-container").addEventListener("mouseover", event => {
        // stuff to do when u hover logo
    });

    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    
    $("body").mousemove(function(e){
        if (window.innerWidth > 1199 && window.innerWidth < 2559) {
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1;
            var newvalueY = height * pageY * -1;

            var newvalueY = newvalueY - 80;
            var newvalueX = newvalueX - 250;

            $('body').css("background-position", newvalueX+"px "+newvalueY+"px");
        } else {
            // $('body').css("background-position", "center");  // weird bug fix
        }
    });
});