#!/usr/bin/env python3
import pathlib

import htmlmin
from jinja2 import Environment, FileSystemLoader
import jsmin

DIR = pathlib.Path(pathlib.Path(__file__).parent.parent, 'src')
TEMPLATE_FILE = "inflation_calc.html"


def main():
    env = Environment(
        loader=FileSystemLoader(searchpath=DIR.resolve())
    )
    template = env.get_template(TEMPLATE_FILE)
    with open(pathlib.Path(DIR, "inflation_calc.js")) as js_f:
        inflation_js = jsmin.jsmin(js_f.read())
    rendered = template.render(inflation_js=inflation_js)
    minified = htmlmin.minify(rendered, remove_comments=True)
    with open(pathlib.Path(DIR.parent, "rendered.html"), "w+") as f:
        f.write(minified)


if __name__ == "__main__":
    main()
