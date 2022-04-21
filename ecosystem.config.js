module.exports = {
    apps: [
        {
            name: 'wblog_nuxt3',
            script: './.output/server/index.mjs',
            instances: '2',
            exec_mode: 'cluster',
            watch: true,
            ignore_watch: [
                "node_modules",
                "logs"
            ],
            error_file: "logs/err.log",
            out_file: "logs/out.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            env_production: {
                "PORT": '9527'
            }
        }
    ]
}