window.mantis._MODULE.mobileCrossSell=function mobileCrossSell(){this.attachHandlers=function(){var d=jQuery(this.srcNode+" .mobile-cross-sell-overlay"),b=jQuery(this.srcNode+" .mobile-cross-sell-container"),a=jQuery(this.srcNode+" .mobile-cross-sell-banner"),c=new Date(),e=c.getTime();a.click(function(){d.show();b.show();var f=window.gamesAnalytics.one(jQuery(".mobile-cross-sell-banner").get(0)),g={ltxt:"TakeTour"};window.gamesAnalytics.i13n.makeCall(window.gamesAnalytics.games,g,f,g)});jQuery(this.srcNode+" .hide-mobile-cross-sell").live("click",function(){d.hide();b.hide()});jQuery(this.srcNode+" .deactivate-cookie").live("click",function(){e+=24*3600*1000;c.setTime(e);document.cookie="showLogoutMobileBanner=false;expires="+c.toGMTString()+";path=/;domain="+jQuery(".cookie-path").val()})};this.lifeCycle={startUp:function(){},onReady:function(){this.attachHandlers()}};this.extend()};