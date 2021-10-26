var ratio = window.devicePixelRatio || 1,
    width = 960 * ratio,
    height = 480 * ratio,
    n = 0,
    vertices = [],
    hcl = d3.hcl(Date.now() % 360, 27, 83);

var canvas = d3.select("#graph").append("canvas")
    .attr("width", width)
    .attr("height", height)
    .style("width", width / ratio + "px")
    .style("height", height / ratio + "px")
    .on("click", function() {
      var mouse = d3.mouse(this);
      add_point(mouse[0] * ratio, mouse[1] * ratio);
    });

var context = canvas.node().getContext("2d");
context.fillStyle = "#000";
context.lineWidth = .5 * ratio;
context.strokeStyle = "#fff";

d3.timer(redraw);

function redraw() {
  for (var i = 0; i < n; i++) {
    context.fillRect(vertices[i][0], vertices[i][1], 5, 5)
  }
}

function add_point(x, y) {
  vertices[n] = [x+ Math.random() - .5, y + Math.random() - .5];
  n++;

  console.log(vertices[n-1])
}