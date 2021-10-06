(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e=this||self;function f(b,c){b=b.split(".");var a=e;b[0]in a||"undefined"==typeof a.execScript||a.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===c?a[d]&&a[d]!==Object.prototype[d]?a=a[d]:a=a[d]={}:a[d]=c}
;var g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"MMM d",MONTH_DAY_FULL:"MMMM dd",MONTH_DAY_SHORT:"M/d",MONTH_DAY_MEDIUM:"MMMM d",MONTH_DAY_YEAR_MEDIUM:"MMM d, y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, MMM d",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, MMM d, y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"MMM d, h:mm a zzzz"};
g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"d MMM",MONTH_DAY_FULL:"dd MMMM",MONTH_DAY_SHORT:"dd/MM",MONTH_DAY_MEDIUM:"d MMMM",MONTH_DAY_YEAR_MEDIUM:"d MMM y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE d MMM",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE d MMM y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"d MMM, HH:mm zzzz"};var h={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
h={ERAS:["av. J.-C.","ap. J.-C."],ERANAMES:["avant J\u00e9sus-Christ","apr\u00e8s J\u00e9sus-Christ"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),STANDALONEMONTHS:"janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),SHORTMONTHS:"janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
STANDALONESHORTMONTHS:"janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),WEEKDAYS:"dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),STANDALONEWEEKDAYS:"dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),SHORTWEEKDAYS:"dim. lun. mar. mer. jeu. ven. sam.".split(" "),STANDALONESHORTWEEKDAYS:"dim. lun. mar. mer. jeu. ven. sam.".split(" "),NARROWWEEKDAYS:"DLMMJVS".split(""),STANDALONENARROWWEEKDAYS:"DLMMJVS".split(""),SHORTQUARTERS:["T1",
"T2","T3","T4"],QUARTERS:["1er trimestre","2e trimestre","3e trimestre","4e trimestre"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE d MMMM y","d MMMM y","d MMM y","dd/MM/y"],TIMEFORMATS:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],DATETIMEFORMATS:["{1} '\u00e0' {0}","{1} '\u00e0' {0}","{1}, {0}","{1} {0}"],FIRSTDAYOFWEEK:0,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:3};function k(b,c){if(void 0===c){c=b+"";var a=c.indexOf(".");c=Math.min(-1==a?0:c.length-a-1,3)}a=Math.pow(10,c);return{g:c,f:(b*a|0)%a}}
function l(b,c){c=k(b,c);return 1==(b|0)&&0==c.g?"one":"other"}
l=function(b,c){var a=b|0;b=k(b,c);return 0==a||1==a?"one":0!=a&&0==a%1E6&&0==b.g?"many":"other"};f("YT_I18N_FORMATTING_GOOG_LOCALE","fr");f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS",g);f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS",h);
f("YT_I18N_FORMATTING_RELATIVE_DATE_TIME_SYMBOLS",{DAY:{LONG:{R:{"-1":"hier","-2":"avant-hier",0:"aujourd\u2019hui",1:"demain",2:"apr\u00e8s-demain"},P:"one{il y a # jour}other{il y a # jours}",F:"one{dans # jour}other{dans # jours}"},SHORT:{R:{"-1":"hier","-2":"avant-hier",0:"aujourd\u2019hui",1:"demain",2:"apr\u00e8s-demain"},P:"one{il y a #\u00a0j}other{il y a #\u00a0j}",F:"one{dans #\u00a0j}other{dans #\u00a0j}"},NARROW:{R:{"-1":"hier","-2":"avant-hier",0:"aujourd\u2019hui",1:"demain",2:"apr\u00e8s-demain"},
P:"one{-# j}other{-# j}",F:"one{+# j}other{+# j}"}},HOUR:{LONG:{R:{0:"cette heure-ci"},P:"one{il y a # heure}other{il y a # heures}",F:"one{dans # heure}other{dans # heures}"},SHORT:{R:{0:"cette heure-ci"},P:"one{il y a #\u00a0h}other{il y a #\u00a0h}",F:"one{dans #\u00a0h}other{dans #\u00a0h}"},NARROW:{R:{0:"cette heure-ci"},P:"one{-# h}other{-# h}",F:"one{+# h}other{+# h}"}},MINUTE:{LONG:{R:{0:"cette minute-ci"},P:"one{il y a # minute}other{il y a # minutes}",F:"one{dans # minute}other{dans # minutes}"},
SHORT:{R:{0:"cette minute-ci"},P:"one{il y a #\u00a0min}other{il y a #\u00a0min}",F:"one{dans #\u00a0min}other{dans #\u00a0min}"},NARROW:{R:{0:"cette minute-ci"},P:"one{-# min}other{-# min}",F:"one{+# min}other{+# min}"}},MONTH:{LONG:{R:{"-1":"le mois dernier",0:"ce mois-ci",1:"le mois prochain"},P:"one{il y a # mois}other{il y a # mois}",F:"one{dans # mois}other{dans # mois}"},SHORT:{R:{"-1":"le mois dernier",0:"ce mois-ci",1:"le mois prochain"},P:"one{il y a # m.}other{il y a # m.}",F:"one{dans # m.}other{dans # m.}"},
NARROW:{R:{"-1":"le mois dernier",0:"ce mois-ci",1:"le mois prochain"},P:"one{-# m.}other{-# m.}",F:"one{+# m.}other{+# m.}"}},QUARTER:{LONG:{R:{"-1":"le trimestre dernier",0:"ce trimestre",1:"le trimestre prochain"},P:"one{il y a # trimestre}other{il y a # trimestres}",F:"one{dans # trimestre}other{dans # trimestres}"},SHORT:{R:{"-1":"le trimestre dernier",0:"ce trimestre",1:"le trimestre prochain"},P:"one{il y a # trim.}other{il y a # trim.}",F:"one{dans # trim.}other{dans # trim.}"},NARROW:{R:{"-1":"le trimestre dernier",
0:"ce trimestre",1:"le trimestre prochain"},P:"one{-# trim.}other{-# trim.}",F:"one{+# trim.}other{+# trim.}"}},SECOND:{LONG:{R:{0:"maintenant"},P:"one{il y a # seconde}other{il y a # secondes}",F:"one{dans # seconde}other{dans # secondes}"},SHORT:{R:{0:"maintenant"},P:"one{il y a #\u00a0s}other{il y a #\u00a0s}",F:"one{dans #\u00a0s}other{dans #\u00a0s}"},NARROW:{R:{0:"maintenant"},P:"one{-# s}other{-# s}",F:"one{+# s}other{+# s}"}},WEEK:{LONG:{R:{"-1":"la semaine derni\u00e8re",0:"cette semaine",
1:"la semaine prochaine"},P:"one{il y a # semaine}other{il y a # semaines}",F:"one{dans # semaine}other{dans # semaines}"},SHORT:{R:{"-1":"la semaine derni\u00e8re",0:"cette semaine",1:"la semaine prochaine"},P:"one{il y a # sem.}other{il y a # sem.}",F:"one{dans # sem.}other{dans # sem.}"},NARROW:{R:{"-1":"la semaine derni\u00e8re",0:"cette semaine",1:"la semaine prochaine"},P:"one{-# sem.}other{-# sem.}",F:"one{+# sem.}other{+# sem.}"}},YEAR:{LONG:{R:{"-1":"l\u2019ann\u00e9e derni\u00e8re",0:"cette ann\u00e9e",
1:"l\u2019ann\u00e9e prochaine"},P:"one{il y a # an}other{il y a # ans}",F:"one{dans # an}other{dans # ans}"},SHORT:{R:{"-1":"l\u2019ann\u00e9e derni\u00e8re",0:"cette ann\u00e9e",1:"l\u2019ann\u00e9e prochaine"},P:"one{il y a # a}other{il y a # a}",F:"one{dans # a}other{dans # a}"},NARROW:{R:{"-1":"l\u2019ann\u00e9e derni\u00e8re",0:"cette ann\u00e9e",1:"l\u2019ann\u00e9e prochaine"},P:"one{-# a}other{-# a}",F:"one{+# a}other{+# a}"}}});f("YT_I18N_FORMATTING_PLURAL_RULES_SELECT",l);}).call(this);
