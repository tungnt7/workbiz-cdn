(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c1c9a5b"],{5873:function(t,e,n){},"8f96":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"st-time"},[n("el-main",[n("el-form",{attrs:{model:t.formData}},[n("el-form-item",{attrs:{label:"Nhập ngày nghỉ lễ"}},[n("el-input",{attrs:{placeholder:"Nhập ngày nghỉ lễ cách nhau bằng dấu phẩy. Ví dụ: 30/04,01/05"},on:{change:function(e){return t.submitHoliday()}},model:{value:t.formData.holidays,callback:function(e){t.$set(t.formData,"holidays",e)},expression:"formData.holidays"}}),""!==t.validation.message?n("p",{staticClass:"wdg_error",domProps:{textContent:t._s(t.validation.message)}}):t._e()],1),n("time-slot")],1)],1)],1)},o=[],r=n("1da1"),s=(n("159b"),n("ac1f"),n("1276"),n("498a"),n("466d"),n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form-item",{attrs:{label:"Chọn khung giờ làm việc của công ty"}},[n("el-row",{staticClass:"time-slot__row "},[n("el-col",{attrs:{span:6}},[n("span",[t._v("Ngày")])]),n("el-col",{attrs:{span:9}},[n("span",[t._v("Sáng")])]),n("el-col",{attrs:{span:9}},[n("span",[t._v("Chiều")])])],1),t._l(t.slotWeekday,(function(e){return n("el-row",{key:e.weekday,staticClass:"time-slot__row"},[n("el-col",{attrs:{span:6}},[n("span",{domProps:{textContent:t._s(e.title)}})]),n("el-col",{attrs:{span:9}},[n("el-time-select",{staticClass:"time-slot__start",attrs:{"picker-options":{start:"07:00",step:"00:15",end:"10:00"},clearable:!1,placeholder:"Bắt đầu"},on:{change:function(n){return t.changeTime(e)}},model:{value:e.morning[0],callback:function(n){t.$set(e.morning,0,n)},expression:"slot.morning[0]"}}),n("el-time-select",{attrs:{"picker-options":{start:"11:00",step:"00:15",end:"12:00"},clearable:!1,placeholder:"Kết thúc"},on:{change:function(n){return t.changeTime(e)}},model:{value:e.morning[1],callback:function(n){t.$set(e.morning,1,n)},expression:"slot.morning[1]"}}),""!==t.validator?n("p",{staticClass:"time-slot__error",domProps:{textContent:t._s(t.validator)}}):t._e()],1),n("el-col",{attrs:{span:9}},[n("el-time-select",{staticClass:"time-slot__start",attrs:{"picker-options":{start:"13:00",step:"00:15",end:"14:00"},clearable:!1,placeholder:"Bắt đầu"},on:{change:function(n){return t.changeTime(e)}},model:{value:e.afternoon[0],callback:function(n){t.$set(e.afternoon,0,n)},expression:"slot.afternoon[0]"}}),n("el-time-select",{staticClass:"start",attrs:{"picker-options":{start:"17:00",step:"00:15",end:"20:00"},clearable:!1,placeholder:"Kết thúc"},on:{change:function(n){return t.changeTime(e)}},model:{value:e.afternoon[1],callback:function(n){t.$set(e.afternoon,1,n)},expression:"slot.afternoon[1]"}})],1)],1)}))],2)}),i=[],l=(n("a630"),n("3ca3"),n("c228")),c=n.n(l),u=n("aa22"),m={props:{dataSlot:{type:Object,default:function(){return{title:"",weekday:"",morning:["",""],afternoon:["",""]}}}},data:function(){return{endpoint:"/company/work-time",formData:{morning:this.dataSlot.morning||["",""],afternoon:this.dataSlot.afternoon||["",""],weekday:this.dataSlot.weekday,title:this.dataSlot.title},validator:"",slotWeekday:[{title:"Thứ 2 - Thứ 6",weekday:"mon-fri",afternoon:["",""],morning:["",""]},{title:"Thứ 7",weekday:"sat",afternoon:["",""],morning:["",""]},{title:"Chủ nhật",weekday:"sun",afternoon:["",""],morning:["",""]}]}},watch:{dataSlot:function(t){this.formData.morning=t.morning,this.formData.afternoon=t.afternoon,this.formData.title=t.title,this.formData.weekday=t.weekday}},mounted:function(){this.fetch()},methods:{fetch:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,u["a"].get(t.endpoint).then((function(t){t.data.forEach((function(t,e){n.slotWeekday[e].morning=[n.substring(t.start_time),n.substring(t.lunch_break_start)],n.slotWeekday[e].afternoon=[n.substring(t.lunch_break_end),n.substring(t.end_time)],n.slotWeekday[e].title=t.title}))}));case 3:case"end":return e.stop()}}),e)})))()},substring:function(t){return t&&t.length>5?t.substr(0,5):t},changeTime:function(t){var e=this;u["a"].post(this.endpoint,t).then((function(t){return 200===t.code?e.$message.success("Cập nhật thành công!"):e.$message.error("Vui lòng thử lại sau!")})).catch((function(t){return e.$message.error("Vui lòng thử lại sau!")}))},blurTime:function(t){t=t.$el,this.validator="";var e=c()(this.formData.morning).length===this.formData.morning.length,n=c()(this.formData.afternoon).length===this.formData.afternoon.length;if(n&&e){var a=Math.abs(new Date("2021/08/01 ".concat(this.formData.morning[0]))-new Date("2021/08/01 ".concat(this.formData.morning[1])))/36e5,o=Math.abs(new Date("2021/08/01 ".concat(this.formData.afternoon[0]))-new Date("2021/08/01 ".concat(this.formData.afternoon[1])))/36e5;a+o!==8?(this.validator="Một ngày cần 8 giờ làm việc!",this.addClassError(t)):(this.validator="",this.removeClassError(t))}else this.removeClassError(t)},addClassError:function(t){this.removeClassError(t),t.getElementsByTagName("input")[0].classList.add("time-slot__error-border")},removeClassError:function(){var t=document.querySelectorAll(".time-slot__error-border");Array.from(t).forEach((function(t,e){t.classList.remove("time-slot__error-border")}))}}},h=m,d=(n("fcb7"),n("2877")),f=Object(d["a"])(h,s,i,!1,null,null,null),g=f.exports,p={components:{TimeSlot:g},data:function(){return{endpoint:{holiday:"/company/holiday",worktime:"/company/work-time"},validation:{date:/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/,onlyDayMonth:/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])$/,message:""},formData:{holidays:""}}},mounted:function(){this.fetch()},methods:{fetch:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,u["a"].get(t.endpoint.holiday).then((function(t){n.formData.holidays=t.data}));case 2:case"end":return e.stop()}}),e)})))()},submitHoliday:function(){var t=this,e=this;this.formData.holidays.split(",").forEach((function(t){t=t.trim(),t.match(e.validation.date)||t.match(e.validation.onlyDayMonth)?e.validation.message="":e.validation.message="Không đúng định dạng (dd/mm hoặc dd/mm/yyyy)"})),""===e.validation.message&&u["a"].post(this.endpoint.holiday,this.formData).then((function(e){return 200===e.code?t.$message.success("Cập nhật thành công!"):t.$message.error("Vui lòng thử lại sau!")})).catch((function(e){return t.$message.error("Vui lòng thử lại sau!")}))}}},y=p,v=(n("b7e4"),Object(d["a"])(y,a,o,!1,null,null,null));e["default"]=v.exports},"99d6":function(t,e,n){},aa22:function(t,e,n){"use strict";n("d3b7");var a=n("bc3a"),o=n.n(a),r=n("5c96"),s=n("4360"),i=n("5f87"),l=o.a.create({baseURL:"https://work-api.chatbiz.io/api",timeout:6e4});l.interceptors.request.use((function(t){return s["a"].getters.token&&(t.headers["Authorization"]="Bearer ".concat(Object(i["a"])())),t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){var e=t.data;return e}),(function(t){var e=t.response.data;return Object(r["Message"])({message:e.message,type:"error",duration:3e3}),e})),e["a"]=l},b7e4:function(t,e,n){"use strict";n("99d6")},c228:function(t,e){function n(t){var e=-1,n=null==t?0:t.length,a=0,o=[];while(++e<n){var r=t[e];r&&(o[a++]=r)}return o}t.exports=n},fcb7:function(t,e,n){"use strict";n("5873")}}]);