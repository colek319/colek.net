package main

import (
	"bytes"
	"fmt"
	"os"

	"gopkg.in/yaml.v3"

	resume "github.com/colek319/colek.net/internal"
)

func main() {
	handleGenerateLatexResume()
	handleGenerateWebResume()
}

func handleGenerateLatexResume() {
	res, err := readResumeYAML()
	if err != nil {
		fmt.Printf("failed to read resume: %v\n", err)
		return
	}

	latexTemplate, err := readLatexTemplate()
	if err != nil {
		fmt.Printf("failed to read latex template: %v\n", err)
		return
	}

	// write to file
	f, err := os.Create("resume.tex")
	if err != nil {
		fmt.Printf("failed to create file: %v\n", err)
		return
	}
	defer func(f *os.File) { _ = f.Close() }(f)
	resume.GenerateLatexResume(f, res, latexTemplate)
}

func handleGenerateWebResume() {
	res, err := readResumeYAML()
	if err != nil {
		fmt.Printf("failed to read resume: %v\n", err)
		return
	}

	latexTemplate, err := readHTMLTemplate()
	if err != nil {
		fmt.Printf("failed to read HTML template: %v\n", err)
		return
	}

	// write to file
	f, err := os.Create("index.html")
	if err != nil {
		fmt.Printf("failed to create file: %v\n", err)
		return
	}
	defer func(f *os.File) { _ = f.Close() }(f)
	resume.GenerateHTMLResume(f, res, latexTemplate)
}

func readResumeYAML() (*resume.Resume, error) {
	data, err := os.ReadFile("resume.yaml")
	if err != nil {
		return nil, fmt.Errorf("failed to read file: %v", err)
	}

	var res resume.Resume
	err = yaml.Unmarshal(data, &res)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal resume: %v", err)
	}

	return &res, nil
}

func readLatexTemplate() (string, error) {
	data, err := os.ReadFile("resume.tex.tmpl")
	if err != nil {
		return "", fmt.Errorf("failed to read file: %v", err)
	}
	data = bytes.ReplaceAll(data, []byte(`%`), []byte(`\%`))
	data = bytes.ReplaceAll(data, []byte(`$`), []byte(`\$`))
	return string(data), nil
}

func readHTMLTemplate() (string, error) {
	data, err := os.ReadFile("index.html.tmpl")
	if err != nil {
		return "", fmt.Errorf("failed to read file: %v", err)
	}
	return string(data), nil
}
