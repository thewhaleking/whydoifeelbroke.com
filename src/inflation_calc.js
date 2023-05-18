const mostRecentCPI = {{ most_recent_cpi }}
const johnOliver = "2023";


const cpiTable = {"1947": 21.6, "1948": 23.81, "1949": 24.15, "1950": 23.64, "1951": 25.52, "1952": 26.6, "1953": 26.79, "1954": 27.09, "1955": 26.92, "1956": 26.98, "1957": 27.82, "1958": 28.8, "1959": 29.17, "1960": 29.54, "1961": 30.01, "1962": 30.21, "1963": 30.61, "1964": 31.12, "1965": 31.45, "1966": 32.06, "1967": 33.1, "1968": 34.3, "1969": 35.9, "1970": 38.1, "1971": 40.1, "1972": 41.5, "1973": 43.0, "1974": 47.0, "1975": 52.6, "1976": 56.2, "1977": 59.1, "1978": 63.0, "1979": 68.8, "1980": 78.5, "1981": 87.7, "1982": 94.8, "1983": 98.2, "1984": 101.8, "1985": 105.2, "1986": 109.1, "1987": 110.2, "1988": 114.7, "1989": 119.9, "1990": 126.1, "1991": 132.9, "1992": 136.2, "1993": 140.5, "1994": 143.8, "1995": 148.0, "1996": 152.0, "1997": 156.6, "1998": 158.8, "1999": 161.4, "2000": 166.0, "2001": 172.2, "2002": 173.7, "2003": 178.6, "2004": 181.9, "2005": 187.2, "2006": 195.1, "2007": 198.613, "2008": 207.931, "2009": 206.496, "2010": 213.353, "2011": 217.468, "2012": 224.494, "2013": 228.112, "2014": 231.649, "2015": 229.498, "2016": 231.862, "2017": 237.715, "2018": 242.911, "2019": 245.981, "2020": 252.146, "2021": 255.995, "2022": 277.222, "2023": 302.918}

const carTable = {
	// year: [carName, msrp]
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
	"1964": ["Chevrolet Impala", 2947],
	"1965": ["Chevrolet Impala", 2670],
	"1966": ["Volkswagen Type 2 Camper Bus", 2577],
	"1967": ["Chevrolet Impala", 2845],
	"1968": ["Chevrolet El Camino", 2505],
	"1969": ["Plymouth Roadrunner", 2945],
	"1970": ["Dodge Challenger", 3914],
	"1971": ["Chrysler New Yorker", 4250],
	"1972": ["Volkswagen Beetle", 1780],
	"1973": ["Chevrolet Monte Carlo", 3415],
	"1974": ["Ford Pinto", 2021],
	"1975": ["Oldsmobile Cutlass", 4133],
	"1976": ["Oldsmobile Cutlass", 4775],
	"1977": ["Chevrolet Impala", 4900],
	"1978": ["Oldsmobile Cutlass", 5033],
	"1979": ["Oldsmobile Cutlass", 5605],
	"1980": ["Oldsmobile Cutlass", 6735],
	"1981": ["Oldsmobile Cutlass", 8413],
	"1982": ["Ford Escort", 5518],
	"1983": ["Oldsmobile Cutlass Supreme", 9175],
	"1984": ["Chevrolet Cavalier", 6214],
	"1985": ["Chevrolet Cavalier", 6477],
	"1986": ["Chevrolet Celebrity", 8548],
	"1987": ["Ford Escort", 6801],
	"1988": ["Ford Escort", 6949],
	"1989": ["Honda Accord", 8000],
	"1990": ["Honda Accord", 8000],
	"1991": ["Honda Accord", 8345],
	// these seem off -->
	"1992": ["Ford Taurus", 16_013],
	"1993": ["Ford Taurus", 24_829],
	"1994": ["Ford Taurus", 24_715],
	// <-- to here
	"1995": ["Ford Taurus", 17_955],
	"1996": ["Ford Taurus", 18_545],
	"1997": ["Toyota Camry", 24_018],
	"1998": ["Toyota Camry", 16_938],
	"1999": ["Toyota Camry", 19_859],
	"2000": ["Toyota Camry", 20_273],
	"2001": ["Honda Accord", 19_590],
	"2002": ["Toyota Camry", 18_970],
	"2003": ["Toyota Camry", 19_045],
	"2004": ["Toyota Camry", 19_875],
	"2005": ["Toyota Camry", 19_295],
	"2006": ["Toyota Camry", 19_275],
	"2007": ["Toyota Camry", 19_925],
	"2008": ["Toyota Camry", 19_000],
	"2009": ["Toyota Camry", 20_000],
	"2010": ["Toyota Camry", 20_000],
	"2011": ["Toyota Camry", 22_700],
	"2012": ["Toyota Camry", 22_500],
	"2013": ["Toyota Camry", 22_680],
	"2014": ["Toyota Camry", 22_235],
	"2015": ["Toyota Camry", 22_970],
	"2016": ["Toyota Camry", 23_070],
	"2017": ["Toyota Camry", 23_070],
	"2018": ["Toyota Camry", 24_885],
	"2019": ["Toyota Camry", 24_095],
	"2020": ["Toyota Camry", 24_970],
	"2021": ["Toyota Camry", 26_560],
	"2022": ["Toyota Camry", 27_385],
	"2023": ["Toyota Camry", 27_195]
}

