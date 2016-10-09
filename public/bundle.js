webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var angular = __webpack_require__(5);
	var router = __webpack_require__(7);
	var animate = __webpack_require__(8);
	var aria = __webpack_require__(10);
	var material = __webpack_require__(12);
	var table = __webpack_require__(14);
	var ngMessages = __webpack_require__(16);
	
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	
	window.APP = angular.module('app', [router, ngMessages, aria, animate, material, table, 'http-auth-interceptor']);
	
	APP.run(__webpack_require__(22));
	__webpack_require__(23)(APP);
	
	__webpack_require__(165).directive(APP);
	__webpack_require__(168).directive(APP);
	
	__webpack_require__(169)(APP);
	
	__webpack_require__(170)(APP);
	__webpack_require__(192)(APP);
	__webpack_require__(200)(APP);
	
	APP.directive(__webpack_require__(201).name, __webpack_require__(201).fn);

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($rootScope, $location, $mdDialog, $state) {
	  $rootScope.$on('event:auth-loginRequired', function () {
	    if ($location.$$path !== '/') {
	      if ($rootScope.currentUser && $rootScope.currentUser.usuario) $location.path('/dashboard');else {
	        $location.path('/');
	      }
	    }
	    return false;
	  });
	
	  $rootScope.showConfirm = function (evt, msg, msgLarg) {
	    var confirm = $mdDialog.confirm().title(msg).textContent(msgLarg).ariaLabel('Lucky day').targetEvent(evt).ok('Si').cancel('No');
	
	    return $mdDialog.show(confirm);
	  };
	
	  $rootScope.$on('event:auth-loginRequired', function () {
	    $state.go('main');
	  });
	};
	module.exports.$inject = ["$rootScope", "$location", "$mdDialog", "$state"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	main.$inject = ["$urlRouterProvider", "$locationProvider"];
	var moment = __webpack_require__(24);
	
	module.exports = function (APP) {
	  APP.config(main);
	
	  __webpack_require__(131)(APP);
	  __webpack_require__(154)(APP);
	};
	
	/*@ngInject*/
	function main($urlRouterProvider, $locationProvider) {
	  $urlRouterProvider.otherwise('/');
	  $locationProvider.html5Mode(true);
	  moment.locale("es");
	};
	
	// injector
	APP.config(__webpack_require__(162));
	// endinjector

/***/ },
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 27,
		"./af.js": 27,
		"./ar": 28,
		"./ar-ly": 29,
		"./ar-ly.js": 29,
		"./ar-ma": 30,
		"./ar-ma.js": 30,
		"./ar-sa": 31,
		"./ar-sa.js": 31,
		"./ar-tn": 32,
		"./ar-tn.js": 32,
		"./ar.js": 28,
		"./az": 33,
		"./az.js": 33,
		"./be": 34,
		"./be.js": 34,
		"./bg": 35,
		"./bg.js": 35,
		"./bn": 36,
		"./bn.js": 36,
		"./bo": 37,
		"./bo.js": 37,
		"./br": 38,
		"./br.js": 38,
		"./bs": 39,
		"./bs.js": 39,
		"./ca": 40,
		"./ca.js": 40,
		"./cs": 41,
		"./cs.js": 41,
		"./cv": 42,
		"./cv.js": 42,
		"./cy": 43,
		"./cy.js": 43,
		"./da": 44,
		"./da.js": 44,
		"./de": 45,
		"./de-at": 46,
		"./de-at.js": 46,
		"./de.js": 45,
		"./dv": 47,
		"./dv.js": 47,
		"./el": 48,
		"./el.js": 48,
		"./en-au": 49,
		"./en-au.js": 49,
		"./en-ca": 50,
		"./en-ca.js": 50,
		"./en-gb": 51,
		"./en-gb.js": 51,
		"./en-ie": 52,
		"./en-ie.js": 52,
		"./en-nz": 53,
		"./en-nz.js": 53,
		"./eo": 54,
		"./eo.js": 54,
		"./es": 55,
		"./es-do": 56,
		"./es-do.js": 56,
		"./es.js": 55,
		"./et": 57,
		"./et.js": 57,
		"./eu": 58,
		"./eu.js": 58,
		"./fa": 59,
		"./fa.js": 59,
		"./fi": 60,
		"./fi.js": 60,
		"./fo": 61,
		"./fo.js": 61,
		"./fr": 62,
		"./fr-ca": 63,
		"./fr-ca.js": 63,
		"./fr-ch": 64,
		"./fr-ch.js": 64,
		"./fr.js": 62,
		"./fy": 65,
		"./fy.js": 65,
		"./gd": 66,
		"./gd.js": 66,
		"./gl": 67,
		"./gl.js": 67,
		"./he": 68,
		"./he.js": 68,
		"./hi": 69,
		"./hi.js": 69,
		"./hr": 70,
		"./hr.js": 70,
		"./hu": 71,
		"./hu.js": 71,
		"./hy-am": 72,
		"./hy-am.js": 72,
		"./id": 73,
		"./id.js": 73,
		"./is": 74,
		"./is.js": 74,
		"./it": 75,
		"./it.js": 75,
		"./ja": 76,
		"./ja.js": 76,
		"./jv": 77,
		"./jv.js": 77,
		"./ka": 78,
		"./ka.js": 78,
		"./kk": 79,
		"./kk.js": 79,
		"./km": 80,
		"./km.js": 80,
		"./ko": 81,
		"./ko.js": 81,
		"./ky": 82,
		"./ky.js": 82,
		"./lb": 83,
		"./lb.js": 83,
		"./lo": 84,
		"./lo.js": 84,
		"./lt": 85,
		"./lt.js": 85,
		"./lv": 86,
		"./lv.js": 86,
		"./me": 87,
		"./me.js": 87,
		"./mi": 88,
		"./mi.js": 88,
		"./mk": 89,
		"./mk.js": 89,
		"./ml": 90,
		"./ml.js": 90,
		"./mr": 91,
		"./mr.js": 91,
		"./ms": 92,
		"./ms-my": 93,
		"./ms-my.js": 93,
		"./ms.js": 92,
		"./my": 94,
		"./my.js": 94,
		"./nb": 95,
		"./nb.js": 95,
		"./ne": 96,
		"./ne.js": 96,
		"./nl": 97,
		"./nl.js": 97,
		"./nn": 98,
		"./nn.js": 98,
		"./pa-in": 99,
		"./pa-in.js": 99,
		"./pl": 100,
		"./pl.js": 100,
		"./pt": 101,
		"./pt-br": 102,
		"./pt-br.js": 102,
		"./pt.js": 101,
		"./ro": 103,
		"./ro.js": 103,
		"./ru": 104,
		"./ru.js": 104,
		"./se": 105,
		"./se.js": 105,
		"./si": 106,
		"./si.js": 106,
		"./sk": 107,
		"./sk.js": 107,
		"./sl": 108,
		"./sl.js": 108,
		"./sq": 109,
		"./sq.js": 109,
		"./sr": 110,
		"./sr-cyrl": 111,
		"./sr-cyrl.js": 111,
		"./sr.js": 110,
		"./ss": 112,
		"./ss.js": 112,
		"./sv": 113,
		"./sv.js": 113,
		"./sw": 114,
		"./sw.js": 114,
		"./ta": 115,
		"./ta.js": 115,
		"./te": 116,
		"./te.js": 116,
		"./th": 117,
		"./th.js": 117,
		"./tl-ph": 118,
		"./tl-ph.js": 118,
		"./tlh": 119,
		"./tlh.js": 119,
		"./tr": 120,
		"./tr.js": 120,
		"./tzl": 121,
		"./tzl.js": 121,
		"./tzm": 122,
		"./tzm-latn": 123,
		"./tzm-latn.js": 123,
		"./tzm.js": 122,
		"./uk": 124,
		"./uk.js": 124,
		"./uz": 125,
		"./uz.js": 125,
		"./vi": 126,
		"./vi.js": 126,
		"./x-pseudo": 127,
		"./x-pseudo.js": 127,
		"./zh-cn": 128,
		"./zh-cn.js": 128,
		"./zh-hk": 129,
		"./zh-hk.js": 129,
		"./zh-tw": 130,
		"./zh-tw.js": 130
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 26;


