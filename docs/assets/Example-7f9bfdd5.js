import{i as u,r as p,h as C,j as k,k as x,l as y,m as v,n as _,q as w,d as S,s as g,t as M,u as H,o as m,c as j,a as d,w as b,f,v as E,x as T,y as N,z,E as I,b as P,p as L,e as Z,A as D,_ as A}from"./index-6e13d9d5.js";/* empty css                */function K(o,l={}){const t=l.head||u();if(t)return t.ssr?t.push(o,l):V(t,o,l)}function V(o,l,t={}){const i=p(!1),s=p({});C(()=>{s.value=i.value?{}:_(l)});const a=o.push(s.value,t);return k(s,n=>{a.patch(n)}),w()&&(x(()=>{a.dispose()}),y(()=>{i.value=!0}),v(()=>{i.value=!1})),a}const B='<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Example</title><style>\n  /* cspell:disable-file */\n  /* webkit printing magic: print all background colors */\n  html {\n    -webkit-print-color-adjust: exact;\n  }\n  * {\n    box-sizing: border-box;\n    -webkit-print-color-adjust: exact;\n  }\n\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n  }\n  @media only screen {\n    body {\n      margin: 2em auto;\n      max-width: 900px;\n      color: rgb(55, 53, 47);\n    }\n  }\n\n  body {\n    line-height: 1.5;\n    white-space: pre-wrap;\n  }\n\n  a,\n  a.visited {\n    color: inherit;\n    text-decoration: underline;\n  }\n\n  .pdf-relative-link-path {\n    font-size: 80%;\n    color: #444;\n  }\n\n  h1,\n  h2,\n  h3 {\n    letter-spacing: -0.01em;\n    line-height: 1.2;\n    font-weight: 600;\n    margin-bottom: 0;\n  }\n\n  .page-title {\n    font-size: 2.5rem;\n    font-weight: 700;\n    margin-top: 0;\n    margin-bottom: 0.75em;\n  }\n\n  h1 {\n    font-size: 1.875rem;\n    margin-top: 1.875rem;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n    margin-top: 1.5rem;\n  }\n\n  h3 {\n    font-size: 1.25rem;\n    margin-top: 1.25rem;\n  }\n\n  .source {\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    padding: 1.5em;\n    word-break: break-all;\n  }\n\n  .callout {\n    border-radius: 3px;\n    padding: 1rem;\n  }\n\n  figure {\n    margin: 1.25em 0;\n    page-break-inside: avoid;\n  }\n\n  figcaption {\n    opacity: 0.5;\n    font-size: 85%;\n    margin-top: 0.5em;\n  }\n\n  mark {\n    background-color: transparent;\n  }\n\n  .indented {\n    padding-left: 1.5em;\n  }\n\n  hr {\n    background: transparent;\n    display: block;\n    width: 100%;\n    height: 1px;\n    visibility: visible;\n    border: none;\n    border-bottom: 1px solid rgba(55, 53, 47, 0.09);\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  @media only print {\n    img {\n      max-height: 100vh;\n      object-fit: contain;\n    }\n  }\n\n  @page {\n    margin: 1in;\n  }\n\n  .collection-content {\n    font-size: 0.875rem;\n  }\n\n  .column-list {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .column {\n    padding: 0 1em;\n  }\n\n  .column:first-child {\n    padding-left: 0;\n  }\n\n  .column:last-child {\n    padding-right: 0;\n  }\n\n  .table_of_contents-item {\n    display: block;\n    font-size: 0.875rem;\n    line-height: 1.3;\n    padding: 0.125rem;\n  }\n\n  .table_of_contents-indent-1 {\n    margin-left: 1.5rem;\n  }\n\n  .table_of_contents-indent-2 {\n    margin-left: 3rem;\n  }\n\n  .table_of_contents-indent-3 {\n    margin-left: 4.5rem;\n  }\n\n  .table_of_contents-link {\n    text-decoration: none;\n    opacity: 0.7;\n    border-bottom: 1px solid rgba(55, 53, 47, 0.18);\n  }\n\n  table,\n  th,\n  td {\n    border: 1px solid rgba(55, 53, 47, 0.09);\n    border-collapse: collapse;\n  }\n\n  table {\n    border-left: none;\n    border-right: none;\n  }\n\n  th,\n  td {\n    font-weight: normal;\n    padding: 0.25em 0.5em;\n    line-height: 1.5;\n    min-height: 1.5em;\n    text-align: left;\n  }\n\n  th {\n    color: rgba(55, 53, 47, 0.6);\n  }\n\n  ol,\n  ul {\n    margin: 0;\n    margin-block-start: 0.6em;\n    margin-block-end: 0.6em;\n  }\n\n  li > ol:first-child,\n  li > ul:first-child {\n    margin-block-start: 0.6em;\n  }\n\n  ul > li {\n    list-style: disc;\n  }\n\n  ul.to-do-list {\n    padding-inline-start: 0;\n  }\n\n  ul.to-do-list > li {\n    list-style: none;\n  }\n\n  .to-do-children-checked {\n    text-decoration: line-through;\n    opacity: 0.375;\n  }\n\n  ul.toggle > li {\n    list-style: none;\n  }\n\n  ul {\n    padding-inline-start: 1.7em;\n  }\n\n  ul > li {\n    padding-left: 0.1em;\n  }\n\n  ol {\n    padding-inline-start: 1.6em;\n  }\n\n  ol > li {\n    padding-left: 0.2em;\n  }\n\n  .mono ol {\n    padding-inline-start: 2em;\n  }\n\n  .mono ol > li {\n    text-indent: -0.4em;\n  }\n\n  .toggle {\n    padding-inline-start: 0em;\n    list-style-type: none;\n  }\n\n  /* Indent toggle children */\n  .toggle > li > details {\n    padding-left: 1.7em;\n  }\n\n  .toggle > li > details > summary {\n    margin-left: -1.1em;\n  }\n\n  .selected-value {\n    display: inline-block;\n    padding: 0 0.5em;\n    background: rgba(206, 205, 202, 0.5);\n    border-radius: 3px;\n    margin-right: 0.5em;\n    margin-top: 0.3em;\n    margin-bottom: 0.3em;\n    white-space: nowrap;\n  }\n\n  .collection-title {\n    display: inline-block;\n    margin-right: 1em;\n  }\n\n  .page-description {\n      margin-bottom: 2em;\n  }\n\n  .simple-table {\n    margin-top: 1em;\n    font-size: 0.875rem;\n    empty-cells: show;\n  }\n  .simple-table td {\n    height: 29px;\n    min-width: 120px;\n  }\n\n  .simple-table th {\n    height: 29px;\n    min-width: 120px;\n  }\n\n  .simple-table-header-color {\n    background: rgb(247, 246, 243);\n    color: black;\n  }\n  .simple-table-header {\n    font-weight: 500;\n  }\n\n  time {\n    opacity: 0.5;\n  }\n\n  .icon {\n    display: inline-block;\n    max-width: 1.2em;\n    max-height: 1.2em;\n    text-decoration: none;\n    vertical-align: text-bottom;\n    margin-right: 0.5em;\n  }\n\n  img.icon {\n    border-radius: 3px;\n  }\n\n  .user-icon {\n    width: 1.5em;\n    height: 1.5em;\n    border-radius: 100%;\n    margin-right: 0.5rem;\n  }\n\n  .user-icon-inner {\n    font-size: 0.8em;\n  }\n\n  .text-icon {\n    border: 1px solid #000;\n    text-align: center;\n  }\n\n  .page-cover-image {\n    display: block;\n    object-fit: cover;\n    width: 100%;\n    max-height: 30vh;\n  }\n\n  .page-header-icon {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n\n  .page-header-icon-with-cover {\n    margin-top: -0.72em;\n    margin-left: 0.07em;\n  }\n\n  .page-header-icon img {\n    border-radius: 3px;\n  }\n\n  .link-to-page {\n    margin: 1em 0;\n    padding: 0;\n    border: none;\n    font-weight: 500;\n  }\n\n  p > .user {\n    opacity: 0.5;\n  }\n\n  td > .user,\n  td > time {\n    white-space: nowrap;\n  }\n\n  input[type="checkbox"] {\n    transform: scale(1.5);\n    margin-right: 0.6em;\n    vertical-align: middle;\n  }\n\n  p {\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n  }\n\n  .image {\n    border: none;\n    margin: 1.5em 0;\n    padding: 0;\n    border-radius: 0;\n    text-align: center;\n  }\n\n  .code,\n  code {\n    background: rgba(135, 131, 120, 0.15);\n    border-radius: 3px;\n    padding: 0.2em 0.4em;\n    border-radius: 3px;\n    font-size: 85%;\n    tab-size: 2;\n  }\n\n  code {\n    color: #eb5757;\n  }\n\n  .code {\n    padding: 1.5em 1em;\n  }\n\n  .code-wrap {\n    white-space: pre-wrap;\n    word-break: break-all;\n  }\n\n  .code > code {\n    background: none;\n    padding: 0;\n    font-size: 100%;\n    color: inherit;\n  }\n\n  blockquote {\n    font-size: 1.25em;\n    margin: 1em 0;\n    padding-left: 1em;\n    border-left: 3px solid rgb(55, 53, 47);\n  }\n\n  .bookmark {\n    text-decoration: none;\n    max-height: 8em;\n    padding: 0;\n    display: flex;\n    width: 100%;\n    align-items: stretch;\n  }\n\n  .bookmark-title {\n    font-size: 0.85em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    height: 1.75em;\n    white-space: nowrap;\n  }\n\n  .bookmark-text {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .bookmark-info {\n    flex: 4 1 180px;\n    padding: 12px 14px 14px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n  .bookmark-image {\n    width: 33%;\n    flex: 1 1 180px;\n    display: block;\n    position: relative;\n    object-fit: cover;\n    border-radius: 1px;\n  }\n\n  .bookmark-description {\n    color: rgba(55, 53, 47, 0.6);\n    font-size: 0.75em;\n    overflow: hidden;\n    max-height: 4.5em;\n    word-break: break-word;\n  }\n\n  .bookmark-href {\n    font-size: 0.75em;\n    margin-top: 0.25em;\n  }\n\n  .sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }\n  .code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }\n  .serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n  .mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n  .pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK JP\'; }\n  .pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK SC\'; }\n  .pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK TC\'; }\n  .pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans CJK KR\'; }\n  .pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK JP\'; }\n  .pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK SC\'; }\n  .pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK TC\'; }\n  .pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK KR\'; }\n  .pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, \'Twemoji\', \'Noto Color Emoji\', \'Noto Serif CJK JP\'; }\n  .pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, \'Twemoji\', \'Noto Color Emoji\', \'Noto Serif CJK SC\'; }\n  .pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, \'Twemoji\', \'Noto Color Emoji\', \'Noto Serif CJK TC\'; }\n  .pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, \'Twemoji\', \'Noto Color Emoji\', \'Noto Serif CJK KR\'; }\n  .pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK JP\'; }\n  .pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK SC\'; }\n  .pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK TC\'; }\n  .pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, \'Twemoji\', \'Noto Color Emoji\', \'Noto Sans Mono CJK KR\'; }\n  .highlight-default {\n    color: rgba(55, 53, 47, 1);\n  }\n  .highlight-gray {\n    color: rgba(120, 119, 116, 1);\n    fill: rgba(120, 119, 116, 1);\n  }\n  .highlight-brown {\n    color: rgba(159, 107, 83, 1);\n    fill: rgba(159, 107, 83, 1);\n  }\n  .highlight-orange {\n    color: rgba(217, 115, 13, 1);\n    fill: rgba(217, 115, 13, 1);\n  }\n  .highlight-yellow {\n    color: rgba(203, 145, 47, 1);\n    fill: rgba(203, 145, 47, 1);\n  }\n  .highlight-teal {\n    color: rgba(68, 131, 97, 1);\n    fill: rgba(68, 131, 97, 1);\n  }\n  .highlight-blue {\n    color: rgba(51, 126, 169, 1);\n    fill: rgba(51, 126, 169, 1);\n  }\n  .highlight-purple {\n    color: rgba(144, 101, 176, 1);\n    fill: rgba(144, 101, 176, 1);\n  }\n  .highlight-pink {\n    color: rgba(193, 76, 138, 1);\n    fill: rgba(193, 76, 138, 1);\n  }\n  .highlight-red {\n    color: rgba(212, 76, 71, 1);\n    fill: rgba(212, 76, 71, 1);\n  }\n  .highlight-gray_background {\n    background: rgba(241, 241, 239, 1);\n  }\n  .highlight-brown_background {\n    background: rgba(244, 238, 238, 1);\n  }\n  .highlight-orange_background {\n    background: rgba(251, 236, 221, 1);\n  }\n  .highlight-yellow_background {\n    background: rgba(251, 243, 219, 1);\n  }\n  .highlight-teal_background {\n    background: rgba(237, 243, 236, 1);\n  }\n  .highlight-blue_background {\n    background: rgba(231, 243, 248, 1);\n  }\n  .highlight-purple_background {\n    background: rgba(244, 240, 247, 0.8);\n  }\n  .highlight-pink_background {\n    background: rgba(249, 238, 243, 0.8);\n  }\n  .highlight-red_background {\n    background: rgba(253, 235, 236, 1);\n  }\n  .block-color-default {\n    color: inherit;\n    fill: inherit;\n  }\n  .block-color-gray {\n    color: rgba(120, 119, 116, 1);\n    fill: rgba(120, 119, 116, 1);\n  }\n  .block-color-brown {\n    color: rgba(159, 107, 83, 1);\n    fill: rgba(159, 107, 83, 1);\n  }\n  .block-color-orange {\n    color: rgba(217, 115, 13, 1);\n    fill: rgba(217, 115, 13, 1);\n  }\n  .block-color-yellow {\n    color: rgba(203, 145, 47, 1);\n    fill: rgba(203, 145, 47, 1);\n  }\n  .block-color-teal {\n    color: rgba(68, 131, 97, 1);\n    fill: rgba(68, 131, 97, 1);\n  }\n  .block-color-blue {\n    color: rgba(51, 126, 169, 1);\n    fill: rgba(51, 126, 169, 1);\n  }\n  .block-color-purple {\n    color: rgba(144, 101, 176, 1);\n    fill: rgba(144, 101, 176, 1);\n  }\n  .block-color-pink {\n    color: rgba(193, 76, 138, 1);\n    fill: rgba(193, 76, 138, 1);\n  }\n  .block-color-red {\n    color: rgba(212, 76, 71, 1);\n    fill: rgba(212, 76, 71, 1);\n  }\n  .block-color-gray_background {\n    background: rgba(241, 241, 239, 1);\n  }\n  .block-color-brown_background {\n    background: rgba(244, 238, 238, 1);\n  }\n  .block-color-orange_background {\n    background: rgba(251, 236, 221, 1);\n  }\n  .block-color-yellow_background {\n    background: rgba(251, 243, 219, 1);\n  }\n  .block-color-teal_background {\n    background: rgba(237, 243, 236, 1);\n  }\n  .block-color-blue_background {\n    background: rgba(231, 243, 248, 1);\n  }\n  .block-color-purple_background {\n    background: rgba(244, 240, 247, 0.8);\n  }\n  .block-color-pink_background {\n    background: rgba(249, 238, 243, 0.8);\n  }\n  .block-color-red_background {\n    background: rgba(253, 235, 236, 1);\n  }\n  .select-value-color-uiBlue { background-color: rgba(35, 131, 226, .07); }\n  .select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n  .select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n  .select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n  .select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n  .select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }\n  .select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n  .select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n  .select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n  .select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }\n  .select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n  .select-value-color-pageGlass { background-color: undefined; }\n  .select-value-color-washGlass { background-color: undefined; }\n\n  .checkbox {\n    display: inline-flex;\n    vertical-align: text-bottom;\n    width: 16;\n    height: 16;\n    background-size: 16px;\n    margin-left: 2px;\n    margin-right: 5px;\n  }\n\n  .checkbox-on {\n    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");\n  }\n\n  .checkbox-off {\n    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");\n  }\n\n  </style></head><body><article id="5f6bf6ee-2344-4e2b-8fa7-80e25c32608b" class="page sans"><header><h1 class="page-title">Example</h1><p class="page-description"></p><table class="properties"><tbody><tr class="property-row property-row-date"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesDate"><path d="M3.29688 14.4561H12.7031C14.1797 14.4561 14.9453 13.6904 14.9453 12.2344V3.91504C14.9453 2.45215 14.1797 1.69336 12.7031 1.69336H3.29688C1.82031 1.69336 1.05469 2.45215 1.05469 3.91504V12.2344C1.05469 13.6973 1.82031 14.4561 3.29688 14.4561ZM3.27637 13.1162C2.70898 13.1162 2.39453 12.8154 2.39453 12.2207V5.9043C2.39453 5.30273 2.70898 5.00879 3.27637 5.00879H12.71C13.2842 5.00879 13.6055 5.30273 13.6055 5.9043V12.2207C13.6055 12.8154 13.2842 13.1162 12.71 13.1162H3.27637ZM6.68066 7.38086H7.08398C7.33008 7.38086 7.41211 7.30566 7.41211 7.05957V6.66309C7.41211 6.41699 7.33008 6.3418 7.08398 6.3418H6.68066C6.44141 6.3418 6.35938 6.41699 6.35938 6.66309V7.05957C6.35938 7.30566 6.44141 7.38086 6.68066 7.38086ZM8.92285 7.38086H9.31934C9.56543 7.38086 9.64746 7.30566 9.64746 7.05957V6.66309C9.64746 6.41699 9.56543 6.3418 9.31934 6.3418H8.92285C8.67676 6.3418 8.59473 6.41699 8.59473 6.66309V7.05957C8.59473 7.30566 8.67676 7.38086 8.92285 7.38086ZM11.1582 7.38086H11.5547C11.8008 7.38086 11.8828 7.30566 11.8828 7.05957V6.66309C11.8828 6.41699 11.8008 6.3418 11.5547 6.3418H11.1582C10.9121 6.3418 10.8301 6.41699 10.8301 6.66309V7.05957C10.8301 7.30566 10.9121 7.38086 11.1582 7.38086ZM4.44531 9.58203H4.84863C5.09473 9.58203 5.17676 9.50684 5.17676 9.26074V8.86426C5.17676 8.61816 5.09473 8.54297 4.84863 8.54297H4.44531C4.20605 8.54297 4.12402 8.61816 4.12402 8.86426V9.26074C4.12402 9.50684 4.20605 9.58203 4.44531 9.58203ZM6.68066 9.58203H7.08398C7.33008 9.58203 7.41211 9.50684 7.41211 9.26074V8.86426C7.41211 8.61816 7.33008 8.54297 7.08398 8.54297H6.68066C6.44141 8.54297 6.35938 8.61816 6.35938 8.86426V9.26074C6.35938 9.50684 6.44141 9.58203 6.68066 9.58203ZM8.92285 9.58203H9.31934C9.56543 9.58203 9.64746 9.50684 9.64746 9.26074V8.86426C9.64746 8.61816 9.56543 8.54297 9.31934 8.54297H8.92285C8.67676 8.54297 8.59473 8.61816 8.59473 8.86426V9.26074C8.59473 9.50684 8.67676 9.58203 8.92285 9.58203ZM11.1582 9.58203H11.5547C11.8008 9.58203 11.8828 9.50684 11.8828 9.26074V8.86426C11.8828 8.61816 11.8008 8.54297 11.5547 8.54297H11.1582C10.9121 8.54297 10.8301 8.61816 10.8301 8.86426V9.26074C10.8301 9.50684 10.9121 9.58203 11.1582 9.58203ZM4.44531 11.7832H4.84863C5.09473 11.7832 5.17676 11.708 5.17676 11.4619V11.0654C5.17676 10.8193 5.09473 10.7441 4.84863 10.7441H4.44531C4.20605 10.7441 4.12402 10.8193 4.12402 11.0654V11.4619C4.12402 11.708 4.20605 11.7832 4.44531 11.7832ZM6.68066 11.7832H7.08398C7.33008 11.7832 7.41211 11.708 7.41211 11.4619V11.0654C7.41211 10.8193 7.33008 10.7441 7.08398 10.7441H6.68066C6.44141 10.7441 6.35938 10.8193 6.35938 11.0654V11.4619C6.35938 11.708 6.44141 11.7832 6.68066 11.7832ZM8.92285 11.7832H9.31934C9.56543 11.7832 9.64746 11.708 9.64746 11.4619V11.0654C9.64746 10.8193 9.56543 10.7441 9.31934 10.7441H8.92285C8.67676 10.7441 8.59473 10.8193 8.59473 11.0654V11.4619C8.59473 11.708 8.67676 11.7832 8.92285 11.7832Z"></path></svg></span>date</th><td><time>@2024/03/21</time></td></tr><tr class="property-row property-row-text"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesText"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg></span>slug</th><td>adding-http-response-headers-to-a-netlify-static-website</td></tr><tr class="property-row property-row-select"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesSelect"><path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z"></path></svg></span>status</th><td><span class="selected-value select-value-color-red">Published</span></td></tr><tr class="property-row property-row-multi_select"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesMultipleSelect"><path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z"></path></svg></span>tags</th><td><span class="selected-value select-value-color-yellow">Jekyll</span><span class="selected-value select-value-color-pink">Website</span></td></tr><tr class="property-row property-row-text"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesText"><path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path></svg></span>summary</th><td>Eros vel condimentum elementum, ipsum ex ultricies neque, et consequat risus neque quis felis. Praesent ut lectus hendrerit sem eleifend cursus. Nunc eget pulvinar nisi. Duis vel orci nec mauris lacinia rutrum.</td></tr><tr class="property-row property-row-select"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesSelect"><path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z"></path></svg></span>type</th><td><span class="selected-value select-value-color-purple">Post</span></td></tr></tbody></table></header><div class="page-body"><hr id="d17bff17-eb3b-4651-97ac-02268d6377cb"/><p id="dffaad45-9563-4973-89a6-82fe42ea0405" class="">上面是分割线</p><p id="796123e8-6009-444b-bec4-2dd026ec9d2f" class="">标志符</p><hr id="726614f4-8dc4-4d88-a136-7c7a25683ff0"/><p id="20c62720-1740-4b5f-aee4-c273e49fa4b4" class="">title: node.js学习笔记<br/>date: 2019-09-29 01:07:10<br/>tags:<br/><div class="indented"><ul id="51a861fd-4b66-4008-b615-73365dba978e" class="bulleted-list"><li style="list-style-type:disc">node.js</li></ul></div></p><hr id="bcea41c1-a01b-47a5-9b0a-8fdd923102bf"/><nav id="a2dc4a0b-5d42-48c2-8050-98087b82552c" class="block-color-gray table_of_contents"><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#56981161-f1cb-4011-b74f-73445f7c6d67">1、标题</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#b4ca0e35-1e94-4102-bdb4-5ac53f127593">1.1、表格</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#b1c68179-f740-4201-9426-6010463ce8ad">1.1.1、文字内容长短</a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#a5409030-5110-49fe-80db-58cbfb81732e">2、表情</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#6c1629bb-a204-488d-9174-5c4e8cf27919">2.1、图片</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#17dfe0fe-1778-428a-808e-a9af1d2ae3c0">标题2.1.1</a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#a496f7c7-5869-4388-80fe-b8d5b474d564">标题3</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#330cff33-a185-4013-a80c-d6771f244f3f">标题3.1</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#dde3850c-3dd2-444a-9754-4c2ae086458a">3.1.1、各种符号内容</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#133c4904-798f-4714-af2f-e7f5990a2389">3.1.2、代码</a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#9cd421a9-3995-4bdf-9450-dc7bb3c83453">3.1.3、数学公式</a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#5fab2980-b404-40dc-a6a1-6f11595670fe">Latex</a></div></nav><h1 id="56981161-f1cb-4011-b74f-73445f7c6d67" class="">1、标题</h1><h2 id="b4ca0e35-1e94-4102-bdb4-5ac53f127593" class="">1.1、表格</h2><table id="9724f832-2f2c-45ad-8b43-bd8e28fa7bcd" class="simple-table"><tbody><tr id="68337f7f-8dba-43cb-a208-78163dc8217c"><td id="bkJ@" class="">学号</td><td id="IHba" class="">名字</td><td id="S^L^" class="">性别</td></tr><tr id="e56abbb2-5cda-4ed8-beca-802f672db8b7"><td id="bkJ@" class="">1</td><td id="IHba" class="">张三</td><td id="S^L^" class="">男</td></tr><tr id="8c0e2bd5-8ca7-4b4e-8ec4-a226fb1590df"><td id="bkJ@" class="">2</td><td id="IHba" class="">李四</td><td id="S^L^" class="">女</td></tr></tbody></table><h3 id="b1c68179-f740-4201-9426-6010463ce8ad" class="">1.1.1、文字内容长短</h3><p id="5494f3bb-c388-498c-b5a6-cd9a0595fac8" class="">内容1-段内容</p><p id="3cb2b61c-1022-42db-994a-c93678e14631" class="">内容2-长内容：我的身份萨芬发顺丰萨法沙发沙发上开发撒发家史副科级阿是咖啡机阿达是开发机阿萨达会计法卡萨代发手打开发机阿卡拉手打飞机卡拉手打飞机啊索拉卡水电费加快速度荆防颗粒萨达剪发卡拉萨的饭卡手打飞机刷卡老大首付款啦适得府君书打开。</p><h1 id="a5409030-5110-49fe-80db-58cbfb81732e" class="">2、表情</h1><p id="530f9811-a524-4f97-bde2-b73430cb2907" class="">🥰</p><h2 id="6c1629bb-a204-488d-9174-5c4e8cf27919" class="">2.1、图片</h2><figure id="427f833c-1e99-4cf4-8a4b-8246fb54557e" class="image"><a href="Example%205f6bf6ee23444e2b8fa780e25c32608b_2015_logo.svg.png"><img style="width:288px" src="../src/views/Example/Google_2015_logo.svg.png"/></a></figure><h3 id="17dfe0fe-1778-428a-808e-a9af1d2ae3c0" class="">标题2.1.1</h3><p id="f75f979e-bae8-4458-9786-c29276dccb6d" class="">Lorem <mark class="highlight-red_background">ipsum </mark>dolor <strong>amet</strong> tousled <del>viral</del> art party <em>blue</em> bottle <mark class="highlight-red">single-origin</mark> coffee cardigan, selvage man braid helvetica. Banh mi taxidermy meditation microdosing. Selvage cornhole YOLO, small batch vexillologist raclette VHS prism sustainable 8-bit ugh semiotics letterpress disrupt pop-up. Celiac shabby chic ugh, jianbing whatever kitsch tattooed edison bulb kogi irony etsy.</p><h1 id="a496f7c7-5869-4388-80fe-b8d5b474d564" class="">标题3</h1><h2 id="330cff33-a185-4013-a80c-d6771f244f3f" class="">标题3.1</h2><h3 id="dde3850c-3dd2-444a-9754-4c2ae086458a" class="">3.1.1、各种符号内容</h3><blockquote id="53e50dd2-a79f-4949-8afb-bdfdad9f109f" class="">1、测试<br/>2、测试<br/></blockquote><ul id="a7c91a27-7b1a-4ee5-9f12-e9675050ec06" class="toggle"><li><details open=""><summary>测试</summary><h1 id="9fee2a54-5fe9-406d-ad31-d62f9175e94f" class="">表</h1></details></li></ul><ul id="77f6791e-4907-41d0-ad34-87b7241766b2" class="to-do-list"><li><div class="checkbox checkbox-off"></div> <span class="to-do-children-unchecked">1、测试</span><div class="indented"></div></li></ul><ul id="3aacfc7b-2df1-469d-871c-3df85bab5f97" class="to-do-list"><li><div class="checkbox checkbox-on"></div> <span class="to-do-children-checked">2、内容</span><div class="indented"></div></li></ul><p id="7fc854a8-7dec-4532-8c36-54774d22f825" class="">结果</p><ul id="49cbb460-140a-4814-a9ef-8c35b6f4b2e4" class="toggle"><li><details open=""><summary>终于</summary><p id="e4996aba-7250-4b27-902a-a4c45377e06f" class="">终于1</p><p id="725fd9d4-fed7-4f42-97c7-33d1a0114968" class="">终于2</p></details></li></ul><p id="536a26ed-02b4-4e9f-a103-9342619bfa34" class="">结果2</p><p id="b82d1afa-5324-44ef-820b-2e5b90b3110d" class="">结果3</p><h3 id="133c4904-798f-4714-af2f-e7f5990a2389" class="">3.1.2、代码</h3><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" integrity="sha512-7Z9J3l1+EYfeaPKcGXu3MS/7T+w19WtKQY/n+xzmw4hZhJ9tyYmcUS+4QqAlzhicE5LAfMQSF3iFTK9bQdTxXg==" crossorigin="anonymous" referrerPolicy="no-referrer"><\/script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ==" crossorigin="anonymous" referrerPolicy="no-referrer"/><pre id="e08229bf-c82c-4834-a875-40d5979e9bcf" class="code"><code class="language-JavaScript">const BLOG = {\n    title: &#x27;CRAIGARY&#x27;,\n    author: &#x27;Craig Hart&#x27;,\n    email: &#x27;i@craigary.net&#x27;,\n    link: &#x27;https://nobelium.vercel.app&#x27;,\n    description: &#x27;This gonna be an awesome website.&#x27;,\n    lang: &#x27;en-US&#x27;,\n    appearance: &#x27;auto&#x27;, // [&#x27;light&#x27;, &#x27;dark&#x27;, &#x27;auto&#x27;],\n    lightBackground: &#x27;#ffffff&#x27;, // use hex value, don&#x27;t forget &#x27;#&#x27; e.g #fffefc\n    darkBackground: &#x27;#111827&#x27;, // use hex value, don&#x27;t forget &#x27;#&#x27;\n    path: &#x27;&#x27;, // leave this empty unless you want to deploy Nobelium in a folder\n    since: 2021, // if leave this empty, current year will be used.\n    postsPerPage: 7,\n    showAbout: true, // WIP\n    showArchive: true, // WIP\n    socialLink: &#x27;https://twitter.com/craigaryhart&#x27;,\n    seo: {\n      keywords: [&#x27;Blog&#x27;, &#x27;Website&#x27;, &#x27;Notion&#x27;],\n      googleSiteVerification: &#x27;&#x27; // Remove the value or replace it with your own google site verification code\n    },\n    notionPageId: ({}).NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！\n  }\n  // export default BLOG\n  module.exports = BLOG</code></pre><h3 id="9cd421a9-3995-4bdf-9450-dc7bb3c83453" class="">3.1.3、数学公式</h3><h2 id="5fab2980-b404-40dc-a6a1-6f11595670fe" class="">Latex</h2><p id="04797149-d57d-48b5-a223-aa9c86ccefe5" class=""><style>@import url(\'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css\')</style><span data-token-index="0" contenteditable="false" class="notion-text-equation-token" style="user-select:all;-webkit-user-select:all;-moz-user-select:all"><span></span><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span><span>\uFEFF</span></span></p></div></article><span class="sans" style="font-size:14px;padding-top:2em"></span></body></html>\n',F=o=>(L("data-v-b17b4b25"),o=o(),Z(),o),J={class:"dark"},U={class:"grid-content"},G=F(()=>f("div",{class:"grid-content ep-bg-purple"},null,-1)),R=S({__name:"Example",setup(o){g.init();const l=g.allData[2].pages[0].path,t=z(()=>D(()=>import(l),[]));M(()=>{const e=document.querySelector(".markdown-body");if(e){const n=e.querySelector("h1"),r=e.querySelector("hr");if(n&&r){let c=n.nextSibling;for(;c&&c!==r;){const h=c.nextSibling;e.removeChild(c),c=h}e.removeChild(r)}}}),K({title:"我是新标题",meta:[{name:"description",content:()=>"我是描述，中国，joyce"}],titleTemplate:"My Site - %s"});const i=document.createElement("div");i.innerHTML=B;const s=i.querySelector(".properties");for(let a=0;a<s.rows.length;a++){const e=s.rows[a];for(let n=0;n<e.cells.length;n++)e.cells[n]}return H(),(a,e)=>{const n=I,r=P;return m(),j("div",J,[d(r,{justify:"center"},{default:b(()=>[d(n,{xs:24,sm:24,md:{span:16,offset:2},lg:{span:16,offset:2}},{default:b(()=>[f("div",U,[(m(),E(T(N(t))))])]),_:1}),d(n,{xs:24,sm:24,md:6,lg:6,class:"hidden-sm-and-down"},{default:b(()=>[G]),_:1})]),_:1})])}}});const W=A(R,[["__scopeId","data-v-b17b4b25"]]);export{W as default};
