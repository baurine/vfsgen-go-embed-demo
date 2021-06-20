// +build ui_server

package uiserver

import (
	"embed"
)

// Assets represent the front-end assets
//go:embed ui_dist
var uiAssets embed.FS
