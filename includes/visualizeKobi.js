var dataset = [ 5, 10, 15, 20, 25 ];
	
d3.csv("includes/Data.csv", function(d)
 {
  return {
	country: d.Country,
	originalCountry: d.originCountry,
    variable: d.Variable,	
	year: new Date(+d.Year, 0, 1),
	Value: d.val,
	
  };
}, function(error, rows) {
  console.log(rows);
});



	
	d3.select("body").selectAll("div")
				.data(dataset)
				.enter()
				.append("div")
				.attr("class", "bar")
				.style("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "px";
				});
				