const rentTable = {
	// source: https://ipropertymanagement.com/research/average-rent-by-year
	// Averaged over the years where a decade or half-decade was given as they source

	// year: medianUSRent
	"1940": 42,
	"1941": 43,
	"1942": 45,
	"1943": 46,
	"1944": 48,
	"1945": 49,
	"1946": 51,
	"1947": 52,
	"1948": 54,
	"1949": 55,
	"1950": 71,
	"1951": 73,
	"1952": 76,
	"1953": 79,
	"1954": 82,
	"1955": 85,
	"1956": 88,
	"1957": 91,
	"1958": 94,
	"1959": 97,
	"1960": 108,
	"1961": 111,
	"1962": 115,
	"1963": 119,
	"1964": 122,
	"1965": 126,
	"1966": 130,
	"1967": 133,
	"1968": 137,
	"1969": 141,
	"1970": 156,
	"1971": 165,
	"1972": 175,
	"1973": 184,
	"1974": 194,
	"1975": 243,
	"1976": 260,
	"1977": 277,
	"1978": 295,
	"1979": 312,
	"1980": 339,
	"1981": 358,
	"1982": 377,
	"1983": 396,
	"1984": 415,
	"1985": 447,
	"1986": 468,
	"1987": 490,
	"1988": 511,
	"1989": 533,
	"1990": 523,
	"1991": 538,
	"1992": 553,
	"1993": 568,
	"1994": 583,
	"1995": 602,
	"1996": 617,
	"1997": 633,
	"1998": 649,
	"1999": 665,
	"2000": 694,
	"2001": 712,
	"2002": 730,
	"2003": 749,
	"2004": 767,
	"2005": 810,
	"2006": 833,
	"2007": 856,
	"2008": 879,
	"2009": 902,
	"2011": 845,
	"2012": 867,
	"2013": 850,
	"2014": 877,
	"2015": 923,
	"2016": 958,
	"2017": 991,
	"2018": 1027,
	"2019": 1071,
	"2020": 1104,
	"2021": 1651,
	"2022": 1326,
	"2023": 1320
}

