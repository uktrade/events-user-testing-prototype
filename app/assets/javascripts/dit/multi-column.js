
$(document).ready(function() 
{

      // on page load      
      var hash = window.location.hash;
      hash = hash.substring(1);

      if (hash) 
      {
            // reset active links
            $("main.browse .browse-panes #root ul li ").removeClass("active");
            sessionStorage.setItem("lastTabViewed", hash);
            // avoid page from scrolling when loading 
            
            setTimeout(function() {
            window.scrollTo(0, 0);
            }, 1);



            // if the deeplink points to a second level item, move the menu to the left, set the tax type as active and show content
            if ($("." + hash).parent().parent().hasClass('topics')) 
            {
                  console.log("topics");
                  $("." + hash).parent().addClass("active");
                  
                  // set the relative parent item as active
                  if ($("." + hash).parent().parent().hasClass('vat')) 
                  {
                        $('.taxes a.vat').parent().addClass("active");
                        $('.topics').hide();
                        $('.topics.vat').show();
                  }

                  else if ($("." + hash).parent().parent().hasClass('sa')) 
                  {
                        $('.taxes a.sa').parent().addClass("active");
                        $('.topics').hide();
                        $('.topics.sa').show();
                  }
                  else if ($("." + hash).parent().parent().hasClass('epaye')) 
                  {
                        $('.taxes a.epaye').parent().addClass("active");
                        $('.topics').hide();
                        $('.topics.epaye').show();
                  }
                  else if ($("." + hash).parent().parent().hasClass('ct')) 
                  {     
                        $('.taxes a.ct').parent().addClass("active");
                        $('.topics').hide();
                        $('.topics.ct').show();
                  }

                  $(".topics").css("margin-left", "-100px");
                  $("#subsection").css("visibility","visible");
            }



            // if the deeplink points to a first level item, just preselect the item
            else if ($("." + hash).parent().parent().hasClass('taxes')) 
            {
                  $("." + hash).parent().addClass("active");
                  $("#subsection").css("visibility","hidden");
            }


            if (hash == "other")  
            {
                  $("#subsection").css("visibility","visible");
                  $("#subsection .ct").hide();
                  $(".topics").hide();
            }

            else if (hash == "ct")  
            {
                  $("#subsection").css("visibility","visible");
                  $(".topics").hide();
            }

            $("#" + hash).show();
      }




      // on click of nav links
      $("#root ul li a").click(function() 
      {
            // remove active selection from selected item
            $(this).parent().parent().find(".active").removeClass("active");


            // if click is on tax links
            if ($(this).parent().parent().hasClass("taxes")) 
            {
                  $('#root ul li').removeClass("active");
                  $(this).parent().addClass("active");
                  var selectedTax = $(this).attr("class");

                  if ($(this).hasClass("other")) 
                  {
                        $(".topics").hide();
                        $(".other").show();
                        $("#subsection").css("visibility","visible");
                  }
                  else if ($(this).hasClass("ct")) 
                  {
                        $(".topics").hide();
                        $(".ct").show();
                        $("#subsection").css("visibility","visible");
                  }
                  else 
                  {
                        $(".topics").css("margin-left", "0px");
                        $(".topics").hide();
                        $("." + selectedTax).show();
                        $("#subsection").css("visibility","hidden");
                  }
            }

            else 
            {
                  // click on second level links
                  $(this).parent().addClass("active"); 
                  $(".topics").css("margin-left", "-100px");
                  $("#subsection").css("visibility","visible");
            }


            event.preventDefault();
            $(".pane-inner").hide();
            var el = $(this).attr('href');
            $('#' + el).show();

            // pushes the fragment in the history without scrolling - awesome
            history.pushState({}, '', "#" + $(this).attr('href'));

      });




   // SOME OLD JUNK OF PIETROs
      // hide header when the back link is visible
  if ($(".back-link").is(":visible")) {
      $("#subheader-hmrc-logo").hide();
    }
  else {$("#subheader-hmrc-logo").show();}


  $('*').click(function(){
    if ($(this).data("target")) {
      if (!$(this).is(':radio')) {
      event.preventDefault();
    }
      var target = "#" + $(this).data("target");
      if ($(target).is(':visible')) $(target).hide();
      else  $(target).show();
    }
  });
  
});
