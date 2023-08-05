!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("moment"), require("fullcalendar")))
        : "function" == typeof define && define.amd
        ? define(["moment", "fullcalendar"], t)
        : "object" == typeof exports
        ? t(require("moment"), require("fullcalendar"))
        : t(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, function (e, t) {
    return (function (e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var r = (o[n] = { i: n, l: !1, exports: {} });
            return e[n].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
        }
        var o = {};
        return (
            (t.m = e),
            (t.c = o),
            (t.d = function (e, o, n) {
                t.o(e, o) || Object.defineProperty(e, o, { configurable: !1, enumerable: !0, get: n });
            }),
            (t.n = function (e) {
                var o =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return t.d(o, "a", o), o;
            }),
            (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 151))
        );
    })({
        0: function (t, o) {
            t.exports = e;
        },
        1: function (e, o) {
            e.exports = t;
        },
        151: function (e, t, o) {
            Object.defineProperty(t, "__esModule", { value: !0 }), o(152);
            var n = o(1);
            n.datepickerLocale("it", "it", {
                closeText: "Chiudi",
                prevText: "&#x3C;Prec",
                nextText: "Succ&#x3E;",
                currentText: "Oggi",
                monthNames: [
                    "Gennaio",
                    "Febbraio",
                    "Marzo",
                    "Aprile",
                    "Maggio",
                    "Giugno",
                    "Luglio",
                    "Agosto",
                    "Settembre",
                    "Ottobre",
                    "Novembre",
                    "Dicembre"
                ],
                monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
                dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
                weekHeader: "Sm",
                dateFormat: "dd/mm/yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                n.locale("it", {
                    buttonText: { month: "Mese", week: "Settimana", day: "Giorno", list: "Agenda" },
                    allDayHtml: "Tutto il<br/>giorno",
                    eventLimitText: function (e) {
                        return "+altri " + e;
                    },
                    noEventsMessage: "Non ci sono eventi da visualizzare"
                });
        },
        152: function (e, t, o) {
            !(function (e, t) {
                t(o(0));
            })(0, function (e) {
                return e.defineLocale("it", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
                        "_"
                    ),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Oggi alle] LT",
                        nextDay: "[Domani alle] LT",
                        nextWeek: "dddd [alle] LT",
                        lastDay: "[Ieri alle] LT",
                        lastWeek: function () {
                            switch (this.day()) {
                                case 0:
                                    return "[la scorsa] dddd [alle] LT";
                                default:
                                    return "[lo scorso] dddd [alle] LT";
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function (e) {
                            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
                        },
                        past: "%s fa",
                        s: "alcuni secondi",
                        ss: "%d secondi",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un'ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: { dow: 1, doy: 4 }
                });
            });
        }
    });
});
