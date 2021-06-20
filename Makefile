.PHONY: server

default: server

embed_ui:
	cd ui && yarn && yarn build
	rm -rf uiserver/ui_dist
	mv ui/dist uiserver/ui_dist

server:
ifeq ($(UI),1)
	go build -tags ui_server -o bin/web main.go
else
	go build -o bin/web main.go
endif

run:
	bin/web
