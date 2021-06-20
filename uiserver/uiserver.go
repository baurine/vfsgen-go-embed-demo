package uiserver

import (
	"io/fs"
	"net/http"
)

func Assets() http.FileSystem {
	// even uiAssets is empty, fs.Sub won't fail
	stripped, err := fs.Sub(uiAssets, "ui_dist")
	if err != nil {
		panic(err)
	}
	return http.FS(stripped)
}
