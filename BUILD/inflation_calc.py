#!/usr/bin/env python3
import pathlib
import subprocess

import htmlmin
from jinja2 import Environment, FileSystemLoader
import jsmin

import pull_latest_data


DIR = pathlib.Path(pathlib.Path(__file__).parent.parent)
TEMPLATE_FILE = "src/inflation_calc.html"


def main():
    env = Environment(
        loader=FileSystemLoader(searchpath=DIR.resolve())
    )
    # compile Tailwind CSS
    subprocess.run(["npx", "tailwindcss", "-i", "./src/input.css", "-o", "./dist/style.css", "--minify"])
    template = env.get_template(TEMPLATE_FILE)
    js_template = env.get_template("src/inflation_calc.js").render()
    inflation_js = jsmin.jsmin(js_template)
    rendered = template.render(inflation_js=inflation_js)
    minified = htmlmin.minify(rendered, remove_comments=True)
    with open(pathlib.Path(DIR, "rendered.html"), "w+") as f:
        f.write(minified)


if __name__ == "__main__":
    main()
