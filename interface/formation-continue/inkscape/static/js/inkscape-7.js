//
// Copyright 2014, Martin Owens <doctormo@gmail.com>
//
// This file is part of the software inkscape-web, consisting of custom 
// code for the Inkscape project's django-based website.
//
// inkscape-web is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// inkscape-web is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with inkscape-web.  If not, see <http://www.gnu.org/licenses/>.
//

/* Page loading processes */
$(document).ready(function() {
  setupMenu();
  furnishShieldTabs();
  setupInlinePages();
  $("[src$='.svg']").error(onSvgError);
  $(".image.only img").error(iconInstead);
  $(".dotdotdot").click(paginator_expand);
  $(".ellipses-button").click(ellipses);
  $(".ellipses-button").show();
  $(".modal-dialog .tab").click(modalfieldsets);
  $(".modal-dialog .fields").hide();
  var selected = $(".modal-dialog .tab.selected");
  if(selected.length == 0) {
    selected = $('.tab[for="' + Cookies.get('selected_tab') + '"]');
    if(selected.length == 0) {
      selected = $(".modal-dialog .tab:first-child");
    }
  }
  selected.click();
  close_elements();
  $(".copy-url").click(function() {
      var url = new URL($(this).data('href'), document.baseURI);
      navigator.clipboard.writeText(url.href);
  });
});

function modalfieldsets(event) {
  var target = $(this);
  var previous = $('.tab.selected', target.parent);
  if(target && target != previous) {
    if(previous) {
      previous.removeClass('selected');
      var fields = $('#' + previous.attr('for'));
      fields.hide();
    }
    target.addClass('selected');
    var fields = $('#' + target.attr('for'));
    fields.show();
    Cookies.set('selected_tab', target.attr('for'), { 'expires': 1, 'path': window.location.pathname });
  }
}

function ellipses(event) {
  var target = $(this).parent();
  if(target.hasClass('ellipses-hidden')) {
    target.removeClass('ellipses-hidden');
    target.addClass('ellipses-shown');
    $(this).hide();
  } else if(target.hasClass('ellipses-shown')) {
    target.removeClass('ellipses-shown');
    target.addClass('ellipses-hidden');
    $(this).show();
  }
}

function paginator_expand(event) {
  // On clicking ... in a paginator, this js will expand it
  var a = parseInt($(this).prev().text());
  var b = parseInt($(this).next().text());
  $(this).attr('href', $(this).attr('data-href'));
  $(this).removeAttr('data-href');
  var template = this.outerHTML;
  for (var i = a + 1; i < b; i++) {
      var html = template.replace(/\.\.\./g, i);
      $(html).insertBefore($(this));
  }
  $(this).hide();
  return false;
}

function iconInstead(event) {
  this.src = $(this).data('icon');
}

function onSvgError(event) {
  if(this.src.slice(-3)=='svg' && !$(this).data('static')) {
    this.src = this.src.slice(0,-3) + "png";
  }
}

