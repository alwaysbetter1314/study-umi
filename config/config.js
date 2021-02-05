export default {
    singular: false,
    routes: [{
        path: "/",
        component: "../layout",
        routes: [
            {
                path: "/",
                component: "./puzzlecards"
            },
            {
                path:'/helloworld',
                component:'./Helloworld'
            },
            {
                path:'/puzzlecards',
                component:'./puzzlecards'
            },
            {
                path:'/dashboard',
                routes:[
                    {
                        path:'/dashboard/analysis',component:'Dashboard/Analysis'
                    },
                    {
                        path:'/dashboard/monitor',component:'Dashboard/Monitor'
                    },
                    {
                        path:'/dashboard/workspace',component:'Dashboard/Workspace'
                    }
                ]
            }
        ]
    }],
    plugins: [
        ["umi-plugin-react", {
            antd: true,
            dva: true,
        }]
    ]
};