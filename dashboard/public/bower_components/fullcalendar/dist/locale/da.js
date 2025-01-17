!(function (e, r) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = r(require("moment"), require("fullcalendar")))
        : "function" == typeof define && define.amd
        ? define(["moment", "fullcalendar"], r)
        : "object" == typeof exports
        ? r(require("moment"), require("fullcalendar"))
        : r(e.moment, e.FullCalendar);
})("undefined" != typeof self ? self : this, function (e, r) {
    return (function (e) {
        function r(n) {
            if (t[n]) return t[n].exports;
            var a = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
        }
        var t = {};
        return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
            }),
            (r.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return r.d(t, "a", t), t;
            }),
            (r.o = function (e, r) {
                return Object.prototype.hasOwnProperty.call(e, r);
            }),
            (r.p = ""),
            r((r.s = 97))
        );
    })({
        0: function (r, t) {
            r.exports = e;
        },
        1: function (e, t) {
            e.exports = r;
        },
        97: function (e, r, t) {
            Object.defineProperty(r, "__esModule", { value: !0 }), t(98);
            var n = t(1);
            n.datepickerLocale("da", "da", {
                closeText: "Luk",
                prevText: "&#x3C;Forrige",
                nextText: "Næste&#x3E;",
                currentText: "Idag",
                monthNames: [
                    "Januar",
                    "Februar",
                    "Marts",
                    "April",
                    "Maj",
                    "Juni",
                    "Juli",
                    "August",
                    "September",
                    "Oktober",
                    "November",
                    "December"
                ],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
                dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayNamesMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
                weekHeader: "Uge",
                dateFormat: "dd-mm-yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                n.locale("da", {
                    buttonText: { month: "Måned", week: "Uge", day: "Dag", list: "Agenda" },
                    allDayText: "Hele dagen",
                    eventLimitText: "flere",
                    noEventsMessage: "Ingen arrangementer at vise"
                });
        },
        98: function (e, r, t) {
            !(function (e, r) {
                r(t(0));
            })(0, function (e) {
                return e.defineLocale("da", {
                    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
                        "_"
                    ),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[i dag kl.] LT",
                        nextDay: "[i morgen kl.] LT",
                        nextWeek: "på dddd [kl.] LT",
                        lastDay: "[i går kl.] LT",
                        lastWeek: "[i] dddd[s kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "få sekunder",
                        ss: "%d sekunder",
                        m: "et minut",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dage",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "et år",
                        yy: "%d år"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 4 }
                });
            });
        }
    });
});
