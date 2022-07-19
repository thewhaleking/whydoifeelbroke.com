import requests


def get_latest() -> float:
    def line_key(line: str):
        y = line.split('\t')
        if 'M' in y[2]:
            return y[1] + y[2]
        else:
            return y[1]

    r = requests.get("https://download.bls.gov/pub/time.series/cu/cu.data.1.AllItems")
    latest = max(r.text.splitlines()[1:], key=line_key)
    return float(latest.split('\t')[3].strip())


if __name__ == "__main__":
    print(get_latest())
