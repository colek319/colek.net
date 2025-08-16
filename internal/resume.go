package resume

import (
	"fmt"
	"io"
	"text/template"
)

func GenerateLatexResume(wr io.Writer, resume *Resume, latexTemplate string) {
	t := template.Must(template.New("resume").Parse(latexTemplate))
	err := t.ExecuteTemplate(wr, "resume", resume)
	if err != nil {
		fmt.Printf("failed to execute template: %v\n", err)
	}
}

func GenerateHTMLResume(wr io.Writer, resume *Resume, htmlTemplate string) {
	t := template.Must(template.New("resume").Parse(htmlTemplate))
	err := t.ExecuteTemplate(wr, "resume", resume)
	if err != nil {
		fmt.Printf("failed to execute template: %v\n", err)
	}
}

type Resume struct {
	Header       Header       `yaml:"header"`
	Experience   []Experience `yaml:"experience"`
	Competencies []Entry      `yaml:"competencies"`
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
	Title          string   `yaml:"title"`
	Content        []string `yaml:"content"`
	IncludeInLatex bool     `yaml:"include_in_latex"`
}
