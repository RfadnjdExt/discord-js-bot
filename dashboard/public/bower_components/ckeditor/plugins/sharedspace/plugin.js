﻿/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
    function f(a, b, c) {
        var e, d;
        if ((c = "string" == typeof c ? CKEDITOR.document.getById(c) : new CKEDITOR.dom.element(c)))
            if ((e = a.fire("uiSpace", { space: b, html: "" }).html))
                a.on(
                    "uiSpace",
                    function (a) {
                        a.data.space == b && a.cancel();
                    },
                    null,
                    null,
                    1
                ),
                    (d = c.append(
                        CKEDITOR.dom.element.createFromHtml(
                            g.output({
                                id: a.id,
                                name: a.name,
                                langDir: a.lang.dir,
                                langCode: a.langCode,
                                space: b,
                                spaceId: a.ui.spaceId(b),
                                content: e
                            })
                        )
                    )),
                    c.getCustomData("cke_hasshared") ? d.hide() : c.setCustomData("cke_hasshared", 1),
                    d.unselectable(),
                    d.on("mousedown", function (a) {
                        a = a.data;
                        a.getTarget().hasAscendant("a", 1) || a.preventDefault();
                    }),
                    a.focusManager.add(d, 1),
                    a.on("focus", function () {
                        for (var a = 0, b, e = c.getChildren(); (b = e.getItem(a)); a++)
                            b.type == CKEDITOR.NODE_ELEMENT && !b.equals(d) && b.hasClass("cke_shared") && b.hide();
                        d.show();
                    }),
                    a.on("destroy", function () {
                        d.remove();
                    });
    }
    var g = CKEDITOR.addTemplate(
        "sharedcontainer",
        '\x3cdiv id\x3d"cke_{name}" class\x3d"cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_shared cke_detached cke_{langDir} ' +
            CKEDITOR.env.cssClass +
            '" dir\x3d"{langDir}" title\x3d"' +
            (CKEDITOR.env.gecko ? " " : "") +
            '" lang\x3d"{langCode}" role\x3d"presentation"\x3e\x3cdiv class\x3d"cke_inner"\x3e\x3cdiv id\x3d"{spaceId}" class\x3d"cke_{space}" role\x3d"presentation"\x3e{content}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
    );
    CKEDITOR.plugins.add("sharedspace", {
        init: function (a) {
            a.on(
                "loaded",
                function () {
                    var b = a.config.sharedSpaces;
                    if (b) for (var c in b) f(a, c, b[c]);
                },
                null,
                null,
                9
            );
        }
    });
})();
