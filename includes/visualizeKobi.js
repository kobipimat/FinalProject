/*	var dataset = [ 5, 10, 15, 20, 25 ];

	d3.select("body").selectAll("div")
				.data(dataset)
				.enter()
				.append("div")
				.attr("class", "bar")
				.style("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "px";
				});
	*/			
				
			//screen dimention
			var width = 1000,
				height = 500, 
				margin = 50;

			var svg=d3.select("body").append("svg").attr("width",width).attr("height",height);
			var x=d3.scale.linear().domain([2000,2013]).range([margin,width-margin]);
			var y=d3.scale.linear().domain([0,10]).range([height-margin,margin]);
			var r=d3.scale.linear().domain([0,500]).range([0,20]);
			var o=d3.scale.linear().domain([10000,100000]).range([.5,1]);
			var c=d3.scale.category10().domain(["Africa","America","Asia","Europe","Oceania"]);
			
			//numbers location compare the X axis
			var xAxis = d3.svg.axis()
			  .scale(x)
			  .orient("bottom");
			//numbers location compare the Y axis
			var yAxis = d3.svg.axis()
			  .scale(y)
			  .orient("left");
			// create the X Axis
			svg.append("g")
			  .attr("class", "axis")
			  .attr("transform", "translate(0," + (height - margin) + ")")
			  .call(xAxis);
			// create the  Y Axis
			svg.append("g")
			  .attr("class", "axis")
			   .attr("transform", "translate(" + margin + ",0)")
			  .call(yAxis);
		  

			//X axis stroke line
			svg.selectAll(".h").data(d3.range(1,11,1)).enter()
			  .append("line").classed("h",1)
			  .attr("x1",margin).attr("x2",height-margin)
			  .attr("y1",y).attr("y2",y)
			//Y axis stroke line
			svg.selectAll(".v").data(d3.range(1,5)).enter()
			  .append("line").classed("v",1)
			  .attr("y1",margin).attr("y2",width-margin)
			  .attr("x1",x).attr("x2",x)

			d3.csv("includes/data.csv", function(data) {
				return {
							country: data.Country,
							originalCountry: data.originCountry,
							variable: data.Variable,	
							year : data.Year,
							//year: new Date(+data.Year, 0, 1),
							Value: data.val
			  };
			}, function(error, rows) {
			  console.log(rows);});
	/*		
			var year = svg.selectAll(".year")
			.data(data)
			.enter().append("yAxis")
			.attr("class", "yAxis")
			.attr("transform", function (d) {
			if
			};
	*/
	
	/*		  
	
  var countries = svg.selectAll(".country")
    .data(da)
    .enter().append("g")
    .attr("class", "country")
    .attr("transform", function(da, i) {
      // this is an accessor function
      // d is the datum being operated on
      // i is the index (e.g. 15 out of 180)
      // we want to translate each country down by
      // i * y pixels (plus 50 for the axis markers)
      return "translate(0, " + ((i * y) + 50) + ")"; });
	  
	  

			d3.select("body").selectAll("div")
				.data(d)
				.enter()
				.append("div")
				.attr("class", "bar")
				.style("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "px";
				});
	*/		
/*			
			svg.selectAll("circle").data(csv).enter()
				.append("circle")
				.attr("cx",function(d) {return x(0);})
				.attr("cy",function(d) {return y(0);})
				.attr("r",function(d) {return r(0);})
				.style("fill",function(d) {return c(d.continent);})
				.style("opacity",function(d) {return o(+d.GDPcap);})
				.append("title")
				.text(function(d) {return d.country;})

			// now we initiate - moving the marks to their position

			svg.selectAll("circle").transition().duration(1000)
				.attr("cx",function(d) {return x(+d.GERD);})
				.attr("cy",function(d) {return y(+d.growth);})
				.attr("r",function(d) {return r(Math.sqrt(+d.population));})
	*/			
	
				