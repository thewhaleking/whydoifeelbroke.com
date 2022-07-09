// TODO change this to be more dynamic
const may2022cpi = 291.474;


const cpiTable = {"1947": 21.6, "1948": 23.81, "1949": 24.15, "1950": 23.64, "1951": 25.52, "1952": 26.6, "1953": 26.79, "1954": 27.09, "1955": 26.92, "1956": 26.98, "1957": 27.82, "1958": 28.8, "1959": 29.17, "1960": 29.54, "1961": 30.01, "1962": 30.21, "1963": 30.61, "1964": 31.12, "1965": 31.45, "1966": 32.06, "1967": 33.1, "1968": 34.3, "1969": 35.9, "1970": 38.1, "1971": 40.1, "1972": 41.5, "1973": 43.0, "1974": 47.0, "1975": 52.6, "1976": 56.2, "1977": 59.1, "1978": 63.0, "1979": 68.8, "1980": 78.5, "1981": 87.7, "1982": 94.8, "1983": 98.2, "1984": 101.8, "1985": 105.2, "1986": 109.1, "1987": 110.2, "1988": 114.7, "1989": 119.9, "1990": 126.1, "1991": 132.9, "1992": 136.2, "1993": 140.5, "1994": 143.8, "1995": 148.0, "1996": 152.0, "1997": 156.6, "1998": 158.8, "1999": 161.4, "2000": 166.0, "2001": 172.2, "2002": 173.7, "2003": 178.6, "2004": 181.9, "2005": 187.2, "2006": 195.1, "2007": 198.613, "2008": 207.931, "2009": 206.496, "2010": 213.353, "2011": 217.468, "2012": 224.494, "2013": 228.112, "2014": 231.649, "2015": 229.498, "2016": 231.862, "2017": 237.715, "2018": 242.911, "2019": 245.981, "2020": 252.146, "2021": 255.995, "2022": 277.222}
const cars = {
	"1947": ["Chevrolet Fleetline", 1313],
	"1948": ["Chevrolet Fleetmaster", 1402],
	"1949": ["Ford Tudor", 1637],
	"1950": ["Chevrolet Styline", 1482],
	"1951": ["Chevrolet Styline", 1647],
	"1952": ["Chevrolet Styline", 1761],
	"1953": ["Chevrolet Bel Air", 1820],
	"1954": ["Chevrolet Bel Air", 1884],
	"1955": ["Chevrolet Bel Air", 2166],
	"1956": ["Volkswagen Type-1", 1495],
	"1957": ["Plymouth Suburban", 2540],
	"1958": ["Chevrolet Bel Air", 2554],
	"1959": ["Ford Country Wagon", 2752],
	"1960": ["Rambler Ambassador", 2395],
	"1961": ["Ford Falcon", 1900],
	"1962": ["Ford Fairlane", 2345],
	"1963": ["Chevrolet Impala", 2774],
	"1964": ["Ford Mustang", 0.0],
	"1965": ["Chevrolet Impala", 0.0],
	"1966": ["Volkswagen Type 2 Camper Bus", 0.0],
	"1967": ["Chevrolet Camaro", 0.0],
	"1968": ["Chevrolet El Camino", 0.0],
	"1969": ["Plymouth Roadrunner", 0.0],
	"1970": ["Dodge Challenger", 0.0],
	"1971": ["Chrysler New Yorker", 0.0],
	"1972": ["Volkswagen Beetle", 0.0],
	"1973": ["Chevrolet Monte Carlo", 0.0],
	"1974": ["Ford Pinto", 0.0],
	"1975": ["Oldsmobile Cutlass", 0.0],
	"1976": ["Oldsmobile Cutlass", 0.0],
	"1977": ["Chevrolet Impala/Caprice", 0.0],
	"1978": ["Oldsmobile Cutlass", 0.0],
	"1979": ["Oldsmobile Cutlass", 0.0],
	"1980": ["Oldsmobile Cutlass", 0.0],
	"1981": ["Oldsmobile Cutlass", 0.0],
	"1982": ["Ford Escort", 0.0],
	"1983": ["Oldsmobile Cutlass Supreme", 0.0],
	"1984": ["Chevrolet Cavalier", 0.0],
	"1985": ["Chevrolet Cavalier", 0.0],
	"1985": ["Chevrolet Celebrity", 0.0],
	"1987": ["Ford Escort", 0.0],
	"1988": ["Ford Escort", 0.0],
	"1989": ["Honda Accord", 0.0],
	"1990": ["Honda Accord", 0.0],
	"1991": ["Honda Accord", 0.0],
	"1992": ["Ford Taurus", 0.0],
	"1993": ["Ford Taurus", 0.0],
	"1994": ["Ford Taurus", 0.0],
	"1995": ["Ford Taurus", 0.0],
	"1996": ["Ford Taurus", 0.0],
	"1997": ["Toyota Camry", 0.0],
	"1998": ["Toyota Camry", 0.0],
	"1999": ["Toyota Camry", 0.0],
	"2000": ["Toyota Camry", 0.0],
	"2001": ["Honda Accord", 0.0],
	"2002": ["Toyota Camry", 0.0],
	"2003": ["Toyota Camry", 0.0],
	"2004": ["Toyota Camry", 0.0],
	"2005": ["Toyota Camry", 0.0],
	"2006": ["Toyota Camry", 0.0],
	"2007": ["Toyota Camry", 0.0],
	"2008": ["Toyota Camry", 0.0],
	"2009": ["Toyota Camry", 0.0],
	"2010": ["Toyota Camry", 0.0],
	"2011": ["Toyota Camry", 0.0],
	"2012": ["Toyota Camry", 0.0],
	"2013": ["Toyota Camry", 0.0],
	"2014": ["Toyota Camry", 0.0],
	"2015": ["Toyota Camry", 0.0],
	"2016": ["Toyota Camry", 0.0],
	"2017": ["Toyota Camry", 0.0],
	"2018": ["Toyota Camry", 0.0],
	"2019": ["Toyota Camry", 0.0],
	"2020": ["Toyota Camry", 0.0],
	"2021": ["Toyota Camry", 0.0],
}

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

function inflate() {
	const year = yearBorn.value;
	const cpi = cpiTable[year];
	const car = cars[year];
	const nowToThen = cpi / may2022cpi;
	const thenToNow = may2022cpi / cpi;
	updateByName("year", year);	
	updateById("value", formatter(100_000 * thenToNow));
	updateById("pastValue", formatter(100_000 * nowToThen));
	updateById("millionaire", formatter(1_000_000 * thenToNow));
	updateById("carName", car[0]);
	updateById("carValueThen", formatter(car[1]));
	updateById("carValueNow", formatter(car[1] * thenToNow));
}

yearBorn.addEventListener("change", inflate);