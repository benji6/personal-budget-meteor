Template.view_performance.rendered = () => {
  const rawData = Transactions.find({}, {sort: {date: -1}}).fetch();

  const data = d3.nest()
   .key(({date}) => date)
   .rollup((d) => d3.sum(d, ({amount}) => amount)).entries(rawData);

  const margin = {top: 20, right: 30, bottom: 30, left: 40};
  const width = window.innerWidth * 0.9 - margin.left - margin.right;
  const height = window.innerHeight * 0.67 - margin.top - margin.bottom;
  const barWidth = width / data.length;

  const x = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.1);

  const y = d3.scale.linear()
    .range([height, 0]);

  const xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  const yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  const chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  x.domain(data.map(({key}) => key));
  y.domain([0, d3.max(data, ({values}) => values)]);

  chart.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

  chart.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  chart.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", ({key}) => x(key))
    .attr("y", ({values}) => y(values))
    .attr("height", ({values}) => height - y(values))
    .attr("width", x.rangeBand());
};
