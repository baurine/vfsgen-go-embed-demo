# gin-vite-vfsgen-demo

这个 demo 演示在 Go 1.16 版本之前，如何使用 vfsgen 将前端项目的代码打包到 go 的 binary 中。这是一个前后端分离的 web 项目，后端使用 go 和 gin web 框架，前端使用 vite 和 react。最终生成一个 bin/web 二进制文件。

[总结 Note](./notes/note.md)

## How to Run for Production Mode

```sh
make embed_ui
UI=1 make
make run
```

Then access http://localhost:8080 in the browser. If you want to change the default port 8080, for example 9999，run `PORT=9999 make run`.

## How to Run for Dev Mode

Tab 1 for backend:

```sh
make
make run
```

Tab 2 for frontend:

```sh
cd ui
yarn dev
```