const houseTable = {"1947": 0.0, "1948": 0.0, "1949": 0.0, "1950": 0.0, "1951": 0.0, "1952": 0.0, "1953": 0.0, "1954": 0.0, "1955": 0.0, "1956": 0.0, "1957": 0.0, "1958": 0.0, "1959": 0.0, "1960": 0.0, "1961": 0.0, "1962": 0.0, "1963": 19600, "1964": 20900, "1965": 21700, "1966": 22800, "1967": 24400, "1968": 27000, "1969": 27100, "1970": 26300, "1971": 28200, "1972": 31600, "1973": 36600, "1974": 39300, "1975": 44400, "1976": 50300, "1977": 57500, "1978": 66400, "1979": 72700, "1980": 80000, "1981": 83700, "1982": 84600, "1983": 90800, "1984": 97800, "1985": 103800, "1986": 115600, "1987": 133500, "1988": 140400, "1989": 151200, "1990": 150100, "1991": 144400, "1992": 147200, "1993": 148300, "1994": 156100, "1995": 160900, "1996": 171000, "1997": 175400, "1998": 181500, "1999": 204800, "2000": 212100, "2001": 214200, "2002": 232500, "2003": 256000, "2004": 286300, "2005": 294200, "2006": 299600, "2007": 305800, "2008": 276600, "2009": 272900, "2010": 278000, "2011": 259700, "2012": 297700, "2013": 334400, "2014": 369400, "2015": 366700, "2016": 364900, "2017": 399700, "2018": 384000, "2019": 384600, "2020": 403900, "2021": 497300, "2022": 507800, "2023": 436_800}

const tuitionTable = {
	// year: [publicTuition, privateTuition]
	"1947": [0.0, 0.0],
	"1948": [0.0, 0.0],
	"1949": [0.0, 0.0],
	"1950": [0.0, 600],  // private is Penn for this year
	"1951": [0.0, 0.0],
	"1952": [0.0, 0.0],
	"1953": [0.0, 0.0],
	"1954": [0.0, 0.0],
	"1955": [0.0, 0.0],
	"1956": [0.0, 0.0],
	"1957": [0.0, 0.0],
	"1958": [0.0, 0.0],
	"1959": [0.0, 0.0],
	"1960": [0.0, 0.0],
	"1961": [0.0, 0.0],
	"1962": [0.0, 0.0],
	// source: https://educationdata.org/average-cost-of-college-by-year
	"1963": [243, 1011],
	// no public data for 64-65, priv for 64-67, data for those dates are averaged from prior and after
	"1964": [260, 1100],
	"1965": [285, 1200],
	"1966": [302, 1300],
	"1967": [310, 1400],
	"1968": [321, 1417],
	"1969": [358, 1562],
	"1970": [394, 1706],
	"1971": [428, 1832],
	"1972": [503, 1948],
	"1973": [514, 2045],
	"1974": [512, 2130],
	"1975": [542, 2291],
	"1976": [617, 2534],
	"1977": [655, 2700],
	"1978": [688, 2958],
	"1979": [738, 3225],
	"1980": [804, 3617],
	"1981": [909, 4113],
	"1982": [1031, 4639],
	"1983": [1148, 5093],
	"1984": [1228, 5556],
	"1985": [1318, 6121],
	"1986": [1414, 6658],
	"1987": [1537, 7116],
	"1988": [1646, 7722],
	"1989": [1780, 8396],
	"1990": [1888, 9083],
	"1991": [2117, 9759],
	"1992": [2349, 10294],
	"1993": [2537, 10952],
	"1994": [2681, 11481],
	"1995": [2848, 12243],
	"1996": [2987, 12881],
	"1997": [3110, 13344],
	"1998": [3229, 13973],
	"1999": [3349, 14616],
	"2000": [3501, 15470],
	"2001": [3735, 16211],
	"2002": [4046, 16826],
	"2003": [4587, 17763],
	"2004": [5027, 18604],
	"2005": [5351, 19292],
	"2006": [5666, 20517],
	"2007": [5943, 21427],
	"2008": [6312, 22040],
	"2009": [6717, 22269],
	"2010": [7132, 22677],
	"2011": [7713, 23464],
	"2012": [8070, 24523],
	"2013": [8312, 25707],
	"2014": [8543, 26739],
	"2015": [8778, 27942],
	"2016": [8804, 29476],
	"2017": [9036, 30723],
	"2018": [9_212, 31_883],
	"2019": [9_349, 32_769],
	// source: https://www.usnews.com/education/best-colleges/paying-for-college/articles/paying-for-college-infographic
	"2020": [10_388, 38_185],
	"2021": [10_388, 38_185],
	"2022": [10_388, 38_185],
	"2023": [10_423, 39_723]
}

