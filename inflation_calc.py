#!/usr/bin/env python3
import pathlib

import htmlmin
from jinja2 import Environment, FileSystemLoader

DIR = pathlib.Path(__file__).parent.resolve()
TEMPLATE_FILE = "inflation_calc.html"

def main():
	env = Environment(
	    loader=FileSystemLoader(searchpath=DIR)
	)
	template = env.get_template(TEMPLATE_FILE)
	rendered = template.render()
	minified = htmlmin.minify(rendered, remove_comments=True)
	with open(pathlib.Path(DIR, "rendered.html"), "w+") as f:
		f.write(minified)


if __name__ == "__main__":
	main()
