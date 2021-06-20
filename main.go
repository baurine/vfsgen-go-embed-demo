package main

import (
	"gin-vite-vfsgen-demo/uiserver"
	"net/http"

	"github.com/gin-gonic/gin"
)

var (
	pongCount = 0
)

func main() {
	router := gin.Default()

	// api
	api := router.Group("/api/v1")
	{
		api.GET("/ping", pingHanlder)
	}

	// ui assets
	router.StaticFS("/demo", uiserver.Assets())
	router.GET("/", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "/demo")
		c.Abort()
	})

	router.Run()
}

func pingHanlder(c *gin.Context) {
	pongCount += 1
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
		"count":   pongCount,
	})
}