/***/ },
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	main.$inject = ["$stateProvider"];
	module.exports = function sys(APP) {
	  APP.config(main);
	
	  APP.config(__webpack_require__(132));
	  APP.config(__webpack_require__(137));
	  APP.config(__webpack_require__(140));
	  APP.config(__webpack_require__(143));
	  APP.config(__webpack_require__(146));
	  APP.config(__webpack_require__(149));
	};
	
	/*@ngInject*/
	function main($stateProvider) {
	  $stateProvider.state('sys', {
	    url: '/sys',
	    template: __webpack_require__(152)(),
	    controller: __webpack_require__(153)
	  });
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($stateProvider) {
	  $stateProvider.state('sys.roles', {
	    parent: 'sys',
	    url: '/roles',
	    template: __webpack_require__(133)(),
	    controller: __webpack_require__(136)
	  });
	};
	module.exports.$inject = ["$stateProvider"];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (modal) {pug_mixins["table_crud"] = pug_interp = function(name, model, columns, filter){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cmd-card\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-hide=\"selected.length || filter.show\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 class=\"md-title\"\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv flex=\"\"\u003E\u003C\u002Fdiv\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"filter.show = true\"\u003E\u003Cmd-icon\u003Efilter_list\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"add($event)\"\u003E\u003Cmd-icon\u003Eadd\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-show=\"filter.show &amp;&amp; !selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cmd-icon\u003Esearch\u003C\u002Fmd-icon\u003E\u003Cform flex=\"\" name=\"filter.form\"\u003E\u003Cinput type=\"text\" ng-model=\"query.filter\" ng-model-options=\"filter.options\" placeholder=\"buscar...\"\u003E\u003C\u002Fform\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"removeFilter()\"\u003E\u003Cmd-icon\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar alternate\" ng-show=\"selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cdiv\u003E{{selected.length}} {{selected.length \u003E 1 ? 'items' : 'item'}} selected\u003C\u002Fdiv\u003E\u003Cspan\u003E";
	if (block) {
	block && block();
	}
	else {
	pug_html = pug_html + "\u003Cmd-button class=\"md-icon-button\" ng-click=\"edit($event)\"\u003E\u003Cmd-icon\u003Eedit\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"delete($event)\"\u003E\u003Cmd-icon\u003Edelete\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-table-container\u003E\u003Ctable md-table md-row-select ng-model=\"selected\" md-progress=\"promise\"\u003E\u003Cthead md-head md-order=\"query.order\"\u003E\u003Ctr md-row\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody md-body\u003E\u003Ctr" + (" md-row md-auto-select md-select=\"item\""+pug.attr("ng-repeat", `item in ${model} | orderBy:query.order | albTable: ${filter}`, true, true)) + "\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fmd-table-container\u003E\u003Cmd-table-pagination" + (" md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\""+pug.attr("md-total", `{{${modal}.length}}`, true, true)+" md-page-select=\"\"") + "\u003E\u003C\u002Fmd-table-pagination\u003E\u003C\u002Fmd-card\u003E";
	};
	pug_html = pug_html + "\u003Cdiv\u003E";
	pug_mixins["table_crud"].call({
	block: function(){
	pug_html = pug_html + "\u003Cmd-button class=\"md-icon-button\" ng-click=\"editOptions($event)\"\u003E\u003Cmd-icon\u003Elist\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"edit($event)\"\u003E\u003Cmd-icon\u003Eedit\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"delete($event)\"\u003E\u003Cmd-icon\u003Edelete\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E";
	}
	}, 
	    'Roles',
	    'roles',
	    [
	      {name: 'ID',     model: 'id_role', isNumber: true, width: 50},
	      {name: 'Nombre', model: 'name'},
	      {name: 'Descripcion', model: 'description'}
	    ],
	    '[query.filter, "id_role", "name", "description"]'
	  );
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"modal" in locals_for_with?locals_for_with.modal:typeof modal!=="undefined"?modal:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 134 */,
/* 135 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 136 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, albModals, albApi) {
	  albApi.configTable($scope);
	
	  $scope.add = function (evt) {
	    albModals.openAddRole(evt).then($scope.get);
	  };
	
	  function onGet(result) {
	    $scope.roles = result;
	  }
	  $scope.get = function () {
	    $scope.promise = albApi.roles.getAll().then(onGet);
	  };
	
	  $scope.edit = function (evt) {
	    var role = $scope.selected[0];
	    albModals.openEditRole(evt, role.id_role).then($scope.get);
	  };
	
	  $scope.delete = function (evt) {
	    var role = $scope.selected[0];
	    $scope.showConfirm(evt, 'Esta seguro de elimiar el rol ' + role.name).then(function () {
	      return role.id_role;
	    }).then(albApi.roles.delete).then(function () {
	      return $scope.selected.length = 0;
	    }).then($scope.get).catch(albApi.toast.catch);
	  };
	  $scope.editOptions = function (evt) {
	    var role = $scope.selected[0];
	    albModals.openEditOptionsRole(evt, role.id_role);
	  };
	  $scope.get();
	};
	module.exports.$inject = ["$scope", "albModals", "albApi"];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($stateProvider) {
	  $stateProvider.state('sys.states', {
	    parent: 'sys',
	    url: '/states',
	    template: __webpack_require__(138)(),
	    controller: __webpack_require__(139)
	  });
	};
	module.exports.$inject = ["$stateProvider"];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (modal) {pug_mixins["table_crud"] = pug_interp = function(name, model, columns, filter){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cmd-card\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-hide=\"selected.length || filter.show\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 class=\"md-title\"\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv flex=\"\"\u003E\u003C\u002Fdiv\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"filter.show = true\"\u003E\u003Cmd-icon\u003Efilter_list\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"add($event)\"\u003E\u003Cmd-icon\u003Eadd\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-show=\"filter.show &amp;&amp; !selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cmd-icon\u003Esearch\u003C\u002Fmd-icon\u003E\u003Cform flex=\"\" name=\"filter.form\"\u003E\u003Cinput type=\"text\" ng-model=\"query.filter\" ng-model-options=\"filter.options\" placeholder=\"buscar...\"\u003E\u003C\u002Fform\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"removeFilter()\"\u003E\u003Cmd-icon\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar alternate\" ng-show=\"selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cdiv\u003E{{selected.length}} {{selected.length \u003E 1 ? 'items' : 'item'}} selected\u003C\u002Fdiv\u003E\u003Cspan\u003E";
	if (block) {
	block && block();
	}
	else {
	pug_html = pug_html + "\u003Cmd-button class=\"md-icon-button\" ng-click=\"edit($event)\"\u003E\u003Cmd-icon\u003Eedit\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"delete($event)\"\u003E\u003Cmd-icon\u003Edelete\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-table-container\u003E\u003Ctable md-table md-row-select ng-model=\"selected\" md-progress=\"promise\"\u003E\u003Cthead md-head md-order=\"query.order\"\u003E\u003Ctr md-row\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody md-body\u003E\u003Ctr" + (" md-row md-auto-select md-select=\"item\""+pug.attr("ng-repeat", `item in ${model} | orderBy:query.order | albTable: ${filter}`, true, true)) + "\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fmd-table-container\u003E\u003Cmd-table-pagination" + (" md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\""+pug.attr("md-total", `{{${modal}.length}}`, true, true)+" md-page-select=\"\"") + "\u003E\u003C\u002Fmd-table-pagination\u003E\u003C\u002Fmd-card\u003E";
	};
	pug_html = pug_html + "\u003Cdiv\u003E";
	pug_mixins["table_crud"](
	    'Estados',
	    'states',
	    [
	      {name: 'ID',     model: 'id_state', isNumber: true, width: 50},
	      {name: 'Nombre', model: 'name'},
	      {name: 'Descripcion', model: 'description'},
	      {name: 'Tabla', model: 'table_name'},
	    ],
	    '[query.filter, "id_state", "name", "description", "table_name"]'
	  );
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"modal" in locals_for_with?locals_for_with.modal:typeof modal!=="undefined"?modal:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 139 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, albModals, albApi) {
	  $scope.selected = [];
	  $scope.filter = {
	    options: {
	      debounce: 500
	    }
	  };
	  $scope.limitOptions = [5, 10, 15];
	  $scope.query = {
	    order: 'name',
	    limit: 5,
	    page: 1
	  };
	
	  $scope.removeFilter = function () {
	    $scope.filter.show = false;
	    $scope.query.filter = '';
	
	    if ($scope.filter.form.$dirty) {
	      $scope.filter.form.$setPristine();
	    }
	  };
	  console.log($scope);
	  $scope.add = function (evt) {
	    albModals.openAddState(evt).then($scope.get);
	  };
	
	  function onGet(result) {
	    $scope.states = result;
	  }
	  $scope.get = function () {
	    $scope.promise = albApi.states.getAll().then(onGet);
	  };
	
	  $scope.edit = function (evt) {
	    var state = $scope.selected[0];
	    albModals.openEditState(evt, state.id_state_db).then($scope.get);
	  };
	
	  $scope.delete = function (evt) {
	    var state = $scope.selected[0];
	    $scope.showConfirm(evt, 'Esta seguro de eliminar el estado ' + state.name).then(function () {
	      return state.id_state_db;
	    }).then(albApi.states.delete).then(function () {
	      return $scope.selected.length = 0;
	    }).then($scope.get);
	  };
	
	  $scope.get();
	};
	module.exports.$inject = ["$scope", "albModals", "albApi"];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($stateProvider) {
	  $stateProvider.state('sys.types', {
	    parent: 'sys',
	    url: '/types',
	    template: __webpack_require__(141)(),
	    controller: __webpack_require__(142)
	  });
	};
	module.exports.$inject = ["$stateProvider"];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (modal) {pug_mixins["table_crud"] = pug_interp = function(name, model, columns, filter){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cmd-card\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-hide=\"selected.length || filter.show\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 class=\"md-title\"\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv flex=\"\"\u003E\u003C\u002Fdiv\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"filter.show = true\"\u003E\u003Cmd-icon\u003Efilter_list\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"add($event)\"\u003E\u003Cmd-icon\u003Eadd\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-show=\"filter.show &amp;&amp; !selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cmd-icon\u003Esearch\u003C\u002Fmd-icon\u003E\u003Cform flex=\"\" name=\"filter.form\"\u003E\u003Cinput type=\"text\" ng-model=\"query.filter\" ng-model-options=\"filter.options\" placeholder=\"buscar...\"\u003E\u003C\u002Fform\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"removeFilter()\"\u003E\u003Cmd-icon\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar alternate\" ng-show=\"selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cdiv\u003E{{selected.length}} {{selected.length \u003E 1 ? 'items' : 'item'}} selected\u003C\u002Fdiv\u003E\u003Cspan\u003E";
	if (block) {
	block && block();
	}
	else {
	pug_html = pug_html + "\u003Cmd-button class=\"md-icon-button\" ng-click=\"edit($event)\"\u003E\u003Cmd-icon\u003Eedit\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"delete($event)\"\u003E\u003Cmd-icon\u003Edelete\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-table-container\u003E\u003Ctable md-table md-row-select ng-model=\"selected\" md-progress=\"promise\"\u003E\u003Cthead md-head md-order=\"query.order\"\u003E\u003Ctr md-row\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody md-body\u003E\u003Ctr" + (" md-row md-auto-select md-select=\"item\""+pug.attr("ng-repeat", `item in ${model} | orderBy:query.order | albTable: ${filter}`, true, true)) + "\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fmd-table-container\u003E\u003Cmd-table-pagination" + (" md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\""+pug.attr("md-total", `{{${modal}.length}}`, true, true)+" md-page-select=\"\"") + "\u003E\u003C\u002Fmd-table-pagination\u003E\u003C\u002Fmd-card\u003E";
	};
	pug_html = pug_html + "\u003Cdiv\u003E";
	pug_mixins["table_crud"](
	    'Tipos',
	    'types',
	    [
	      {name: 'ID',     model: 'id_type_db', isNumber: true, width: 50},
	      {name: 'Nombre', model: 'name'},
	      {name: 'Descripcion', model: 'description'},
	      {name: 'Tabla', model: 'table_name'},
	    ],
	    '[query.filter, "id_type_db", "name", "description", "table_name"]'
	  );
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"modal" in locals_for_with?locals_for_with.modal:typeof modal!=="undefined"?modal:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 142 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, albModals, albApi) {
	  albApi.configTable($scope);
	
	  $scope.add = function (evt) {
	    albModals.openAddType(evt).then($scope.get);
	  };
	
	  function onGet(result) {
	    $scope.types = result;
	  }
	  $scope.get = function () {
	    $scope.promise = albApi.types.getAll().then(onGet);
	  };
	
	  $scope.edit = function (evt) {
	    var type = $scope.selected[0];
	    albModals.openEditType(evt, type.id_type_db).then($scope.get);
	  };
	
	  $scope.delete = function (evt) {
	    var type = $scope.selected[0];
	    $scope.showConfirm(evt, 'Esta seguro de eliminar el tipo ' + type.name).then(function () {
	      return type.id_type_db;
	    }).then(albApi.types.delete).then(function () {
	      return $scope.selected.length = 0;
	    }).then($scope.get);
	  };
	
	  $scope.get();
	};
	module.exports.$inject = ["$scope", "albModals", "albApi"];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($stateProvider) {
	  $stateProvider.state('sys.orgs', {
	    parent: 'sys',
	    url: '/orgs',
	    template: __webpack_require__(144)(),
	    controller: __webpack_require__(145)
	  });
	};
	module.exports.$inject = ["$stateProvider"];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (modal) {pug_mixins["table_crud"] = pug_interp = function(name, model, columns, filter){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cmd-card\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-hide=\"selected.length || filter.show\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 class=\"md-title\"\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv flex=\"\"\u003E\u003C\u002Fdiv\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"filter.show = true\"\u003E\u003Cmd-icon\u003Efilter_list\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"add($event)\"\u003E\u003Cmd-icon\u003Eadd\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-show=\"filter.show &amp;&amp; !selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cmd-icon\u003Esearch\u003C\u002Fmd-icon\u003E\u003Cform flex=\"\" name=\"filter.form\"\u003E\u003Cinput type=\"text\" ng-model=\"query.filter\" ng-model-options=\"filter.options\" placeholder=\"buscar...\"\u003E\u003C\u002Fform\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"removeFilter()\"\u003E\u003Cmd-icon\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar alternate\" ng-show=\"selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cdiv\u003E{{selected.length}} {{selected.length \u003E 1 ? 'items' : 'item'}} selected\u003C\u002Fdiv\u003E\u003Cspan\u003E";
	if (block) {
	block && block();
	}
	else {
	pug_html = pug_html + "\u003Cmd-button class=\"md-icon-button\" ng-click=\"edit($event)\"\u003E\u003Cmd-icon\u003Eedit\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"delete($event)\"\u003E\u003Cmd-icon\u003Edelete\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-table-container\u003E\u003Ctable md-table md-row-select ng-model=\"selected\" md-progress=\"promise\"\u003E\u003Cthead md-head md-order=\"query.order\"\u003E\u003Ctr md-row\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody md-body\u003E\u003Ctr" + (" md-row md-auto-select md-select=\"item\""+pug.attr("ng-repeat", `item in ${model} | orderBy:query.order | albTable: ${filter}`, true, true)) + "\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fmd-table-container\u003E\u003Cmd-table-pagination" + (" md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\""+pug.attr("md-total", `{{${modal}.length}}`, true, true)+" md-page-select=\"\"") + "\u003E\u003C\u002Fmd-table-pagination\u003E\u003C\u002Fmd-card\u003E";
	};
	pug_html = pug_html + "\u003Cdiv\u003E";
	pug_mixins["table_crud"](
	    'Organizaciones',
	    'orgs',
	    [
	      {name: 'ID',     model: 'id_org', isNumber: true, width: 50},
	      {name: 'Nombre', model: 'name'},
	      {name: 'Descripcion', model: 'description'},
	      {name: 'Tipo', model: 'type_name'},
	      {name: 'Estado', model: 'state_name'},
	    ],
	    '[query.filter, "id_org", "name", "description", "type_name", "state_name"]'
	  );
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"modal" in locals_for_with?locals_for_with.modal:typeof modal!=="undefined"?modal:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 145 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, albModals, albApi) {
	  albApi.configTable($scope);
	
	  $scope.add = function (evt) {
	    albModals.openAddOrg(evt).then($scope.get);
	  };
	
	  function onGet(result) {
	    $scope.orgs = result;
	    console.log(result);
	  }
	  $scope.get = function () {
	    $scope.promise = albApi.orgs.getAll().then(onGet);
	  };
	
	  $scope.edit = function (evt) {
	    var org = $scope.selected[0];
	    albModals.openEditOrg(evt, org.id_org).then($scope.get);
	  };
	
	  $scope.delete = function (evt) {
	    var org = $scope.selected[0];
	    $scope.showConfirm(evt, 'Esta seguro de elimiar la organizacion ' + org.name).then(function () {
	      return org.id_org;
	    }).then(albApi.orgs.delete).then(function () {
	      return $scope.selected.length = 0;
	    }).then($scope.get).catch(albApi.toast.catch);
	  };
	  $scope.get();
	};
	module.exports.$inject = ["$scope", "albModals", "albApi"];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($stateProvider) {
	  $stateProvider.state('sys.options', {
	    parent: 'sys',
	    url: '/options',
	    template: __webpack_require__(147)(),
	    controller: __webpack_require__(148)
	  });
	};
	module.exports.$inject = ["$stateProvider"];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (modal) {pug_mixins["table_crud"] = pug_interp = function(name, model, columns, filter){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cmd-card\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-hide=\"selected.length || filter.show\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 class=\"md-title\"\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv flex=\"\"\u003E\u003C\u002Fdiv\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"filter.show = true\"\u003E\u003Cmd-icon\u003Efilter_list\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"add($event)\"\u003E\u003Cmd-icon\u003Eadd\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-show=\"filter.show &amp;&amp; !selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cmd-icon\u003Esearch\u003C\u002Fmd-icon\u003E\u003Cform flex=\"\" name=\"filter.form\"\u003E\u003Cinput type=\"text\" ng-model=\"query.filter\" ng-model-options=\"filter.options\" placeholder=\"buscar...\"\u003E\u003C\u002Fform\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"removeFilter()\"\u003E\u003Cmd-icon\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar alternate\" ng-show=\"selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cdiv\u003E{{selected.length}} {{selected.length \u003E 1 ? 'items' : 'item'}} selected\u003C\u002Fdiv\u003E\u003Cspan\u003E";
	if (block) {
	block && block();
	}
	else {
	pug_html = pug_html + "\u003Cmd-button class=\"md-icon-button\" ng-click=\"edit($event)\"\u003E\u003Cmd-icon\u003Eedit\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"delete($event)\"\u003E\u003Cmd-icon\u003Edelete\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-table-container\u003E\u003Ctable md-table md-row-select ng-model=\"selected\" md-progress=\"promise\"\u003E\u003Cthead md-head md-order=\"query.order\"\u003E\u003Ctr md-row\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody md-body\u003E\u003Ctr" + (" md-row md-auto-select md-select=\"item\""+pug.attr("ng-repeat", `item in ${model} | orderBy:query.order | albTable: ${filter}`, true, true)) + "\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fmd-table-container\u003E\u003Cmd-table-pagination" + (" md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\""+pug.attr("md-total", `{{${modal}.length}}`, true, true)+" md-page-select=\"\"") + "\u003E\u003C\u002Fmd-table-pagination\u003E\u003C\u002Fmd-card\u003E";
	};
	pug_html = pug_html + "\u003Cdiv\u003E";
	pug_mixins["table_crud"](
	    'Opciones',
	    'options',
	    [
	      {name: 'ID',     model: 'id_option', isNumber: true, width: 50},
	      {name: 'Nombre', model: 'name'},
	      {name: 'Titulo', model: 'title'},
	      {name: 'Descripcion', model: 'description'},
	      {name: 'Orden', model: 'order'},
	      {name: 'Tipo', model: 'type_name'},
	      {name: 'Estado', model: 'state_name'},
	    ],
	    '[query.filter, "id_option", "name", "title" , "description", "order", "type_name", "state_name"]'
	  );
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"modal" in locals_for_with?locals_for_with.modal:typeof modal!=="undefined"?modal:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 148 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, albModals, albApi) {
	  albApi.configTable($scope);
	
	  $scope.add = function (evt) {
	    albModals.openAddOption(evt).then($scope.get);
	  };
	
	  function onGet(result) {
	    $scope.options = result;
	    console.log(result);
	  }
	  $scope.get = function () {
	    $scope.promise = albApi.options.getAll().then(onGet);
	  };
	
	  $scope.edit = function (evt) {
	    var option = $scope.selected[0];
	    albModals.openEditOption(evt, option.id_option).then($scope.get);
	  };
	
	  $scope.delete = function (evt) {
	    var option = $scope.selected[0];
	    $scope.showConfirm(evt, 'Esta seguro de elimiar la opcion ' + option.name).then(function () {
	      return option.id_option;
	    }).then(albApi.options.delete).then(function () {
	      return $scope.selected.length = 0;
	    }).then($scope.get).catch(albApi.toast.catch);
	  };
	  $scope.get();
	};
	module.exports.$inject = ["$scope", "albModals", "albApi"];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($stateProvider) {
	  $stateProvider.state('sys.users', {
	    parent: 'sys',
	    url: '/users',
	    template: __webpack_require__(150)(),
	    controller: __webpack_require__(151)
	  });
	};
	module.exports.$inject = ["$stateProvider"];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (modal) {pug_mixins["table_crud"] = pug_interp = function(name, model, columns, filter){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cmd-card\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-hide=\"selected.length || filter.show\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 class=\"md-title\"\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv flex=\"\"\u003E\u003C\u002Fdiv\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"filter.show = true\"\u003E\u003Cmd-icon\u003Efilter_list\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"add($event)\"\u003E\u003Cmd-icon\u003Eadd\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-show=\"filter.show &amp;&amp; !selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cmd-icon\u003Esearch\u003C\u002Fmd-icon\u003E\u003Cform flex=\"\" name=\"filter.form\"\u003E\u003Cinput type=\"text\" ng-model=\"query.filter\" ng-model-options=\"filter.options\" placeholder=\"buscar...\"\u003E\u003C\u002Fform\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"removeFilter()\"\u003E\u003Cmd-icon\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar alternate\" ng-show=\"selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cdiv\u003E{{selected.length}} {{selected.length \u003E 1 ? 'items' : 'item'}} selected\u003C\u002Fdiv\u003E\u003Cspan\u003E";
	if (block) {
	block && block();
	}
	else {
	pug_html = pug_html + "\u003Cmd-button class=\"md-icon-button\" ng-click=\"edit($event)\"\u003E\u003Cmd-icon\u003Eedit\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"delete($event)\"\u003E\u003Cmd-icon\u003Edelete\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-table-container\u003E\u003Ctable md-table md-row-select ng-model=\"selected\" md-progress=\"promise\"\u003E\u003Cthead md-head md-order=\"query.order\"\u003E\u003Ctr md-row\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody md-body\u003E\u003Ctr" + (" md-row md-auto-select md-select=\"item\""+pug.attr("ng-repeat", `item in ${model} | orderBy:query.order | albTable: ${filter}`, true, true)) + "\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fmd-table-container\u003E\u003Cmd-table-pagination" + (" md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\""+pug.attr("md-total", `{{${modal}.length}}`, true, true)+" md-page-select=\"\"") + "\u003E\u003C\u002Fmd-table-pagination\u003E\u003C\u002Fmd-card\u003E";
	};
	pug_html = pug_html + "\u003Cdiv\u003E";
	pug_mixins["table_crud"](
	    'Usuarios',
	    'users',
	    [
	      {name: 'ID',     model: 'id_user', isNumber: true, width: 50},
	      {name: 'Nombre', model: 'first_name'},
	      {name: 'Apellido', model: 'last_name'},
	      {name: 'Correo', model: 'email'},
	      {name: 'Rol', model: 'role_name'},
	      {name: 'Organizacion', model: 'org_name'},
	      {name: 'Estado', model: 'state_name'},
	    ],
	    '[query.filter, "id_user", "first_name", "last_name", "email", "role_name", "org_name", "state_name"]'
	  );
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"modal" in locals_for_with?locals_for_with.modal:typeof modal!=="undefined"?modal:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, albModals, albApi) {
	  albApi.configTable($scope);
	
	  $scope.add = function (evt) {
	    albModals.openAddUser(evt).then($scope.get);
	  };
	
	  function onGet(result) {
	    $scope.users = result;
	    console.log(result);
	  }
	  $scope.get = function () {
	    $scope.promise = albApi.users.getAll().then(onGet);
	  };
	
	  $scope.edit = function (evt) {
	    var user = $scope.selected[0];
	    albModals.openEditUser(evt, user.id_user).then($scope.get);
	  };
	
	  $scope.delete = function (evt) {
	    var user = $scope.selected[0];
	    $scope.showConfirm(evt, 'Esta seguro de elimiar la opcion ' + user.name).then(function () {
	      return user.id_user;
	    }).then(albApi.users.delete).then(function () {
	      return $scope.selected.length = 0;
	    }).then($scope.get).catch(albApi.toast.catch);
	  };
	  $scope.get();
	};
	module.exports.$inject = ["$scope", "albModals", "albApi"];

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection layout=\"row\" flex style=\"height: 100%\"\u003E\u003Cmd-sidenav class=\"md-sidenav-left\" style=\"max-width: 200px\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\" md-whiteframe=\"2\"\u003E\u003Cmd-list flex\u003E\u003Cmd-list-item class=\"md-1-line\" ui-sref=\".types\" ui-sref-active=\"active\"\u003ETipos\u003C\u002Fmd-list-item\u003E\u003Cmd-list-item class=\"md-1-line\" ui-sref=\".roles\" ui-sref-active=\"active\"\u003ERoles\u003C\u002Fmd-list-item\u003E\u003Cmd-list-item class=\"md-1-line\" ui-sref=\".states\" ui-sref-active=\"active\"\u003EEstados\u003C\u002Fmd-list-item\u003E\u003Cmd-list-item class=\"md-1-line\" ui-sref=\".options\" ui-sref-active=\"active\"\u003EOpciones\u003C\u002Fmd-list-item\u003E\u003Cmd-list-item class=\"md-1-line\" ui-sref=\".orgs\" ui-sref-active=\"active\"\u003EOrganizaciones\u003C\u002Fmd-list-item\u003E\u003Cmd-list-item class=\"md-1-line\" ui-sref=\".users\" ui-sref-active=\"active\"\u003EUsuarios\u003C\u002Fmd-list-item\u003E\u003C\u002Fmd-list\u003E\u003C\u002Fmd-sidenav\u003E\u003Cmd-content flex=\"\" layout-padding=\"\"\u003E\u003Cui-view\u003E\u003C\u002Fui-view\u003E\u003Cdiv flex=\"\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-content\u003E\u003C\u002Fsection\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 153 */
/***/ function(module, exports) {

	"use strict";
	
	/*@ngInject*/
	module.exports = function () {};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	odo.$inject = ["$stateProvider"];
	module.exports = function (APP) {
	  APP.config(odo);
	  APP.config(__webpack_require__(155));
	  APP.config(__webpack_require__(158));
	};
	
	/*@ngInject*/
	function odo($stateProvider) {
	  $stateProvider.state('odo', {
	    abstract: true,
	    url: '/odo/:id',
	    template: '<ui-view>',
	    controller: __webpack_require__(161)
	  });
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function patients($stateProvider) {
	  $stateProvider.state('odo.patients', {
	    parent: 'odo',
	    url: '/patients',
	    template: __webpack_require__(156)(),
	    controller: __webpack_require__(157)
	  });
	};
	module.exports.$inject = ["$stateProvider"];

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (modal) {pug_mixins["table_crud"] = pug_interp = function(name, model, columns, filter){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cmd-card\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-hide=\"selected.length || filter.show\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 class=\"md-title\"\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv flex=\"\"\u003E\u003C\u002Fdiv\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"filter.show = true\"\u003E\u003Cmd-icon\u003Efilter_list\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"add($event)\"\u003E\u003Cmd-icon\u003Eadd\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-show=\"filter.show &amp;&amp; !selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cmd-icon\u003Esearch\u003C\u002Fmd-icon\u003E\u003Cform flex=\"\" name=\"filter.form\"\u003E\u003Cinput type=\"text\" ng-model=\"query.filter\" ng-model-options=\"filter.options\" placeholder=\"buscar...\"\u003E\u003C\u002Fform\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"removeFilter()\"\u003E\u003Cmd-icon\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar alternate\" ng-show=\"selected.length\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cdiv\u003E{{selected.length}} {{selected.length \u003E 1 ? 'items' : 'item'}} selected\u003C\u002Fdiv\u003E\u003Cspan\u003E";
	if (block) {
	block && block();
	}
	else {
	pug_html = pug_html + "\u003Cmd-button class=\"md-icon-button\" ng-click=\"edit($event)\"\u003E\u003Cmd-icon\u003Eedit\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"delete($event)\"\u003E\u003Cmd-icon\u003Edelete\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-table-container\u003E\u003Ctable md-table md-row-select ng-model=\"selected\" md-progress=\"promise\"\u003E\u003Cthead md-head md-order=\"query.order\"\u003E\u003Ctr md-row\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index0];
	pug_html = pug_html + "\u003Cth" + (" md-column"+pug.attr("md-numeric", column.isNumber, true, true)+pug.attr("width", column.width, true, true)+pug.attr("md-order-by", column.model, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = column.name || column.model) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody md-body\u003E\u003Ctr" + (" md-row md-auto-select md-select=\"item\""+pug.attr("ng-repeat", `item in ${model} | orderBy:query.order | albTable: ${filter}`, true, true)) + "\u003E";
	// iterate columns
	;(function(){
	  var $$obj = columns;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
	        var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index1 in $$obj) {
	      $$l++;
	      var column = $$obj[pug_index1];
	pug_html = pug_html + "\u003Ctd md-cell\u003E{{item." + (pug.escape(null == (pug_interp = column.model) ? "" : pug_interp)) + "}}\u003C\u002Ftd\u003E";
	    }
	  }
	}).call(this);
	
	pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fmd-table-container\u003E\u003Cmd-table-pagination" + (" md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\""+pug.attr("md-total", `{{${modal}.length}}`, true, true)+" md-page-select=\"\"") + "\u003E\u003C\u002Fmd-table-pagination\u003E\u003C\u002Fmd-card\u003E";
	};
	pug_html = pug_html + "\u003Cdiv\u003E";
	pug_mixins["table_crud"].call({
	block: function(){
	pug_html = pug_html + "\u003Cmd-button class=\"md-icon-button\" ui-sref=\"odo.patient({id: selected[0].id_user})\"\u003E\u003Cmd-icon\u003Einsert_emoticon\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"edit($event)\"\u003E\u003Cmd-icon\u003Eedit\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E";
	}
	}, 
	    'Pacientes',
	    'users',
	    [
	      {name: 'ID',     model: 'id_user', isNumber: true, width: 50},
	      {name: 'Nombre', model: 'first_name'},
	      {name: 'Apellido', model: 'last_name'},
	    ],
	    '[query.filter, "id_user", "first_name", "last_name"]'
	  );
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"modal" in locals_for_with?locals_for_with.modal:typeof modal!=="undefined"?modal:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 157 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function patients($scope, albApi, albModals) {
	  albApi.configTable($scope);
	
	  $scope.add = function (evt) {
	    albModals.openAddUser(evt).then($scope.get);
	  };
	
	  function onGet(result) {
	    $scope.users = result;
	    console.log(result);
	  }
	  $scope.get = function () {
	    $scope.promise = albApi.users.getAll().then(onGet);
	  };
	
	  $scope.edit = function (evt) {
	    var user = $scope.selected[0];
	    albModals.openEditUser(evt, user.id_user).then($scope.get);
	  };
	
	  $scope.delete = function (evt) {
	    var user = $scope.selected[0];
	    $scope.showConfirm(evt, 'Esta seguro de elimiar la opcion ' + user.name).then(function () {
	      return user.id_user;
	    }).then(albApi.users.delete).then(function () {
	      return $scope.selected.length = 0;
	    }).then($scope.get).catch(albApi.toast.catch);
	  };
	  $scope.get();
	};
	module.exports.$inject = ["$scope", "albApi", "albModals"];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($stateProvider) {
	  $stateProvider.state('odo.patient', {
	    parent: 'odo',
	    url: '/patients/:id',
	    template: __webpack_require__(159)(),
	    controller: __webpack_require__(160)
	  });
	};
	module.exports.$inject = ["$stateProvider"];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["formGroup"] = pug_interp = function(name, model, form, type, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cinput" + (pug.attr("ng-model", model + '.' + name, true, true)+pug.attr("type", type, true, true)+pug.attr("name", name, true, true)+" required"+pug.attr("disabled", attributes.disabled, true, true)) + "\u003E\u003C\u002Fmd-input-container\u003E";
	};
	
	
	
	
	
	
	
	pug_mixins["formGroupTextarea"] = pug_interp = function(name, model, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Ctextarea" + (pug.attr("ng-model", model + '.' + name, true, true)+" md-maxlength=\"150\" md-select-on-focus"+pug.attr("disabled", attributes.disabled, true, true)+" required") + "\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fmd-input-container\u003E";
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pug_mixins["form"] = pug_interp = function(name, submit, msg){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cform" + (pug.attr("name", name, true, true)+" novalidate"+pug.attr("ng-submit", `${name}.$valid && ${submit}`, true, true)) + "\u003E";
	block && block();
	pug_html = pug_html + "\u003Cmd-button class=\"md-raised md-raised md-primary\" md-colors=\"{background: 'blue'}\" type=\"submit\"\u003E" + (pug.escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fmd-button\u003E\u003C\u002Fform\u003E";
	};
	pug_html = pug_html + "\u003Csection layout=\"row\" flex style=\"height: 100%\"\u003E\u003Cmd-sidenav class=\"md-sidenav-left\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\" md-whiteframe=\"2\"\u003E\u003Cdiv ng-if=\"!loadUser\" layout=\"column\" layout-align=\"center center\" style=\"height: 100%\"\u003E\u003Cmd-progress-circular md-mode=\"indeterminate\" flex=\"50\"\u003E\u003C\u002Fmd-progress-circular\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"md-padding\" ng-show=\"loadUser\"\u003E\u003Ch3\u003EPaciente\u003C\u002Fh3\u003E\u003Cdiv class=\"md-inline-form\"\u003E";
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block","disabled": true}
	}, 'first_name', 'user', 'form', 'text', 'Nombre');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block","disabled": true}
	}, 'last_name', 'user', 'form', 'text', 'Apellido');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-sidenav\u003E\u003Cmd-content flex=\"\" layout-padding=\"\"\u003E\u003Cmodel-teeth alb-select-teeth=\"onSelectTeeth\" alb-elements=\"getElements\"\u003E\u003C\u002Fmodel-teeth\u003E\u003C\u002Fmd-content\u003E\u003Cmd-sidenav class=\"md-sidenav-left\" md-component-id=\"right\" md-is-locked-open=\"$mdMedia('gt-md')\" md-whiteframe=\"2\"\u003E\u003Cdiv class=\"md-padding\" layout=\"column\" layout-align=\"center center\" style=\"height: 100%\" ng-show=\"!currentTeeth\"\u003E\u003Cdiv class=\"md-caption\" flex=\"40\"\u003ESeleccion un diente para ver o ingresar informacion\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"md-padding\" ng-show=\"currentTeeth\"\u003E\u003Cmd-button class=\"md-icon-button\" style=\"float:right\" aria-label=\"Close\" ng-click=\"close()\"\u003E\u003Cmd-icon\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003Cp class=\"md-body-1\"\u003E\u003Cspan class=\"md-body-2\"\u003EDiente: \u003C\u002Fspan\u003E{{currentTeeth.name}}\u003C\u002Fp\u003E\u003Cdiv class=\"md-inline-form\"\u003E";
	pug_mixins["form"].call({
	block: function(){
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'title', 'teeth', 'form', 'text', 'Titulo');
	pug_mixins["formGroupTextarea"].call({
	attributes: {"class": "md-block"}
	}, 'description', 'teeth', 'Descripcion');
	}
	}, 'form', 'add()', 'Agregar');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cmd-list flex\u003E\u003Cmd-subheader class=\"md-no-sticky\"\u003EHistorial: {{(actions[currentTeeth.key].length || 0) }} elementos \u003C\u002Fmd-subheader\u003E\u003Cmd-list-item class=\"md-2-line md-whiteframe-1dp\" ng-repeat=\"action in actions[currentTeeth.key] track by action.index\" ng-click=\"null\"\u003E\u003Cdiv class=\"md-list-item-text\"\u003E\u003Ch3\u003E{{ action.title }}\u003C\u002Fh3\u003E\u003Ch4\u003E{{ action.description }}\u003C\u002Fh4\u003E\u003Cp\u003E\u003Cspan class=\"md-caption\"\u003E{{ action.date.format('LLL') }}\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-list-item\u003E\u003C\u002Fmd-list\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-sidenav\u003E\u003C\u002Fsection\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var moment = __webpack_require__(24);
	
	/*@ngInject*/
	module.exports = function ($scope, $stateParams, albApi) {
	  albApi.users.getOne($stateParams.id).then(function (user) {
	    return $scope.user = user;
	  }).then(function () {
	    return $scope.loadUser = true;
	  }).catch(function (err) {
	    err.data.userMsg = 'Error al consultar al paciente';
	    albApi.toast.catch(err);
	  });
	  $scope.actions = {};
	  $scope.onSelectTeeth = function (teeth) {
	    $scope.currentTeeth = teeth;
	    $scope.actions[$scope.currentTeeth.key] = $scope.actions[$scope.currentTeeth.key] || [];
	  };
	  $scope.add = function () {
	    $scope.teeth = Object.assign({}, $scope.teeth, { index: $scope.actions[$scope.currentTeeth.key].length, date: moment() });
	    $scope.actions[$scope.currentTeeth.key].push($scope.teeth);
	    reInitForm();
	  };
	  $scope.getElements = function (key) {
	    return $scope.actions[key];
	  };
	
	  function reInitForm() {
	    $scope.teeth = {};
	    $scope.form.$setPristine();
	    $scope.form.$setUntouched();
	  }
	
	  $scope.close = function () {
	    reInitForm();
	    $scope.currentTeeth = undefined;
	  };
	};
	module.exports.$inject = ["$scope", "$stateParams", "albApi"];

