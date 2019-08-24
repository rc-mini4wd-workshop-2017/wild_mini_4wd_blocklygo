NAME:=wild_mini_4wd_blocklygo
VERSION:=$(gobump show -r)
REVISION:=$(shell git rev-parse --short HEAD)
LDFLAGS:="-X main.revision=$(REVISION)"

.PHONY: deps
deps:
	go get -v -d

.PHONY: devel-deps
devel-deps: deps
	GO111MODULE=off go get \
	golang.org/x/lint/golint \
	github.com/motemen/gobump/cmd/gobump \
	github.com/Songmu/make2help/cmd/make2help \
	golang.org/x/tools/go/internal/gcimporter \


.PHONY: test
test: deps
	go test ./...

.PHONY: lint
lint: devel-deps
	go vet ./...
	golint -set_exit_status ./...

bin/%: cmd/%/main.go deps
	go build -ldflags $(LDFLAGS) -o $@ $<

.PHONY: build
build: bin/$(NAME)

.PHONY: help
help:
	@make2help $(MAKEFILE_LIST)

