// +build ui_server

package uiserver

import (
	"embed"
)

// uiAssets represent the frontend ui assets
//go:embed ui_dist
var uiAssets embed.FS