/***/ },
/* 161 */
/***/ function(module, exports) {

	"use strict";
	
	/*@ngInject*/
	module.exports = function () {};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($stateProvider) {
	  $stateProvider.state('main', {
	    url: '/',
	    template: __webpack_require__(163)(),
	    controller: __webpack_require__(164)
	  });
	};
	module.exports.$inject = ["$stateProvider"];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["formGroup"] = pug_interp = function(name, model, form, type, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cinput" + (pug.attr("ng-model", model + '.' + name, true, true)+pug.attr("type", type, true, true)+pug.attr("name", name, true, true)+" required"+pug.attr("disabled", attributes.disabled, true, true)) + "\u003E\u003C\u002Fmd-input-container\u003E";
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pug_mixins["form"] = pug_interp = function(name, submit, msg){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cform" + (pug.attr("name", name, true, true)+" novalidate"+pug.attr("ng-submit", `${name}.$valid && ${submit}`, true, true)) + "\u003E";
	block && block();
	pug_html = pug_html + "\u003Cmd-button class=\"md-raised md-raised md-primary\" md-colors=\"{background: 'blue'}\" type=\"submit\"\u003E" + (pug.escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fmd-button\u003E\u003C\u002Fform\u003E";
	};
	pug_html = pug_html + "\u003Csection layout=\"row\"\u003E\u003Cmd-card flex=\"20\" flex-offset=\"40\" layout-padding\u003E\u003Ch2\u003EIniciar sesion\u003C\u002Fh2\u003E\u003Cdiv class=\"md-inline-form\"\u003E";
	pug_mixins["form"].call({
	block: function(){
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'email', 'user', 'form', 'text', 'Email');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'password', 'user', 'form', 'password', 'Contrseña');
	}
	}, 'form','submitFrom(form)', 'ingresar');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fmd-card\u003E\u003C\u002Fsection\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 164 */
/***/ function(module, exports) {

	"use strict";
	
	/*@ngInject*/
	module.exports = function ($scope, albApi) {
	  $scope.submitFrom = function () {
	    albApi.login($scope.user);
	  };
	  albApi.session().then(function (session) {
	    return console.log(session);
	  });
	};
	module.exports.$inject = ["$scope", "albApi"];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(166);
	var name = 'albSpinner';
	
	/*@ngInject*/
	var fn = function fn() {
	  return {
	    scope: {
	      size: '@'
	    },
	    replace: true,
	    restrict: 'E',
	    template: __webpack_require__(167)
	  };
	};
	
	exports.directive = function (APP) {
	  return APP.directive(name, fn);
	};
	exports.fn = fn;
	exports.name = name;

/***/ },
/* 166 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csvg class=\"spinner\" ng-attr-width=\"{{size}}\" ng-attr-height=\"{{size}}\" viewbox=\"0 0 66 66\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Ccircle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"\u003E\u003C\u002Fcircle\u003E\u003C\u002Fsvg\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 168 */
/***/ function(module, exports) {

	"use strict";
	
	var name = 'albCompareTo';
	/*@ngInject*/
	var fn = function fn() {
	  function link(scope, element, attributes, ngModel) {
	
	    ngModel.$validators.compareTo = function (modelValue) {
	      return modelValue === scope.otherModelValue;
	    };
	
	    scope.$watch("otherModelValue", function () {
	      ngModel.$validate();
	    });
	  }
	  return {
	    require: "ngModel",
	    scope: {
	      otherModelValue: "=albCompareTo"
	    },
	    link: link,
	    replace: true,
	    restrict: 'A'
	  };
	};
	
	exports.directive = function (APP) {
	  return APP.directive(name, fn);
	};
	exports.fn = fn;
	exports.name = name;

/***/ },
/* 169 */
/***/ function(module, exports) {

	'use strict';
	
	NavBar.$inject = ["$rootScope", "albApi"];
	module.exports = function (APP) {
	  APP.controller(NavBar.name, NavBar);
	};
	
	/*@ngInject*/
	function NavBar($rootScope, albApi) {
	  $rootScope.tabs = [];
	  albApi.users.getOptions().then(function (result) {
	    for (var index = 0; index < result.length; index++) {
	      var element = result[index];
	      if (element.type_name === 'Menu') {
	        $rootScope.tabs.push(element);
	      }
	    }
	    $rootScope.currentNavItem = $rootScope.tabs[0].name;
	  }).catch(albApi.toast.catch);
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	albModals.$inject = ["$rootScope", "$timeout", "$mdPanel"];
	__webpack_require__(171);
	
	module.exports = function (APP) {
	
	  APP.factory(albModals.name, albModals);
	};
	
	/*@ngInject*/
	function albModals($rootScope, $timeout, $mdPanel) {
	  var a = {};
	
	  var position = $mdPanel.newPanelPosition().absolute().top('100px').centerHorizontally();
	  var modalTimer = function modalTimer(scope) {
	    var time = arguments.length <= 1 || arguments[1] === undefined ? 500 : arguments[1];
	    return $timeout(function () {
	      return scope.load = true;
	    }, time);
	  };
	
	  var openModal = function openModal(options) {
	    return new Promise(function (resolve) {
	      options.scope = Object.assign($rootScope.$new(), { close: close }, options.scope);
	      options.animation = $mdPanel.newPanelAnimation().openFrom(options.targetEvent).withAnimation($mdPanel.animation.SCALE);
	      options.zIndex = 70;
	      options.panelClass = 'alb-modal-' + options.size || 'sm', options.hasBackdrop = true, options.attachTo = angular.element(document.body), options.clickOutsideToClose = true;
	      options.escapeToClose = true;
	      options.focusOnOpen = true;
	      options.locals = options.resolve || {};
	      options.position = position;
	      options.resolve = {};
	      options.locals.modalTimer = modalTimer;
	      options.onDomRemoved = resolve;
	      var modalInstance = $mdPanel.open(options);
	      function close() {
	        modalInstance.$$state.value.close();
	      }
	    });
	  };
	
	  a.openAddRole = function (evt) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(172)(),
	      controller: __webpack_require__(173),
	      scope: {
	        modal: { title: 'Agregar rol' }
	      }
	    });
	  };
	
	  a.openEditRole = function (evt, id) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(172)(),
	      controller: __webpack_require__(174),
	      resolve: { id: id },
	      scope: {
	        modal: { title: 'Editar rol' }
	      }
	    });
	  };
	
	  a.openEditOptionsRole = function (evt, role) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(175)(),
	      controller: __webpack_require__(176),
	      resolve: { role: role },
	      scope: {
	        modal: { title: 'Editar opciones' }
	      }
	    });
	  };
	
	  a.openAddState = function (evt) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(177)({ edit: false }),
	      controller: __webpack_require__(178),
	      scope: {
	        modal: { title: 'Agregar Estado' }
	      }
	    });
	  };
	
	  a.openEditState = function (evt, id) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(177)({ edit: true }),
	      controller: __webpack_require__(179),
	      resolve: { id: id },
	      scope: {
	        modal: { title: 'Editar Estado' }
	      }
	    });
	  };
	
	  a.openAddType = function (evt) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(180)({ edit: false }),
	      controller: __webpack_require__(181),
	      scope: {
	        modal: { title: 'Agregar tipo' }
	      }
	    });
	  };
	
	  a.openEditType = function (evt, id) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(180)({ edit: true }),
	      controller: __webpack_require__(182),
	      resolve: { id: id },
	      scope: {
	        modal: { title: 'Editar tipo' }
	      }
	    });
	  };
	
	  a.openAddOrg = function (evt) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(183)(),
	      controller: __webpack_require__(184),
	      scope: {
	        modal: { title: 'Agregar organizacion' }
	      },
	      size: 'md'
	    });
	  };
	
	  a.openEditOrg = function (evt, id) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(183)(),
	      controller: __webpack_require__(185),
	      resolve: { id: id },
	      scope: {
	        modal: { title: 'Editar organizacion' }
	      },
	      size: 'md'
	    });
	  };
	  a.openAddOption = function (evt) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(186)(),
	      controller: __webpack_require__(187),
	      scope: {
	        modal: { title: 'Agregar opcion' }
	      },
	      size: 'lg'
	    });
	  };
	
	  a.openEditOption = function (evt, id) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(186)(),
	      controller: __webpack_require__(188),
	      resolve: { id: id },
	      scope: {
	        modal: { title: 'Editar opcion' }
	      },
	      size: 'lg'
	    });
	  };
	
	  a.openAddUser = function (evt) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(189)({ edit: true }),
	      controller: __webpack_require__(190),
	      scope: {
	        modal: { title: 'Agregar usuario' }
	      },
	      size: 'lg'
	    });
	  };
	
	  a.openEditUser = function (evt, id) {
	    return openModal({
	      targetEvent: evt,
	      template: __webpack_require__(189)({ edit: true }),
	      controller: __webpack_require__(191),
	      resolve: { id: id },
	      scope: {
	        modal: { title: 'Editar usuario' }
	      },
	      size: 'lg'
	    });
	  };
	  return a;
	}

