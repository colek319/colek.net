package main

import (
	"fmt"
)

func main() {
	resumeFileName := "resume.yaml"
	resume, err := praseResumeYAML(resumeFileName)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
		return
	}
	fmt.Printf("%+v\n", resume)
}

func updateLatexResume(templateFilename string) []bytes {
	// read latex resume template
	// insert new content
	// write to file
}

type Resume struct {
	Header     Header       `yaml:"header"`
	Experience []Experience `yaml:"experience"`
}

type Header struct {
	Summary string `yaml:"summary"`
	Email   string `yaml:"email"`
}

type Experience struct {
	Title    string  `yaml:"title"`
	Company  string  `yaml:"company"`
	Location string  `yaml:"location"`
	Start    string  `yaml:"start"`
	End      string  `yaml:"end"`
	Entries  []Entry `yaml:"entries"`
}

type Entry struct {
	Title   string   `yaml:"title"`
	Content []string `yaml:"content"`
}
