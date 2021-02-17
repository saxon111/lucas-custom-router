### 路由原理

- HashRouter:利用 hash 实现路由切换
- BrowserRouter:实现 h5 Api 实现路由的切换



### Route组件
#### 指定一个Route组件的渲染内容有三种方式
* component属性，值是一个组件类型，不能写定义的逻辑
* render属性，是一个函数，如果路径匹配，就渲染函数返回值
* children属性，也是一个函数，
