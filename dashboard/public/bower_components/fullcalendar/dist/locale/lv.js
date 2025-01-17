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
        function t(s) {
            if (n[s]) return n[s].exports;
            var i = (n[s] = { i: s, l: !1, exports: {} });
            return e[s].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
        }
        var n = {};
        return (
            (t.m = e),
            (t.c = n),
            (t.d = function (e, n, s) {
                t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: s });
            }),
            (t.n = function (e) {
                var n =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return t.d(n, "a", n), n;
            }),
            (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 165))
        );
    })({
        0: function (t, n) {
            t.exports = e;
        },
        1: function (e, n) {
            e.exports = t;
        },
        165: function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }), n(166);
            var s = n(1);
            s.datepickerLocale("lv", "lv", {
                closeText: "Aizvērt",
                prevText: "Iepr.",
                nextText: "Nāk.",
                currentText: "Šodien",
                monthNames: [
                    "Janvāris",
                    "Februāris",
                    "Marts",
                    "Aprīlis",
                    "Maijs",
                    "Jūnijs",
                    "Jūlijs",
                    "Augusts",
                    "Septembris",
                    "Oktobris",
                    "Novembris",
                    "Decembris"
                ],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
                dayNames: ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"],
                dayNamesShort: ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"],
                dayNamesMin: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "Ss"],
                weekHeader: "Ned.",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }),
                s.locale("lv", {
                    buttonText: { month: "Mēnesis", week: "Nedēļa", day: "Diena", list: "Dienas kārtība" },
                    allDayText: "Visu dienu",
                    eventLimitText: function (e) {
                        return "+vēl " + e;
                    },
                    noEventsMessage: "Nav notikumu"
                });
        },
        166: function (e, t, n) {
            !(function (e, t) {
                t(n(0));
            })(0, function (e) {
                function t(e, t, n) {
                    return n
                        ? t % 10 == 1 && t % 100 != 11
                            ? e[2]
                            : e[3]
                        : t % 10 == 1 && t % 100 != 11
                        ? e[0]
                        : e[1];
                }
                function n(e, n, s) {
                    return e + " " + t(a[s], e, n);
                }
                function s(e, n, s) {
                    return t(a[s], e, n);
                }
                function i(e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm";
                }
                var a = {
                    ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
                    m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    h: "stundas_stundām_stunda_stundas".split("_"),
                    hh: "stundas_stundām_stunda_stundas".split("_"),
                    d: "dienas_dienām_diena_dienas".split("_"),
                    dd: "dienas_dienām_diena_dienas".split("_"),
                    M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    y: "gada_gadiem_gads_gadi".split("_"),
                    yy: "gada_gadiem_gads_gadi".split("_")
                };
                return e.defineLocale("lv", {
                    months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
                        "_"
                    ),
                    monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY.",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, HH:mm",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                    },
                    calendar: {
                        sameDay: "[Šodien pulksten] LT",
                        nextDay: "[Rīt pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[Pagājušā] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "pēc %s",
                        past: "pirms %s",
                        s: i,
                        ss: n,
                        m: s,
                        mm: n,
                        h: s,
                        hh: n,
                        d: s,
                        dd: n,
                        M: s,
                        MM: n,
                        y: s,
                        yy: n
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: { dow: 1, doy: 4 }
                });
            });
        }
    });
});
