const may2022cpi = 291.474;

	const yearBorn = document.getElementById("yearBorn");

	const formatter = new Intl.NumberFormat(
		'en-US', 
		{style: 'currency', currency: 'USD'}
	).format;

	function updateById(_id, value) {
		return document.getElementById(_id).innerHTML = value
	}

	function updateByName(name, value) {
		const fields = document.getElementsByName(name);
		for (let i = 0; i < fields.length; i++) {
			fields[i].innerHTML = value
		}
	}

	const cpiTable = {"1947": 21.6, "1948": 23.81, "1949": 24.15, "1950": 23.64, "1951": 25.52, "1952": 26.6, "1953": 26.79, "1954": 27.09, "1955": 26.92, "1956": 26.98, "1957": 27.82, "1958": 28.8, "1959": 29.17, "1960": 29.54, "1961": 30.01, "1962": 30.21, "1963": 30.61, "1964": 31.12, "1965": 31.45, "1966": 32.06, "1967": 33.1, "1968": 34.3, "1969": 35.9, "1970": 38.1, "1971": 40.1, "1972": 41.5, "1973": 43.0, "1974": 47.0, "1975": 52.6, "1976": 56.2, "1977": 59.1, "1978": 63.0, "1979": 68.8, "1980": 78.5, "1981": 87.7, "1982": 94.8, "1983": 98.2, "1984": 101.8, "1985": 105.2, "1986": 109.1, "1987": 110.2, "1988": 114.7, "1989": 119.9, "1990": 126.1, "1991": 132.9, "1992": 136.2, "1993": 140.5, "1994": 143.8, "1995": 148.0, "1996": 152.0, "1997": 156.6, "1998": 158.8, "1999": 161.4, "2000": 166.0, "2001": 172.2, "2002": 173.7, "2003": 178.6, "2004": 181.9, "2005": 187.2, "2006": 195.1, "2007": 198.613, "2008": 207.931, "2009": 206.496, "2010": 213.353, "2011": 217.468, "2012": 224.494, "2013": 228.112, "2014": 231.649, "2015": 229.498, "2016": 231.862, "2017": 237.715, "2018": 242.911, "2019": 245.981, "2020": 252.146, "2021": 255.995, "2022": 277.222}
	
	function inflate() {
		const year = yearBorn.value;
		const cpi = cpiTable[year];
		updateById("value", formatter(100_000 * (may2022cpi / cpi)));
		updateById("pastValue", formatter(100_000 * (cpi / may2022cpi)));
		updateById("millionaire", formatter(1_000_000 * (may2022cpi / cpi)));
		updateByName("year", year);	
	}

	yearBorn.addEventListener("change", inflate);