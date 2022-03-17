package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	log.Println("Start App ...")

	engine := gin.Default()
	engine.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "hello world",
		})
	})
	engine.Run(":80")
}
