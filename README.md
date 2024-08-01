# colek.net

Website hosting just a resume from now on. Maybe more later on.

# Summary

We use a GoLang script to generate a static html page hosting the resume written in `resume.yaml`.

## Making Changes
To make changes to an existing resume:
- Edit `resume.yaml`.
- Run `Go run .` to generate the html page.

If you want to change the schema, make changes to the `Resume` struct. Be sure to update `resume.yaml` 
and `resume.tex.templ` to use the new schema.

## Setup
- On MacOS, install mactex. You should be able to run `pdflatex resume.tex`.