/* const weddingTable = {
	// year: [ringPrice, fullWeddingPrice]
	"1947": [0.0, 0.0],
	"1948": [0.0, 0.0],
	"1949": [0.0, 0.0],
	"1950": [0.0, 0.0],
	"1951": [0.0, 0.0],
	"1952": [0.0, 0.0],
	"1953": [0.0, 0.0],
	"1954": [0.0, 0.0],
	"1955": [0.0, 0.0],
	"1956": [0.0, 0.0],
	"1957": [0.0, 0.0],
	"1958": [0.0, 0.0],
	"1959": [0.0, 0.0],
	"1960": [0.0, 0.0],
	"1961": [0.0, 0.0],
	"1962": [0.0, 0.0],
	"1963": [0.0, 0.0],
	"1964": [0.0, 0.0],
	"1965": [0.0, 0.0],
	"1966": [0.0, 0.0],
	"1967": [0.0, 0.0],
	"1968": [0.0, 0.0],
	"1969": [0.0, 0.0],
	"1970": [0.0, 0.0],
	"1971": [0.0, 0.0],
	"1972": [0.0, 0.0],
	"1973": [0.0, 0.0],
	"1974": [0.0, 2_000], // source: Buzzfeed, Meg Keene
	"1975": [0.0, 0.0],
	"1976": [0.0, 0.0],
	"1977": [0.0, 0.0],
	"1978": [0.0, 0.0],
	"1979": [0.0, 0.0],
	"1980": [0.0, 0.0],
	"1981": [0.0, 0.0],
	"1982": [0.0, 0.0],
	"1983": [0.0, 0.0],
	"1984": [0.0, 0.0],
	"1985": [0.0, 0.0],
	"1986": [0.0, 0.0],
	"1987": [0.0, 0.0],
	"1988": [0.0, 0.0],
	"1989": [0.0, 0.0],
	"1990": [0.0, 15_208], // source: Penn State, Beth Montemurro
	"1991": [0.0, 0.0],
	"1992": [0.0, 0.0],
	"1993": [0.0, 0.0],
	"1994": [0.0, 0.0],
	"1995": [0.0, 0.0],
	"1996": [0.0, 0.0],
	"1997": [0.0, 0.0],
	"1998": [0.0, 0.0],
	"1999": [0.0, 0.0],
	// Source: The Wedding Report -->
	"2000": [0.0, 20_000],
	"2001": [0.0, 21_000],
	"2002": [0.0, 22_400],
	"2003": [0.0, 23_300],
	"2004": [0.0, 24_400],
	"2005": [0.0, 25_800],
	"2006": [0.0, 26_400],
	// <-- Source: The Wedding Report
	"2007": [0.0, 0.0],
	"2008": [0.0, 0.0],
	"2009": [0.0, 0.0],
	"2010": [0.0, 0.0],
	"2011": [0.0, 0.0],
	"2012": [0.0, 0.0],
	"2013": [0.0, 0.0],
	"2014": [0.0, 0.0],
	"2015": [0.0, 0.0],
	"2016": [0.0, 0.0],
	"2017": [0.0, 0.0],
	"2018": [0.0, 0.0],
	"2019": [0.0, 0.0],
	"2020": [0.0, 0.0],
	"2021": [0.0, 0.0],
	"2022": [0.0, 0.0]
} */

