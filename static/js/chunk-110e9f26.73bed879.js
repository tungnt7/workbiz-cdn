(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-110e9f26"],{"8d07":function(t,i,s){"use strict";s("9d39")},"9d39":function(t,i,s){},a902:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"ww-system"},[s("div",{staticClass:"ww-system__title"},[t._v("Cài đặt hệ thống")]),s("div",{staticClass:"ww-system__body"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"Cài đặt thông báo"}},[s("div",{staticClass:"ls-projects"},[s("div",{staticClass:"ls-projects__header"},[t._v(" Tắt / Bật thông báo ")]),t._l(t.projects,(function(i){return s("div",{key:i.project_id,staticClass:"ls-projects__item"},[s("div",{staticClass:"item-info"},[s("div",{staticClass:"item-info__color",style:"--color: "+(i.map_color?i.map_color.color:"#d4d4d4")}),s("div",{staticClass:"item-info__name",domProps:{textContent:t._s(i.name)}})]),s("div",{staticClass:"item-action"},[s("el-switch",{attrs:{value:!!i.pivot.is_get_notification},on:{change:function(s){return t.change(i)}}})],1)])}))],2)]),s("el-tab-pane",{attrs:{label:"Cài đặt hiển thị"}},[t._v("Cài đặt hiển thị")])],1)],1)])},n=[],c=(s("d81d"),s("c24f")),a={data:function(){return{activeName:"first",projects:[]}},created:function(){this.fetch()},methods:{fetch:function(){var t=this;Object(c["g"])().then((function(i){t.projects=i.data}))},change:function(t){var i=this;Object(c["o"])(t.project_id).then((function(s){i.projects.map((function(i){i.project_id===t.project_id&&(i.pivot.is_get_notification=!i.pivot.is_get_notification)}))}))}}},o=a,r=(s("8d07"),s("2877")),l=Object(r["a"])(o,e,n,!1,null,null,null);i["default"]=l.exports}}]);