/***/ },
/* 171 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["formGroup"] = pug_interp = function(name, model, form, type, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cinput" + (pug.attr("ng-model", model + '.' + name, true, true)+pug.attr("type", type, true, true)+pug.attr("name", name, true, true)+" required"+pug.attr("disabled", attributes.disabled, true, true)) + "\u003E\u003C\u002Fmd-input-container\u003E";
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pug_mixins["form"] = pug_interp = function(name, submit, msg){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cform" + (pug.attr("name", name, true, true)+" novalidate"+pug.attr("ng-submit", `${name}.$valid && ${submit}`, true, true)) + "\u003E";
	block && block();
	pug_html = pug_html + "\u003Cmd-button class=\"md-raised md-raised md-primary\" md-colors=\"{background: 'blue'}\" type=\"submit\"\u003E" + (pug.escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fmd-button\u003E\u003C\u002Fform\u003E";
	};
	pug_html = pug_html + "\u003Cdiv role=\"dialog\" layout=\"column\" layout-align=\"center center\" ng-cloak\u003E\u003Cdiv class=\"alb-modal\" ng-class=\"{load : load}\"\u003E\u003Cdiv class=\"loader\"\u003E\u003Calb-spinner size=\"40\"\u003E\u003C\u002Falb-spinner\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"alb-modal-content\"\u003E\u003Cmd-toolbar\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 ng-bind=\"modal.title\"\u003E\u003C\u002Fh2\u003E\u003Cspan flex=\"\"\u003E\u003C\u002Fspan\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"close()\" aria-label=\"close\"\u003E\u003Cmd-icon class=\"material-icons\"\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cdiv class=\"alb-modal-body\"\u003E\u003Cdiv class=\"md-inline-form\"\u003E";
	pug_mixins["form"].call({
	block: function(){
	pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E";
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'name', 'role', 'form', 'text', 'Nombre');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'description', 'role', 'form', 'text', 'Descripcion');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
	}
	}, 'form','submitFrom(form)', 'Guardar');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 173 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi) {
	  modalTimer($scope);
	
	  $scope.submitFrom = function () {
	    albApi.roles.post($scope.role).then(albApi.toast.then('Se guardo correctamente el rol')).then(function (result) {
	      return $scope.close(result);
	    }).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi"];

/***/ },
/* 174 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi, id) {
	  //modalTimer($scope);
	  console.log($scope);
	
	  albApi.roles.getOne(id).then(function (result) {
	    $scope.role = result;
	    return $scope;
	  }).then(modalTimer);
	
	  $scope.submitFrom = function () {
	    albApi.roles.put($scope.role.id_role, $scope.role).then(albApi.toast.then('Se guardo correctamente el rol')).then($scope.close).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi", "id"];

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pug_html = pug_html + "\u003Cdiv\u003E\u003Cmd-card\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-hide=\"filter.show\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 class=\"md-title\"\u003EOpciones\u003C\u002Fh2\u003E\u003Cdiv flex=\"\"\u003E\u003C\u002Fdiv\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"filter.show = true\"\u003E\u003Cmd-icon\u003Efilter_list\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-toolbar class=\"md-table-toolbar md-default\" ng-show=\"filter.show\"\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Cmd-icon\u003Esearch\u003C\u002Fmd-icon\u003E\u003Cform flex=\"\" name=\"filter.form\"\u003E\u003Cinput type=\"text\" ng-model=\"query.filter\" ng-model-options=\"filter.options\" placeholder=\"buscar...\"\u003E\u003C\u002Fform\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"removeFilter()\"\u003E\u003Cmd-icon\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cmd-table-container\u003E\u003Ctable md-table ng-model=\"selected\" md-progress=\"promise\"\u003E\u003Cthead md-head md-order=\"query.order\"\u003E\u003Ctr md-row\u003E\u003Cth md-column width=\"50\"\u003E \u003C\u002Fth\u003E\u003Cth md-column md-numeric width=\"50\" md-order-by=\"id_option\"\u003EID\u003C\u002Fth\u003E\u003Cth md-column md-order-by=\"name\"\u003ENombre\u003C\u002Fth\u003E\u003Cth md-column md-order-by=\"title\"\u003ETitulo\u003C\u002Fth\u003E\u003Cth md-column md-order-by=\"description\"\u003EDescripcion\u003C\u002Fth\u003E\u003Cth md-column md-order-by=\"type_name\"\u003ETipo\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody md-body\u003E\u003Ctr md-row ng-repeat=\"item in options| orderBy:query.order | albTable: [query.filter, &quot;id_option&quot;, &quot;name&quot;, &quot;title&quot; , &quot;description&quot;, &quot;type_name&quot;]\"\u003E\u003Ctd class=\"md-cell md-checkbox-cell\"\u003E\u003Cmd-checkbox ng-model=\"item.id_role\" aria-label=\"Select Row\" ng-true-value=\"{{role}}\" ng-false-value=\"null\" ng-change=\"toggleOption(item)\"\u003E\u003C\u002Fmd-checkbox\u003E\u003C\u002Ftd\u003E\u003Ctd md-cell\u003E{{item.id_option}}\u003C\u002Ftd\u003E\u003Ctd md-cell\u003E{{item.name}}\u003C\u002Ftd\u003E\u003Ctd md-cell\u003E{{item.title}}\u003C\u002Ftd\u003E\u003Ctd md-cell\u003E{{item.description}}\u003C\u002Ftd\u003E\u003Ctd md-cell\u003E{{item.type_name}}\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003C\u002Fmd-table-container\u003E\u003Cmd-table-pagination md-limit=\"query.limit\" md-limit-options=\"[5, 10, 15]\" md-page=\"query.page\" md-total=\"{{options.length}}\" md-page-select=\"\"\u003E\u003C\u002Fmd-table-pagination\u003E\u003C\u002Fmd-card\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi, role) {
	  $scope.role = role;
	  albApi.configTable($scope);
	  function onGet(result) {
	    for (var index = 0; index < result.length; index++) {
	      var option = result[index];
	      if (option.id_role === role) {
	        $scope.selected.push(option.id_role);
	      }
	    }
	    $scope.options = result;
	    console.log(result);
	  }
	  $scope.get = function () {
	    $scope.promise = albApi.roles.getOptions(role).then(onGet);
	  };
	
	  $scope.toggleOption = function (option) {
	    var promise = void 0;
	    if (option.id_role) {
	      promise = albApi.roles.postOption(role, option.id_option).then($scope.get);
	    } else {
	      promise = albApi.roles.deleteOption(role, option.id_option).then($scope.get);
	    }
	    promise.then($scope.get).catch(albApi.toast.catch);
	  };
	
	  $scope.get();
	  $scope.promise.then(function () {
	    modalTimer($scope);
	  });
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi", "role"];

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (edit) {pug_mixins["formGroup"] = pug_interp = function(name, model, form, type, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cinput" + (pug.attr("ng-model", model + '.' + name, true, true)+pug.attr("type", type, true, true)+pug.attr("name", name, true, true)+" required"+pug.attr("disabled", attributes.disabled, true, true)) + "\u003E\u003C\u002Fmd-input-container\u003E";
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pug_mixins["form"] = pug_interp = function(name, submit, msg){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cform" + (pug.attr("name", name, true, true)+" novalidate"+pug.attr("ng-submit", `${name}.$valid && ${submit}`, true, true)) + "\u003E";
	block && block();
	pug_html = pug_html + "\u003Cmd-button class=\"md-raised md-raised md-primary\" md-colors=\"{background: 'blue'}\" type=\"submit\"\u003E" + (pug.escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fmd-button\u003E\u003C\u002Fform\u003E";
	};
	pug_html = pug_html + "\u003Cdiv role=\"dialog\" layout=\"column\" layout-align=\"center center\" ng-cloak\u003E\u003Cdiv class=\"alb-modal\" ng-class=\"{load : load}\"\u003E\u003Cdiv class=\"loader\"\u003E\u003Calb-spinner size=\"40\"\u003E\u003C\u002Falb-spinner\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"alb-modal-content\"\u003E\u003Cmd-toolbar\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 ng-bind=\"modal.title\"\u003E\u003C\u002Fh2\u003E\u003Cspan flex=\"\"\u003E\u003C\u002Fspan\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"close()\" aria-label=\"close\"\u003E\u003Cmd-icon class=\"material-icons\"\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cdiv class=\"alb-modal-body\"\u003E\u003Cdiv class=\"md-inline-form\"\u003E";
	pug_mixins["form"].call({
	block: function(){
	pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E";
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'name', 'state', 'form', 'text', 'Nombre');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'description', 'state', 'form', 'text', 'Descripcion');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'table_name', 'state', 'form', 'text', 'Tabla', edit);
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
	}
	}, 'form','submitFrom(form)', 'Guardar');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"edit" in locals_for_with?locals_for_with.edit:typeof edit!=="undefined"?edit:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 178 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi) {
	  modalTimer($scope);
	
	  $scope.submitFrom = function () {
	    albApi.states.post($scope.state).then(albApi.toast.then('Se guardo correctamente el estado')).then(function (result) {
	      return $scope.close(result);
	    }).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi"];

/***/ },
/* 179 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi, id) {
	
	  albApi.states.getOne(id).then(function (result) {
	    $scope.state = result;
	    return $scope;
	  }).then(modalTimer);
	
	  $scope.submitFrom = function () {
	    albApi.states.put($scope.state.id_state_db, $scope.state).then(albApi.toast.then('Se guardo correctamente el rol')).then($scope.close).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi", "id"];

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (edit) {pug_mixins["formGroup"] = pug_interp = function(name, model, form, type, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cinput" + (pug.attr("ng-model", model + '.' + name, true, true)+pug.attr("type", type, true, true)+pug.attr("name", name, true, true)+" required"+pug.attr("disabled", attributes.disabled, true, true)) + "\u003E\u003C\u002Fmd-input-container\u003E";
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pug_mixins["form"] = pug_interp = function(name, submit, msg){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cform" + (pug.attr("name", name, true, true)+" novalidate"+pug.attr("ng-submit", `${name}.$valid && ${submit}`, true, true)) + "\u003E";
	block && block();
	pug_html = pug_html + "\u003Cmd-button class=\"md-raised md-raised md-primary\" md-colors=\"{background: 'blue'}\" type=\"submit\"\u003E" + (pug.escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fmd-button\u003E\u003C\u002Fform\u003E";
	};
	pug_html = pug_html + "\u003Cdiv role=\"dialog\" layout=\"column\" layout-align=\"center center\" ng-cloak\u003E\u003Cdiv class=\"alb-modal\" ng-class=\"{load : load}\"\u003E\u003Cdiv class=\"loader\"\u003E\u003Calb-spinner size=\"40\"\u003E\u003C\u002Falb-spinner\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"alb-modal-content\"\u003E\u003Cmd-toolbar\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 ng-bind=\"modal.title\"\u003E\u003C\u002Fh2\u003E\u003Cspan flex=\"\"\u003E\u003C\u002Fspan\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"close()\" aria-label=\"close\"\u003E\u003Cmd-icon class=\"material-icons\"\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cdiv class=\"alb-modal-body\"\u003E\u003Cdiv class=\"md-inline-form\"\u003E";
	pug_mixins["form"].call({
	block: function(){
	pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E";
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'name', 'type', 'form', 'text', 'Nombre');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'description', 'type', 'form', 'text', 'Descripcion');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'table_name', 'type', 'form', 'text', 'Tabla', edit);
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
	}
	}, 'form','submitFrom(form)', 'Guardar');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"edit" in locals_for_with?locals_for_with.edit:typeof edit!=="undefined"?edit:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 181 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi) {
	  modalTimer($scope);
	
	  $scope.submitFrom = function () {
	    albApi.types.post($scope.type).then(albApi.toast.then('Se guardo correctamente el tipo')).then(function (result) {
	      return $scope.close(result);
	    }).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi"];

/***/ },
/* 182 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi, id) {
	
	  albApi.types.getOne(id).then(function (result) {
	    $scope.type = result;
	    return $scope;
	  }).then(modalTimer);
	
	  $scope.submitFrom = function () {
	    albApi.types.put($scope.type.id_type_db, $scope.type).then(albApi.toast.then('Se guardo correctamente el estado')).then($scope.close).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi", "id"];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["formGroup"] = pug_interp = function(name, model, form, type, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cinput" + (pug.attr("ng-model", model + '.' + name, true, true)+pug.attr("type", type, true, true)+pug.attr("name", name, true, true)+" required"+pug.attr("disabled", attributes.disabled, true, true)) + "\u003E\u003C\u002Fmd-input-container\u003E";
	};
	pug_mixins["formGroupSelect"] = pug_interp = function(name, model, form, options, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	var formName = form + '.' + name;
	var modelName = model + '.' + name;
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cmd-select" + (pug.attr("ng-model", modelName, true, true)+" required"+pug.attr("name", name, true, true)) + "\u003E\u003Cmd-option" + (pug.attr("ng-repeat", `item in ${options.model}`, true, true)+pug.attr("value", `{{item.${options.value}}}`, true, true)) + "\u003E{{item." + (pug.escape(null == (pug_interp = options.view) ? "" : pug_interp)) + "}}\u003C\u002Fmd-option\u003E\u003C\u002Fmd-select\u003E\u003Cbr\u003E\u003C\u002Fmd-input-container\u003E";
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pug_mixins["form"] = pug_interp = function(name, submit, msg){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cform" + (pug.attr("name", name, true, true)+" novalidate"+pug.attr("ng-submit", `${name}.$valid && ${submit}`, true, true)) + "\u003E";
	block && block();
	pug_html = pug_html + "\u003Cmd-button class=\"md-raised md-raised md-primary\" md-colors=\"{background: 'blue'}\" type=\"submit\"\u003E" + (pug.escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fmd-button\u003E\u003C\u002Fform\u003E";
	};
	pug_html = pug_html + "\u003Cdiv role=\"dialog\" layout=\"column\" layout-align=\"center center\" ng-cloak\u003E\u003Cdiv class=\"alb-modal\" ng-class=\"{load : load}\"\u003E\u003Cdiv class=\"loader\"\u003E\u003Calb-spinner size=\"40\"\u003E\u003C\u002Falb-spinner\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"alb-modal-content\"\u003E\u003Cmd-toolbar\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 ng-bind=\"modal.title\"\u003E\u003C\u002Fh2\u003E\u003Cspan flex=\"\"\u003E\u003C\u002Fspan\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"close()\" aria-label=\"close\"\u003E\u003Cmd-icon class=\"material-icons\"\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cdiv class=\"alb-modal-body\"\u003E\u003Cdiv class=\"md-inline-form\"\u003E";
	pug_mixins["form"].call({
	block: function(){
	pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E";
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'name', 'org', 'form', 'text', 'Nombre');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'description', 'org', 'form', 'text', 'Descripcion');
	pug_html = pug_html + "\u003Cdiv layout-gt-sm=\"row\"\u003E";
	pug_mixins["formGroupSelect"]('id_type', 'org', 'form', {model: 'types', view: 'name', value: 'id_type'} ,'Tipo');
	pug_mixins["formGroupSelect"]('id_state', 'org', 'form', {model: 'states', view: 'name', value: 'id_state'} ,'Estado');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
	}
	}, 'form','submitFrom(form)', 'Guardar');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 184 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi) {
	
	  Promise.all([albApi.states.getByTable('sys_org').catch(albApi.toast.catch), albApi.types.getByTable('sys_org').catch(albApi.toast.catch)]).then(function (results) {
	    $scope.states = results[0];
	    $scope.types = results[1];
	    console.log(results, $scope);
	    modalTimer($scope);
	  });
	
	  $scope.submitFrom = function () {
	    albApi.orgs.post($scope.org).then(albApi.toast.then('Se guardo correctamente la organizacion')).then(function (result) {
	      return $scope.close(result);
	    }).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi"];

/***/ },
/* 185 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi, id) {
	  //modalTimer($scope);
	  Promise.all([albApi.states.getByTable('sys_org').catch(albApi.toast.catch), albApi.types.getByTable('sys_org').catch(albApi.toast.catch)]).then(function (results) {
	    $scope.states = results[0];
	    $scope.types = results[1];
	    console.log(results, $scope);
	    modalTimer($scope);
	  });
	
	  albApi.orgs.getOne(id).then(function (result) {
	    $scope.org = result;
	    return $scope;
	  }).then(modalTimer);
	
	  $scope.submitFrom = function () {
	    albApi.orgs.put($scope.org.id_org, $scope.org).then(albApi.toast.then('Se guardo correctamente la organizacion')).then($scope.close).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi", "id"];

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["formGroup"] = pug_interp = function(name, model, form, type, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cinput" + (pug.attr("ng-model", model + '.' + name, true, true)+pug.attr("type", type, true, true)+pug.attr("name", name, true, true)+" required"+pug.attr("disabled", attributes.disabled, true, true)) + "\u003E\u003C\u002Fmd-input-container\u003E";
	};
	pug_mixins["formGroupSelect"] = pug_interp = function(name, model, form, options, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	var formName = form + '.' + name;
	var modelName = model + '.' + name;
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cmd-select" + (pug.attr("ng-model", modelName, true, true)+" required"+pug.attr("name", name, true, true)) + "\u003E\u003Cmd-option" + (pug.attr("ng-repeat", `item in ${options.model}`, true, true)+pug.attr("value", `{{item.${options.value}}}`, true, true)) + "\u003E{{item." + (pug.escape(null == (pug_interp = options.view) ? "" : pug_interp)) + "}}\u003C\u002Fmd-option\u003E\u003C\u002Fmd-select\u003E\u003Cbr\u003E\u003C\u002Fmd-input-container\u003E";
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pug_mixins["form"] = pug_interp = function(name, submit, msg){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cform" + (pug.attr("name", name, true, true)+" novalidate"+pug.attr("ng-submit", `${name}.$valid && ${submit}`, true, true)) + "\u003E";
	block && block();
	pug_html = pug_html + "\u003Cmd-button class=\"md-raised md-raised md-primary\" md-colors=\"{background: 'blue'}\" type=\"submit\"\u003E" + (pug.escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fmd-button\u003E\u003C\u002Fform\u003E";
	};
	pug_html = pug_html + "\u003Cdiv role=\"dialog\" layout=\"column\" layout-align=\"center center\" ng-cloak\u003E\u003Cdiv class=\"alb-modal\" ng-class=\"{load : load}\"\u003E\u003Cdiv class=\"loader\"\u003E\u003Calb-spinner size=\"40\"\u003E\u003C\u002Falb-spinner\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"alb-modal-content\"\u003E\u003Cmd-toolbar\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 ng-bind=\"modal.title\"\u003E\u003C\u002Fh2\u003E\u003Cspan flex=\"\"\u003E\u003C\u002Fspan\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"close()\" aria-label=\"close\"\u003E\u003Cmd-icon class=\"material-icons\"\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cdiv class=\"alb-modal-body\"\u003E\u003Cdiv class=\"md-inline-form\"\u003E";
	pug_mixins["form"].call({
	block: function(){
	pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E";
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'name', 'option', 'form', 'text', 'Nombre');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'title', 'option', 'form', 'text', 'Titulo');
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'description', 'option', 'form', 'text', 'Descripcion');
	pug_html = pug_html + "\u003Cdiv layout-gt-sm=\"row\"\u003E";
	pug_mixins["formGroup"]('order', 'option', 'form', 'number', 'Orden');
	pug_mixins["formGroupSelect"]('id_type', 'option', 'form', {model: 'types', view: 'name', value: 'id_type'} ,'Tipo');
	pug_mixins["formGroupSelect"]('id_state', 'option', 'form', {model: 'states', view: 'name', value: 'id_state'} ,'Estado');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
	}
	}, 'form','submitFrom(form)', 'Guardar');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 187 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi) {
	
	  Promise.all([albApi.states.getByTable('sys_option').catch(albApi.toast.catch), albApi.types.getByTable('sys_option').catch(albApi.toast.catch)]).then(function (results) {
	    $scope.states = results[0];
	    $scope.types = results[1];
	    console.log(results, $scope);
	    modalTimer($scope);
	  });
	
	  $scope.submitFrom = function () {
	    albApi.options.post($scope.option).then(albApi.toast.then('Se guardo correctamente la opcion')).then(function (result) {
	      return $scope.close(result);
	    }).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi"];

/***/ },
/* 188 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi, id) {
	  //modalTimer($scope);
	  Promise.all([albApi.states.getByTable('sys_option').catch(albApi.toast.catch), albApi.types.getByTable('sys_option').catch(albApi.toast.catch)]).then(function (results) {
	    $scope.states = results[0];
	    $scope.types = results[1];
	    console.log(results, $scope);
	    modalTimer($scope);
	  });
	
	  albApi.options.getOne(id).then(function (result) {
	    $scope.option = result;
	    return $scope;
	  }).then(modalTimer);
	
	  $scope.submitFrom = function () {
	    albApi.options.put($scope.option.id_option, $scope.option).then(albApi.toast.then('Se guardo correctamente la opcion')).then($scope.close).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi", "id"];

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (edit) {pug_mixins["formGroup"] = pug_interp = function(name, model, form, type, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cinput" + (pug.attr("ng-model", model + '.' + name, true, true)+pug.attr("type", type, true, true)+pug.attr("name", name, true, true)+" required"+pug.attr("disabled", attributes.disabled, true, true)) + "\u003E\u003C\u002Fmd-input-container\u003E";
	};
	pug_mixins["formGroupSelect"] = pug_interp = function(name, model, form, options, nameUp){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	nameUp = nameUp || name[0].toUpperCase() + name.slice(1);
	var formName = form + '.' + name;
	var modelName = model + '.' + name;
	pug_html = pug_html + "\u003Cmd-input-container" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+" flex-gt-sm") + "\u003E\u003Clabel\u003E" + (pug.escape(null == (pug_interp = nameUp) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003Cmd-select" + (pug.attr("ng-model", modelName, true, true)+" required"+pug.attr("name", name, true, true)) + "\u003E\u003Cmd-option" + (pug.attr("ng-repeat", `item in ${options.model}`, true, true)+pug.attr("value", `{{item.${options.value}}}`, true, true)) + "\u003E{{item." + (pug.escape(null == (pug_interp = options.view) ? "" : pug_interp)) + "}}\u003C\u002Fmd-option\u003E\u003C\u002Fmd-select\u003E\u003Cbr\u003E\u003C\u002Fmd-input-container\u003E";
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pug_mixins["form"] = pug_interp = function(name, submit, msg){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	pug_html = pug_html + "\u003Cform" + (pug.attr("name", name, true, true)+" novalidate"+pug.attr("ng-submit", `${name}.$valid && ${submit}`, true, true)) + "\u003E";
	block && block();
	pug_html = pug_html + "\u003Cmd-button class=\"md-raised md-raised md-primary\" md-colors=\"{background: 'blue'}\" type=\"submit\"\u003E" + (pug.escape(null == (pug_interp = msg) ? "" : pug_interp)) + "\u003C\u002Fmd-button\u003E\u003C\u002Fform\u003E";
	};
	pug_html = pug_html + "\u003Cdiv role=\"dialog\" layout=\"column\" layout-align=\"center center\" ng-cloak\u003E\u003Cdiv class=\"alb-modal\" ng-class=\"{load : load}\"\u003E\u003Cdiv class=\"loader\"\u003E\u003Calb-spinner size=\"40\"\u003E\u003C\u002Falb-spinner\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"alb-modal-content\"\u003E\u003Cmd-toolbar\u003E\u003Cdiv class=\"md-toolbar-tools\"\u003E\u003Ch2 ng-bind=\"modal.title\"\u003E\u003C\u002Fh2\u003E\u003Cspan flex=\"\"\u003E\u003C\u002Fspan\u003E\u003Cmd-button class=\"md-icon-button\" ng-click=\"close()\" aria-label=\"close\"\u003E\u003Cmd-icon class=\"material-icons\"\u003Eclose\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-toolbar\u003E\u003Cdiv class=\"alb-modal-body\"\u003E\u003Cdiv class=\"md-inline-form\"\u003E";
	pug_mixins["form"].call({
	block: function(){
	pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-xs-12\"\u003E\u003Cdiv layout-gt-sm=\"row\"\u003E";
	pug_mixins["formGroup"]('first_name', 'user', 'form', 'text', 'Nombre');
	pug_mixins["formGroup"]('last_name', 'user', 'form', 'text', 'Apellido');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E";
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'email', 'user', 'form', 'email', 'Correo');
	if (!edit) {
	pug_mixins["formGroup"].call({
	attributes: {"class": "md-block"}
	}, 'password', 'user', 'form', 'password', 'Contraseña');
	pug_html = pug_html + "\u003Cmd-input-container class=\"md-block\"\u003E\u003Clabel\u003EConfirmacion\u003C\u002Flabel\u003E\u003Cinput required name=\"confirmPassword\" type=\"password\" alb-compare-to=\"user.password\" ng-model=\"user.confirmPassword\"\u003E\u003Cdiv ng-messages=\"form.confirmPassword.$error\"\u003E\u003Cdiv ng-message=\"compareTo\"\u003ENo coinciden las contraseñas\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmd-input-container\u003E";
	}
	pug_html = pug_html + "\u003Cdiv layout-gt-sm=\"row\"\u003E";
	pug_mixins["formGroupSelect"]('id_role', 'user', 'form', {model: 'roles', view: 'name', value: 'id_role'} ,'Rol');
	pug_mixins["formGroupSelect"]('id_org', 'user', 'form', {model: 'orgs', view: 'name', value: 'id_org'} ,'Organizacion');
	pug_mixins["formGroupSelect"]('id_state', 'user', 'form', {model: 'states', view: 'name', value: 'id_state'} ,'Estado');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
	}
	}, 'form','submitFrom(form)', 'Guardar');
	pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"edit" in locals_for_with?locals_for_with.edit:typeof edit!=="undefined"?edit:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 190 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi) {
	
	  Promise.all([albApi.states.getByTable('sys_user').catch(albApi.toast.catch), albApi.roles.getAll().catch(albApi.toast.catch), albApi.orgs.getAll().catch(albApi.toast.catch)]).then(function (results) {
	    $scope.states = results[0];
	    $scope.roles = results[1];
	    $scope.orgs = results[2];
	    console.log(results);
	    modalTimer($scope);
	  });
	
	  $scope.submitFrom = function () {
	    albApi.users.post($scope.user).then(albApi.toast.then('Se guardo correctamente el usuario')).then(function (result) {
	      return $scope.close(result);
	    }).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi"];

/***/ },
/* 191 */
/***/ function(module, exports) {

	'use strict';
	
	/*@ngInject*/
	module.exports = function ($scope, modalTimer, albApi, id) {
	  console.log($scope);
	
	  Promise.all([albApi.states.getByTable('sys_user').catch(albApi.toast.catch), albApi.roles.getAll().catch(albApi.toast.catch), albApi.orgs.getAll().catch(albApi.toast.catch), albApi.users.getOne(id).catch(albApi.toast.catch)]).then(function (results) {
	    $scope.states = results[0];
	    $scope.roles = results[1];
	    $scope.orgs = results[2];
	
	    results[3].id_role = results[3].id_role.toString();
	    results[3].id_org = results[3].id_org.toString();
	    results[3].id_state = results[3].id_state.toString();
	
	    $scope.user = results[3];
	    console.log(results);
	    modalTimer($scope);
	  });
	
	  $scope.submitFrom = function () {
	    albApi.users.put($scope.user.id_user, $scope.user).then(albApi.toast.then('Se guardo correctamente el usuario')).then($scope.close).catch(albApi.toast.catch);
	  };
	};
	module.exports.$inject = ["$scope", "modalTimer", "albApi", "id"];

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	albApi.$inject = ["$mdToast", "$http"];
	toastCtrl.$inject = ["$scope", "$mdToast", "msg", "type"];
	var toastTemplate = __webpack_require__(193)();
	
	module.exports = function (APP) {
	  APP.factory(albApi.name, albApi);
	};
	
	/*@ngInject*/
	function albApi($mdToast, $http) {
	  var a = {};
	
	  a.configTable = function ($scope) {
	    $scope.selected = [];
	    $scope.filter = {
	      options: {
	        debounce: 500
	      }
	    };
	    $scope.limitOptions = [5, 10, 15];
	    $scope.query = {
	      order: 'name',
	      limit: 5,
	      page: 1
	    };
	
	    $scope.removeFilter = function () {
	      $scope.filter.show = false;
	      $scope.query.filter = '';
	
	      if ($scope.filter.form.$dirty) {
	        $scope.filter.form.$setPristine();
	      }
	    };
	  };
	
	  function openToast(msg, type) {
	    type = type || a.toast.INFO;
	    return $mdToast.show({
	      hideDelay: 3000,
	      position: 'bottom right',
	      controller: toastCtrl,
	      template: toastTemplate,
	      locals: {
	        msg: msg, type: type
	      }
	    });
	  }
	
	  a.toast = function (msg, type) {
	    return openToast(msg, type);
	  };
	  a.toast.success = function (msg) {
	    return openToast(msg, a.toast.SUCCESS);
	  };
	  a.toast.error = function (msg) {
	    return openToast(msg, a.toast.ERROR);
	  };
	  a.toast.SUCCESS = 'success';
	  a.toast.INFO = 'info';
	  a.toast.ERROR = 'error';
	  a.toast.then = function (msg) {
	    return function (result) {
	      a.toast(msg, a.toast.SUCCESS);
	      return result;
	    };
	  };
	  a.toast.catch = function (result) {
	    a.toast(result.data.userMsg, a.toast.ERROR);
	    return result;
	  };
	
	  var getData = function getData(request) {
	    return request.then(function (result) {
	      return result.data;
	    });
	  };
	
	  a.roles = __webpack_require__(194)($http, getData);
	  a.states = __webpack_require__(195)($http, getData);
	  a.orgs = __webpack_require__(196)($http, getData);
	  a.users = __webpack_require__(197)($http, getData);
	  a.types = __webpack_require__(198)($http, getData);
	  a.options = __webpack_require__(199)($http, getData);
	  a.login = function (user) {
	    return getData($http.post('/api/login', user));
	  };
	  a.session = function () {
	    return getData($http.get('/api/session'));
	  };
	  a.unLogin = function () {
	    return getData($http.get('/api/401'));
	  };
	
	  return a;
	}
	
	var icons = {
	  success: 'glyphicon-ok',
	  info: 'glyphicon-bell',
	  error: 'glyphicon-alert'
	};
	
	/*@ngInject*/
	function toastCtrl($scope, $mdToast, msg, type) {
	  $scope.msg = msg;
	  $scope.icon = icons[type];
	  $scope.close = function () {
	    $mdToast.hide();
	  };
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cmd-toast\u003E\u003Cspan class=\"md-toast-text\"\u003E\u003Cmd-icon class=\"glyphicon\" md-font-icon=\"{{icon}}\" ng-style=\"{&quot;font-size&quot;: &quot;18px&quot;, &quot;color&quot;: &quot;white&quot;}\"\u003E\u003C\u002Fmd-icon\u003E{{msg}}\u003C\u002Fspan\u003E\u003Cmd-button class=\"md-icon-button pull-right\" ng-click=\"close()\" aria-label=\"close\"\u003E\u003Cmd-icon class=\"glyphicon\" md-font-icon=\"glyphicon-remove\" ng-style=\"{&quot;font-size&quot;: &quot;15px&quot;}\"\u003E\u003C\u002Fmd-icon\u003E\u003C\u002Fmd-button\u003E\u003C\u002Fmd-toast\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 194 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($http, getData) {
	  var a = {};
	
	  // ################ POST's ################
	  a.post = function (role) {
	    return getData($http.post('/api/roles', role));
	  };
	  a.postOption = function (id_role, id_option) {
	    return getData($http.post('/api/roles/option', { id_role: id_role, id_option: id_option }));
	  };
	
	  // ################ GET's ################
	  a.getAll = function () {
	    return getData($http.get('/api/roles'));
	  };
	  a.getOne = function (id) {
	    return getData($http.get('/api/roles/' + id));
	  };
	  a.getOptions = function (id) {
	    return getData($http.get('/api/roles/' + id + '/options'));
	  };
	
	  // ################ PUT's ################
	  a.put = function (id, role) {
	    return getData($http.put('/api/roles/' + id, role));
	  };
	
	  // ################ DELETE's ################
	  a.delete = function (id) {
	    return getData($http.delete('/api/roles/' + id));
	  };
	  a.deleteOption = function (id_role, id_option) {
	    return getData($http.delete('/api/roles/' + id_role + '/option/' + id_option));
	  };
	
	  return a;
	};

/***/ },
/* 195 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($http, getData) {
	  var a = {};
	  // ################ POST's ################
	  a.post = function (state) {
	    return getData($http.post('/api/states', state));
	  };
	
	  // ################ GET's ################
	  a.getByTable = function (table) {
	    return getData($http.get('/api/states/table/' + table));
	  };
	  a.getAll = function () {
	    return getData($http.get('/api/states'));
	  };
	  a.getOne = function (id) {
	    return getData($http.get('/api/states/' + id));
	  };
	
	  // ################ PUT's ################
	  a.put = function (id, state) {
	    return getData($http.put('/api/states/' + id, state));
	  };
	
	  // ################ DELETE's ################
	  a.delete = function (id) {
	    return getData($http.delete('/api/states/' + id));
	  };
	
	  return a;
	};

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($http, getData) {
	  var a = {};
	  // ################ POST's ################
	  a.post = function (org) {
	    return getData($http.post('/api/orgs', org));
	  };
	
	  // ################ GET's ################
	  a.getAll = function () {
	    return getData($http.get('/api/orgs'));
	  };
	  a.getOne = function (id) {
	    return getData($http.get('/api/orgs/' + id));
	  };
	
	  // ################ PUT's ################
	  a.put = function (id, org) {
	    return getData($http.put('/api/orgs/' + id, org));
	  };
	
	  // ################ DELETE's ################
	  a.delete = function (id) {
	    return getData($http.delete('/api/orgs/' + id));
	  };
	
	  return a;
	};

/***/ },
/* 197 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($http, getData) {
	  var a = {};
	  // ################ POST's ################
	  a.post = function (user) {
	    return getData($http.post('/api/users', user));
	  };
	
	  // ################ GET's ################
	  a.getAll = function () {
	    return getData($http.get('/api/users'));
	  };
	  a.getOne = function (id) {
	    return getData($http.get('/api/users/' + id));
	  };
	  a.getOptions = function () {
	    return getData($http.get('/api/users/options'));
	  };
	
	  // ################ PUT's ################
	  a.put = function (id, user) {
	    return getData($http.put('/api/users/' + id, user));
	  };
	
	  // ################ DELETE's ################
	  a.delete = function (id) {
	    return getData($http.delete('/api/users/' + id));
	  };
	
	  return a;
	};

/***/ },
/* 198 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($http, getData) {
	  var a = {};
	  // ################ POST's ################
	  a.post = function (type) {
	    return getData($http.post('/api/types', type));
	  };
	
	  // ################ GET's ################
	  a.getByTable = function (table) {
	    return getData($http.get('/api/types/table/' + table));
	  };
	  a.getAll = function () {
	    return getData($http.get('/api/types'));
	  };
	  a.getOne = function (id) {
	    return getData($http.get('/api/types/' + id));
	  };
	
	  // ################ PUT's ################
	  a.put = function (id, type) {
	    return getData($http.put('/api/types/' + id, type));
	  };
	
	  // ################ DELETE's ################
	  a.delete = function (id) {
	    return getData($http.delete('/api/types/' + id));
	  };
	
	  return a;
	};

/***/ },
/* 199 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($http, getData) {
	  var a = {};
	  // ################ POST's ################
	  a.post = function (option) {
	    return getData($http.post('/api/options', option));
	  };
	
	  // ################ GET's ################
	  a.getAll = function () {
	    return getData($http.get('/api/options'));
	  };
	  a.getOne = function (id) {
	    return getData($http.get('/api/options/' + id));
	  };
	
	  // ################ PUT's ################
	  a.put = function (id, option) {
	    return getData($http.put('/api/options/' + id, option));
	  };
	
	  // ################ DELETE's ################
	  a.delete = function (id) {
	    return getData($http.delete('/api/options/' + id));
	  };
	
	  return a;
	};

/***/ },
/* 200 */
/***/ function(module, exports) {

	'use strict';
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }
	
	module.exports = function (APP) {
	  APP.filter(albTable.name, albTable);
	};
	
	/*@ngInject*/
	function albTable() {
	  return function (rows, _ref) {
	    var _ref2 = _toArray(_ref);
	
	    var filter = _ref2[0];
	
	    var props = _ref2.slice(1);
	
	    if (!filter) {
	      return rows;
	    }
	    filter = new RegExp(filter, 'i');
	
	    function eachRow(row) {
	      var valid = false;
	      for (var index = 0; index < props.length; index++) {
	        var prop = props[index];
	        valid = valid || filter.test(row[prop]);
	        if (valid) {
	          return true;
	        }
	      }
	      return false;
	    }
	
	    return rows.filter(eachRow);
	  };
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var big = __webpack_require__(202);
	var small = __webpack_require__(203);
	
	exports.name = 'modelTeeth';
	
	/*@ngInject*/
	exports.fn = function () {
	  controller.$inject = ["$scope"];
	  var bigAreas = [{ name: 'diente 0', key: 't0', width: '27px', height: '22px', top: '157px', left: '98px', 'border-radius': '7px 10px 10px 5px' }, { name: 'diente 1', key: 't1', width: '29px', height: '28px', top: '129px', left: '99px', 'border-radius': '12px 11px 11px 7px' }, { name: 'diente 2', key: 't2', width: '30px', height: '32px', top: '96px', left: '104px', 'border-radius': '12px 14px 11px 8px' }, { name: 'diente 3', key: 't3', width: '27px', height: '22px', top: '73px', left: '111px', 'border-radius': '10px 16px 10px 7px' }, { name: 'diente 4', key: 't4', width: '27px', height: '22px', top: '53px', left: '119px', 'border-radius': '15px 21px 16px 21px' }, { name: 'diente 5', key: 't5', width: '23px', height: '26px', top: '30px', left: '133px', 'border-radius': '11px 13px 11px 15px' }, { name: 'diente 6', key: 't6', width: '20px', height: '26px', top: '20px', left: '155px', 'border-radius': '11px 15px 23px 16px', transform: 'rotate(-19deg)' }, { name: 'diente 7', key: 't7', width: '24px', height: '30px', top: '14px', left: '174px', 'border-radius': '8px 7px 11px 16px' }, { name: 'diente 8', key: 't8', width: '27px', height: '30px', top: '13px', left: '199px', 'border-radius': '7px 9px 17px 10px' }, { name: 'diente 9', key: 't9', width: '19px', height: '30px', top: '17px', left: '226px', 'border-radius': '8px 9px 10px 7px', transform: 'rotate(17deg)' }, { name: 'diente 10', key: 't10', width: '23px', height: '26px', top: '29px', left: '242px', 'border-radius': '16px 12px 12px 10px' }, { name: 'diente 11', key: 't11', width: '27px', height: '23px', top: '51px', left: '253px', 'border-radius': '19px 10px 13px 5px' }, { name: 'diente 12', key: 't12', width: '30px', height: '24px', top: '72px', left: '259px', 'border-radius': '22px 18px 14px 8px' }, { name: 'diente 13', key: 't13', width: '28px', height: '33px', top: '96px', left: '264px', 'border-radius': '11px 10px 11px 11px' }, { name: 'diente 14', key: 't14', width: '27px', height: '26px', top: '130px', left: '270px', 'border-radius': '7px 10px 7px 7px' }, { name: 'diente 15', key: 't15', width: '29px', height: '23px', top: '157px', left: '272px', 'border-radius': '11px 10px 10px 11px' }, { name: 'diente 16', key: 't16', width: '29px', height: '24px', top: '220px', left: '271px', 'border-radius': '7px 10px 7px 5px' }, { name: 'diente 17', key: 't17', width: '28px', height: '27px', top: '247px', left: '269px', 'border-radius': '7px 10px 10px 5px' }, { name: 'diente 18', key: 't18', width: '27px', height: '30px', top: '277px', left: '263px', 'border-radius': '7px 10px 10px 5px' }, { name: 'diente 19', key: 't19', width: '27px', height: '22px', top: '310px', left: '257px', 'border-radius': '8px 10px 10px 11px' }, { name: 'diente 20', key: 't20', width: '25px', height: '22px', top: '331px', left: '250px', 'border-radius': '7px 10px 10px 14px' }, { name: 'diente 21', key: 't21', width: '24px', height: '24px', top: '349px', left: '239px', 'border-radius': '7px 18px 10px 12px' }, { name: 'diente 22', key: 't22', width: '20px', height: '26px', top: '358px', left: '220px', 'border-radius': '16px 18px 10px 12px', transform: 'rotate(-19deg)' }, { name: 'diente 23', key: 't23', width: '22px', height: '28px', top: '362px', left: '199px', 'border-radius': '7px 18px 10px 12px' }, { name: 'diente 24', key: 't24', width: '24px', height: '28px', top: '363px', left: '175px', 'border-radius': '7px 11px 11px 7px' }, { name: 'diente 25', key: 't25', width: '22px', height: '26px', top: '358px', left: '153px', 'border-radius': '21px 10px 11px 17px' }, { name: 'diente 26', key: 't26', width: '23px', height: '24px', top: '349px', left: '134px', 'border-radius': '11px 8px 10px 12px' }, { name: 'diente 27', key: 't27', width: '25px', height: '24px', top: '328px', left: '122px', 'border-radius': '23px 16px 19px 13px' }, { name: 'diente 28', key: 't28', width: '24px', height: '23px', top: '309px', left: '115px', 'border-radius': '7px 11px 11px 7px' }, { name: 'diente 29', key: 't29', width: '27px', height: '29px', top: '278px', left: '106px', 'border-radius': '12px 10px 9px 9px ' }, { name: 'diente 30', key: 't30', width: '30px', height: '28px', top: '248px', left: '100px', 'border-radius': '11px 11px 10px 12px' }, { name: 'diente 31', key: 't31', width: '30px', height: '28px', top: '220px', left: '100px', 'border-radius': '11px 11px 10px 12px' }];
	
	  var smallAreas = [];
	
	  function link() /*scope, element, attrs*/{}
	
	  /*@ngInject*/
	  function controller($scope) {
	    $scope.isBig = true;
	    setStatus($scope.isBig);
	
	    function setStatus(isBig) {
	      if (isBig) {
	        $scope.url = big;
	        $scope.areas = bigAreas;
	      } else {
	        $scope.url = small;
	        $scope.areas = smallAreas;
	      }
	    }
	    $scope.setStatus = setStatus;
	  }
	  return {
	    scope: {
	      handler: '=albSelectTeeth',
	      getElements: '=albElements'
	    },
	    restrict: 'E',
	    replace: true,
	    link: link,
	    controller: controller,
	    template: __webpack_require__(204)()
	  };
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/big.jpg";

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/small.jpg";

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(134);
	
	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"model-teeth big\"\u003E\u003Cdiv\u003E\u003Cmd-switch ng-model=\"isBig\" ng-change=\"setStatus(isBig)\" aria-label=\"Modelo\"\u003E{{ isBig? 'Grande' : 'Pequeña'  }}\u003C\u002Fmd-switch\u003E\u003Cdiv class=\"content-model\"\u003E\u003Cimg ng-src=\"{{url}}\"\u003E\u003Cdiv class=\"content-areas\"\u003E\u003Cbutton class=\"area\" ng-repeat=\"area in areas\" ng-style=\"area\" ng-attr-id=\"{{area.key}}\" ng-click=\"handler(area)\" type=\"button\"\u003E\u003Cmd-tooltip\u003E{{(getElements(area.key).length || 0)}} elementos\u003C\u002Fmd-tooltip\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ }
]);
//# sourceMappingURL=bundle.js.map