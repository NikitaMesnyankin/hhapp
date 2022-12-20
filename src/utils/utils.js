const parseParams = (sourceString, params, name) => {
	let resultString = sourceString;

	for (const arg of params) {
		if (resultString.indexOf("?") === -1)
			resultString += `?${name}=${arg}`;
		else {
			resultString += `&${name}=${arg}`;
		}
	}
	return resultString;
};

export { parseParams };
//console.log(parseParams("?item=1", ["1", "2", "4", "3"], "area"));