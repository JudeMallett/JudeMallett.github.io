
function indexPage()
{
  $('.contentWrapper').realshadow({
    type: 'drop'
  });
  $('.links').realshadow({
    type: 'drop',
    inverse: true
  });

  resize();
  $(window).resize(resize);
}


function projectsPage()
{

  particlesJS.load('particles-js',
  'particles.json', function(){
    console.log('particles.json loaded...');
  });




  var $body = $('body');

  function tilt(img)
  {
    var $img = img,
        sxPos = 0;
        syPos = 0;

    TweenMax.set([$img], { transformStyle: "preserve-3d"});

    $body.mousemove(function(e)
    {

      sxPos = e.pageX - $img.offset().left - $img.width() / 2;
      syPos = e.pageY - $img.offset().top - $img.height() / 2;
      TweenMax.to($img, 2, {
        rotationY: 0.02 * sxPos,
        rotationX: -0.02 * syPos,
        transformPerspective: 600,
        transformOrigin: "center center",
        ease: Expo.easeOut
      });
    });
  }

  var arr = $( ".projectWrapper" ).toArray();

  for(var i=0; i < arr.length; i++) {
    var $index = (i + 1).toString();
    tilt($('.projectWrapper:nth-of-type(' + $index +') .image'));
  }

  $(document).ready(resize);
  $(window).resize(resize);
}

function resize()
{
  $('.projectWrapper').css('height' , $('.image').css('height'));

  var margin;
  for (var i=0; i < 4; i++)
  {
    margin = ($('.projectWrapper:nth-of-type(' + i + 1 + ')').height() - $('.desc:nth-of-type(' + i + 1 + ')').height()) / 2;

    $('.desc:nth-of-type(' + i + 1 + ')').css('margin-top' , margin + "px");
  }
}
