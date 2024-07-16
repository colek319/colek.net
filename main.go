package main

import (
	"context"
	"log"
	"os"

	"github.com/colek319/colek.net/templates"
)

func main() {
	f, err := os.Create("index.html")
	if err != nil {
		log.Fatalf("failed to create output file: %v", err)
	}

	err = templates.Resume("Cole").Render(context.Background(), f)
	if err != nil {
		log.Fatalf("failed to write output file: %v", err)
	}
}
