package main

import (
	"fmt"
	"net/http"

	"github.com/a-h/templ"
	"github.com/colek319/colek.net/components"
)

func main() {
	component := components.Hello("Cole")

	http.Handle("/", templ.Handler(component))

	fmt.Println("Listening on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println(err)
	}
}
