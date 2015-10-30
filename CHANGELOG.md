### 1.11.9
1. 重构 session ，调整方法名
2. 重构 Logger ，调整日志格式
3. 重构 env.DATA_PATH 处理
4. 更新依赖

### 1.11.7
1. MVC 增加 onMvcHandle 过滤器回调
2. MVC 的 init 方法改为异步
3. NSP 增加 onNspHandle 过滤器回调
4. NSP 的 init 方法改为异步
5. REST 增加 onRestHandle 过滤器回调
6. REST 增加异步 init 方法
7. 合并 css 和 less 处理器扩展

### 1.11.6
1. 更新上游依赖

### 1.11.5
1. 优化 mvc、restful 的路由匹配，使 “查询字符串” 不再参与匹配
2. 优化 context 的 URL 处理、跳转、重定向

### 1.11.4
1. 优化 routeing 匹配，使 “查询字符串” 不再参与匹配

### 1.11.3
1. 优化 pagine 使其允许传入的 model 为 null
2. mvc 模板增加 $.controller 
3. nsp 模板增加 $.self ($.self 与 this 相等)

### 1.11.2
1. 优化 context.setUrl 处理
2. 强化 mvc 路由的 action 处理

### 1.11.1
1. 强化 mvc 路由的 action 处理

### 1.11.0
1. 优化不同平台路径处理。

### 1.10.18
1. 修复在 windows 平台 -watch 无法启动的 bug。

### 1.10.17
1. 重构所有地方统一用 env.EOL 确定换行符。
2. 修复在 windows 平台 -watch 无法启动的 bug。

### 1.10.16
1. 重构 env 模块，所有变量统一采用大写加下划线。
2. 重构内置 logger 模块，采用 env.EOL 确定换行符。
3. 修复在 windows 平台 context.setUrl 方法针对 url 的 normalize 错误。

### 1.10.15
1. 修复了在部分 windows 平台，进程管理工具启动应用失败的 bug
2. 调整 README.md 标题格式

### 1.10.13
1. 修复在某些 windows 机器上，命令行工具因为 socket 消息过长导致的 bug

### 1.10.12
1. 修复在某些 windows 机器上找到不 evn.HOME 的 Bug

### 1.10.11
1. 重构 server 的 _transferRequest 方法(重命名+优化逻辑)
2. 将 handler 的 transfer 重命名为 next
3. 优化 context.transfer 方法
4. 优化默认文档处理 (改为异步处理)

### 1.10.10
1. 修复 context 处理 deflate 压缩时的问题
2. Static Handler 浏览目录时进行了排序

### 1.10.9
1. 替换文件监听模块 gaze 为 chokidar

### 1.10.8
1. 重构 Server 类，提供 start、stop 两个事件
2. 替换文件监听模块 watch 为 gaze

### 1.10.7
1. 重构 context.data 方法。

### 1.10.6
1. 更新 sytem.json 中的默认配置。
2. 修正 .json 的 mime 类型，调整 parser 配置
3. 修正 .xml 的 mime 类型，调整 parser 配置，修复解析 Bug
2. 新增 nsh 处理器
3. 优化 nsp 处理，绑定方法支持参数，优化 form 查找机制

### 1.10.5
1. 优化 Session 模块加载。

### 1.10.4
1. 优化日写入。
2. 优化默认 Session 提供程序

### 1.10.3
1. 调整日志格式，优化日写入。
2. 重命名默认配置文件名 (web.json->system.json)。

### 1.10.2
1. 微调错误页样式

### 1.10.1
1. 优化 static handler 缓存处理

### 1.10.0
1. 修复 filter 在 onResponse、onRequestEnd 时的一个 Bug

### 1.9.20
1. 紧急修复一个拼写错误导到的 bug

### 1.9.19
1. 优化缓存处理
2. CLI 增加 -cache 参数

### 1.9.18
1. cookie 启用 HttpOnly
2. 优化路径计算
3. 修复 nsp 已知 Bug

### 1.9.17
1. 重构将所有可能影响性能的同步代码改为异步
2. 扩展 context 方法
3. 允许通过 options 指定 app 的 configFile
4. 命行工具增加按指定配置运行选项 -config

### 1.9.15
1. 优化 mime 设置
2. 增加 debug 模式
3. 允许通过 options 指定 app 的 configFile

### 1.9.13
1. 优化 cookie 模块

### 1.9.11
1. 重构 Server 模块
2. 重构 Context 模块
2. 重构所有内置 Parser 模块
3. 重构所有内置 Hanlder 模块

### 1.9.10
1. 更新资源和示例程序中 css 的 “字体”
2. 为示例程序添加 package.json

### 1.9.9
1. 更新缓存默认配置
2. 增加路径计算函数

### 1.9.8
1. 更新缓存默认配置

### 1.9.7
1. 优化缓存处理
2. 优化 http状态 响应逻辑
3. 更新依赖

### 1.9.6
1. 优化公共模板处理逻辑
2. 优化 http状态 响应逻辑
3. 更新 examples 中的 ‘入口程序’

### 1.9.4
1. 增加默认 favicon 
2. 优化压缩处理
3. 增加 mime 配置

### 1.9.3
1. 改进异常处理

### 1.9.2
1. 将 tp、cmdline、utils 作为独立 npm 包引用
2. 静态文件统一用流方式处理
3. 增加 gzip、deflate 支持
4. 默认不做任何服务器端文件缓存
5. 增加 "text\xml" 的 parser
6. 发生异常时输入更详细的信息