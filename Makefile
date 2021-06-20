.PHONY: server

default: server

embed_ui:
	cd ui && yarn && yarn build
	tools/embed_assets/embed_ui_assets.sh

server:
ifeq ($(UI),1)
	go build -tags ui_server -o bin/web main.go
else
	go build -o bin/web main.go
endif

run:
	bin/web