function close_elements() {
  $("#messages li").each(function() {
    $(this).prepend("<span class='x-close'>x</span>");
  });
  $(".x-close").each(function() {
    $(this).click(function() {
      $(this).parent().remove();
    });
  });
}

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      var cookieName = cookie.substring(0, name.length + 1);
      if (cookieName == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

function selectBanner(nextTab) {
  $("#shield .current").removeClass('current');
  nextTab.addClass('current');
  $("#shield #banners > div").eq(nextTab.index()).addClass('current');
}
function furnishShieldTabs() {
  $("#shield > .tabs").children("li")
    .mouseover(function() {
      var nextTab = $(this);
      this.sb_timer = setTimeout(function() { selectBanner(nextTab); }, 100);
    })
    .mouseout(function() {
      if(this.sb_timer) clearTimeout(this.sb_timer);
    })
    /*.click(function() {
      if($(this).hasClass('current')) $("#shield .tabs").toggleClass('expanded');
      selectBanner($(this));
      return false;
    })*/
    ;
  currentTab = $("#shield > .tabs li.current");
}

function setupInlinePages() {
  $(".inlinepages > .tabs > li").click(function() {
    $(".inlinepages .selected").removeClass('selected');
    $(this).addClass('selected');
    $("#" + this.id + "-page").addClass('selected');
  });
  $(".inlinepages > .tabs > li:first-child").click();
}

function popUp(title, msg, href, cancel, ok, next, note, ajax) {
    if(document.getElementById('blanket')) {
      $('#blanket').remove();
      $('#popup').remove();
    } else if(title) {
      $('body').append( "<div id='blanket'/>" );
      $('#blanket').click(popUp); // Cancel when clicking outside
      $('body').append( "<div id='popup'/>" );
      $('#popup').append( "<h1>" + title + "</h1>" ).append( "<p>" + msg + "</p>" )
                 .append( "<form class='buttons' action='"+href+"' method='POST'/>");
      if(note) {
        if(Array.isArray(note)) {
          $('#popup .buttons').append("<textarea name='note' placeholder='" + note[0] + "'>"+note[1]+"</textarea>");
        } else {
          $('#popup .buttons').append("<textarea name='note' placeholder='" + note + "'></textarea>");
        }
      }
      $('#popup .buttons').append("<input type='hidden' name='csrfmiddlewaretoken' value='"+getCookie('csrftoken')+"'/>")
      if(ajax) {
        $('#popup .buttons').append("<input type='hidden' name='json' value='1'/>");
      }
      if(next) {
        $('#popup .buttons').append("<input type='hidden' name='next' value='"+next+"'/>");
      }  
      $('#popup .buttons').append("<input type='hidden' name='confirm' value='1'/>");
      $('#popup .buttons').append("<a class='btn btn-cancel'>" + cancel + "</a>");
      $('#popup .buttons').append("<button type='submit' class='btn btn-primary'>" + ok + "</button>");
      $('#popup .buttons .btn-cancel').click(popUp);
      $('#popup').css({
        'top': 'calc(50% - ' + ($('#popup').innerHeight() / 2) + 'px)',
        'left': 'calc(50% - ' + ($('#popup').innerWidth() / 2) + 'px)',
      });
      if(ajax) {
        $('#popup form').submit(function(e) {
          var data = $(this).serialize();
          $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: data,
            success: ajax,
          });
          e.preventDefault();
          $('#blanket').remove();
          $('#popup').remove();
          return false;
        });
      }
    } else {
      alert("No title specified!");
      return true;
    }
    return false;
}
function popUpLink(msg, cancel, ok, next, note, ajax_class) {
  // Allows a link to fail gracefully.
  var a = document.currentScript.previousElementSibling;
  $(document).ready( function() {
    var ajax = undefined;
    if (ajax_class) {
      ajax = function(data) { $(a).addClass(ajax_class); }
    }
    var href = a.href;
    $(a).click(function() {
      var ret = popUp(a.title, msg, href, cancel, ok, next, note, ajax);
      var link2 = $(a).data('other-link');
      if(link2) {
        $('#popup .buttons').prepend('<a class="btn btn-default" href="' + link2 + '">' + $(a).data('other-text') + '</a>');
      }
      return ret;
    });
    a.href = '#' + href
  });
}

function setupMenu() {
  $("#menu-toggle").click(function() {
    $(this).toggleClass('expanded');
    $("#menu").toggleClass('shown');
  });
  $("#menu li").has("ul")
    .each(function() {
      if($(this).children("a").attr('href')) {
        var ancestorDuplicate = $("<li>").addClass('child main').append($(this).children("a").clone());
        if($(this).hasClass('selected')) ancestorDuplicate.addClass('selected');
        $(this).children("ul").prepend(ancestorDuplicate);
      }
    })
    .children("a").click(function(event) {
      event.preventDefault();
      $(this).parent().toggleClass('activated');
    });
  $(window).click(function() {
    $("#menu .activated:not(:hover)").removeClass('activated');
  });

  if(screen.width >= 960) {
    var expectedWidth = $("#menu").parent().width(), currentWidth;
    var fontSize = 18, minFontSize = 1;
    var paddingSize = 23, paddingFactor = 0.7;
    do {
      $("#menu > li > a").css({
        'font-size': fontSize + 'px',
        'padding-left': Math.round(paddingSize) + 'px',
        'padding-right': Math.round(paddingSize) + 'px'
      });
      // Width of menu is based on the width of it's children, not on the
      // width of the menu object which is subject to fix width parent and
      // wrapping issues.
      currentWidth = 0;
      $("#menu").children("li").each(function() {
          currentWidth += $(this).width();
      });
      fontSize--;
      paddingSize *= paddingFactor;
    } while(currentWidth > expectedWidth && fontSize >= minFontSize);
    if (currentWidth > expectedWidth) {
      $("#menu > li > a").css({
        'display': 'table-cell',
        'padding-top': '8px',
        'padding-bottom': '8px',
        'white-space': 'normal',
        'vertical-align': 'middle'
      }).innerHeight($("#menu > li").height());
    }
  }
}

function reply_message(msg_id) {
  $('#form-' + msg_id).removeAttr('onsubmit').attr('method', 'post');
  $('#body-' + msg_id).removeAttr('style');
  return false;
}
