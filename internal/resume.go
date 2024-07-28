package resume

import (
	"fmt"
	"gopkg.in/yaml.v3"
	"os"
)

func GenerateLatexResume() []bytes {
	// read latex resume template
	// insert new content
	// write to file
	return nil
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

func praseResumeYAML(filename string) (*Resume, error) {
	data, err := os.ReadFile(filename)
	if err != nil {
		return nil, fmt.Errorf("failed to read file: %v", err)
	}

	var resume Resume
	err = yaml.Unmarshal(data, &resume)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal resume: %v", err)
	}

	return &resume, nil
}

func buildLatexEntries(resume *Resume) []string {
	entries := []string{}
	for _, experience := range resume.Experience {
		entries = append(entries, fmt.Sprintf("\\section{%s}", experience.Title))
		for _, entry := range experience.Entries {
			entries = append(entries, fmt.Sprintf("\\subsection{%s}", entry.Title))
			for _, content := range entry.Content {
				entries = append(entries, content)
			}
		}
	}
	return entries
}
