# docker-node-webpack-react
docker 中创建 react 开发环境

说明：当前环境抛开 docker 在本机中仍然可以正常运行，这里使用 docker 是为了做 demo 示例


编译
> docker build -t node-webpack-react .
启动一个容器
> docker run -it --rm --name inode -v `pwd`:/var/www -p 3000:3000 node-webpack-react

启用 webpack-dev-server 编译 js 并启动 web 服务器用于项目的访问
访问：使用 docker 的 ip:3000 即可访问，如我的机器为 http://192.168.99.100:3000