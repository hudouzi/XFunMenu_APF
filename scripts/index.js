﻿// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 Ripple 或 Android 设备/仿真程序中调试代码: 启用你的应用程序，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。


var menuApp = angular.module('menuApp', ['ionic', 'ui.router']);

 menuApp.config(['$stateProvider',function ($stateProvider, $urlRouterProvider) {
            $stateProvider              //配置路由
                .state('index', {
                    url: '',
                    //template:'<h1>jfjiajjfjdkjakjfjkdajkfkkdma</h1>'
                    templateUrl: 'menu.html'
                })
                .state('menu',{
                    url:'/menu',
                    templateUrl:'menu.html'
                })
  }]);


(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    
    function onDeviceReady() {
        // 处理 Cordova 暂停并恢复事件
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova 已加载。在此处执行任何需要 Cordova 的初始化。
        var welcome = document.getElementById("welcome");
        welcome.innerText = "欢迎你体验小方电子菜单";

        var addFood = document.getElementById("addFood");
        addFood.innerText = "我要点餐";

        var shopCar = document.getElementById("shopCar");
        shopCar.innerText = "购物车";  
    };

    function onPause() {
        // TODO: 此应用程序已挂起。在此处保存应用程序状态。
    };

    function onResume() {
        // TODO: 此应用程序已重新激活。在此处还原应用程序状态。
    };
} )();


