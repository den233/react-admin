export default {
    menus: [    // 菜单相关路由
        { key: '/home/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
        { key: '/home/app/admin', title: '业务管理', icon: 'scan',
           subs:[
            { key: '/home/app/admin/zc', title: '注册', component: 'Zc'},
           ]
        },
        {
            key: '/home/app/ui', title: 'UI', icon: 'scan',
            subs: [
                { key: '/home/app/ui/buttons', title: '按钮', component: 'Buttons'},
                { key: '/home/app/ui/icons', title: '图标', component: 'Icons'},
                { key: '/home/app/ui/spins', title: '加载中', component: 'Spins'},
                { key: '/home/app/ui/modals', title: '对话框', component: 'Modals'},
                { key: '/home/app/ui/notifications', title: '通知提醒框', component: 'Notifications'},
                { key: '/home/app/ui/tabs', title: '标签页', component: 'Tabs'},
                { key: '/home/app/ui/banners', title: '轮播图', component: 'Banners'},
                { key: '/home/app/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle'},
                { key: '/home/app/ui/drags', title: '拖拽', component: 'Drags'},
                { key: '/home/app/ui/gallery', title: '画廊', component: 'Gallery'},
                { key: '/home/app/ui/map', title: '地图', component: 'MapUi'},
            ],
        },
        {
            key: '/home/app/animation', title: '动画', icon: 'rocket',
            subs: [
                { key: '/home/app/animation/basicAnimations', title: '基础动画', component: 'BasicAnimations'},
                { key: '/home/app/animation/exampleAnimations', title: '动画案例', component: 'ExampleAnimations'},
            ],
        },
        {
            key: '/home/app/table', title: '表格', icon: 'copy',
            subs: [
                { key: '/home/app/table/basicTable', title: '基础表格', component: 'BasicTable'},
                { key: '/home/app/table/advancedTable', title: '高级表格', component: 'AdvancedTable'},
                { key: '/home/app/table/asynchronousTable', title: '异步表格', component: 'AsynchronousTable'},
            ],
        },
        {
            key: '/home/app/form', title: '表单', icon: 'edit',
            subs: [
                { key: '/home/app/form/basicForm', title: '基础表单', component: 'BasicForm'},
            ],
        },
        {
            key: '/home/app/chart', title: '图表', icon: 'area-chart',
            subs: [
                { key: '/home/app/chart/echarts', title: 'echarts', component: 'Echarts' },
                { key: '/home/app/chart/recharts', title: 'recharts', component: 'Recharts' },
            ],
        },
        {
            key: '/subs4', title: '页面', icon: 'switcher',
            subs: [
                { key: '/login', title: '登录' },
                { key: '/404', title: '404' },
            ],
        },
        {
            key: '/home/app/auth', title: '权限管理', icon: 'safety',
            subs: [
                { key: '/home/app/auth/basic', title: '基础演示', component: 'AuthBasic' },
                { key: '/home/app/auth/routerEnter', title: '路由拦截', component: 'RouterEnter', auth: 'auth/testPage' },
            ],
        },
        {
            key: '/home/app/cssModule', title: 'cssModule', icon: 'star', component: 'Cssmodule'
        },
        {
            key: '/full/introduction', title: 'introduction', icon: 'star', component: 'introduction'
        }
    ],
    others: []  // 非菜单相关路由
}