let yearBorn = document.getElementById("yearBorn");

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
	// selector declarations
	let year = yearBorn.value;

	try {
		const cpi = cpiTable[year];
		const carName = carTable[year][0];
		const carVal = carTable[year][1];
		const rent = rentTable[year];
		const home = houseTable[year];
		const publicTuition = tuitionTable[year][0];
		const privateTuition = tuitionTable[year][1];
		let tuitionDiscalimer = "";
		let publicTuitionThen = "";
		let publicTuitionNow = "";
		let privateTuitionThen = "";
		let privateTuitionNow = "";
		let actualPublicTuition = "";
		let actualPrivateTuition = "";
		let houseDisclaimer = "";
		let homePriceThen = "";
		let homePriceNow = "";
		let actualHomeNow = "";
		// const ringPrice = weddingTable[year][0];
		// const weddingPrice = weddingTable[year][1];

		// quick maths
		const nowToThen = cpi / mostRecentCPI;
		const thenToNow = mostRecentCPI / cpi;

		// updates
		updateByName("year", year);	
		// income
		updateById("value", formatter(100_000 * thenToNow));
		updateById("pastValue", formatter(100_000 * nowToThen));
		updateById("millionaire", formatter(1_000_000 * thenToNow));
		// car
		updateById("carName", carName);
		updateById("carValueThen", formatter(carVal));
		updateById("carValueNow", formatter(carVal * thenToNow));
		updateById("actualCarNameNow", carTable[johnOliver][0]);
		updateById("actualCarValueNow", formatter(carTable[johnOliver][1]));
		// rent
		updateById("rentPriceThen", formatter(rent));
		updateById("rentPriceNow", formatter(rent * thenToNow));
		updateById("actualRentNow", formatter(rentTable[johnOliver]));
		if (year < 1963) {
			// Update disclaimers
			tuitionDiscalimer = "Tuition data are only available from 1963 onward.";
			houseDisclaimer = "Home price data are only available from 1963 onward.";
			document.getElementById("homeTable").style.display = "none";
			document.getElementById("tuitionTable").style.display = "none";
		} else {
			// tuition
			publicTuitionThen = formatter(4 * publicTuition);
			publicTuitionNow = formatter(4 * publicTuition * thenToNow);
			privateTuitionThen = formatter(4 * privateTuition);
			privateTuitionNow = formatter(4 * privateTuition * thenToNow);
			actualPublicTuition = formatter(4 * tuitionTable[johnOliver][0]);
			actualPrivateTuition = formatter(4 * tuitionTable[johnOliver][1]);
			// home
			homePriceThen = formatter(home);
			homePriceNow = formatter(home * thenToNow);
			actualHomeNow = formatter(houseTable[johnOliver]);
			document.getElementById("homeTable").style.display = "block";
			document.getElementById("tuitionTable").style.display = "block";
		}
		// home
		updateById("houseDisclaimer", houseDisclaimer);
		updateById("homePriceThen", homePriceThen);
		updateById("homePriceNow", homePriceNow);
		updateById("actualHomeNow", actualHomeNow);
		// tuition
		updateById("tuitionDisclaimer", tuitionDiscalimer);
		updateById("publicTuitionThen", publicTuitionThen);
		updateById("publicTuitionNow", publicTuitionNow);
		updateById("privateTuitionThen", privateTuitionThen);
		updateById("privateTuitionNow", privateTuitionNow);
		updateById("actualPublicTuition", actualPublicTuition);
		updateById("actualPrivateTuition", actualPrivateTuition);
		// wedding
		// TODO Gather this data.
		/* 
		updateById("ringPriceThen", formatter(ringPrice));
		updateById("ringPriceNow", formatter(ringPrice * thenToNow));
		updateById("weddingCostThen", formatter(weddingPrice));
		updateById("weddingCostNow", formatter(weddingPrice * thenToNow));
		updateById("actualRingPrice", formatter(weddingTable[johnOliver][0]));
		updateById("actualWeddingPrice", formatter(weddingTable[johnOliver][1]));
		*/
	}

	catch (e) {
		window.alert("Data is only available from 1947 on.");
		console.error(e);
		console.error(year);
		yearBorn.value = "1992";
		return inflate();
	}
}

yearBorn.addEventListener("change", inflate);

function initLoad() {
	inflate();
	document.getElementById("inYearBorn").scrollIntoView({block: "center"});
}