import requests


def get_latest() -> float:
    def line_key(line: str):
        y = line.split('\t')
        if 'M' in y[2]:
            return y[1] + y[2]
        else:
            return y[1]

    r = requests.get(
        "https://download.bls.gov/pub/time.series/cu/cu.data.1.AllItems",
        headers={
              "User-Agent": 'Mozilla/4.0 (X11; MSIE 6.0; i686; .NET CLR 1.1.4322; .NET CLR 2.0.50727; FDM)'
        }
    )
    latest = max(r.text.splitlines()[1:], key=line_key)
    return float(latest.split('\t')[3].strip())


if __name__ == "__main__":
    print(get_latest())
