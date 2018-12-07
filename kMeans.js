var ratio = window.devicePixelRatio || 1,
    width = 960 * ratio,
    height = 480 * ratio,
    n = 0,
    vertices = [],
    hcl = d3.hcl(Date.now() % 360, 27, 83),
    voronoi = new Voronoi(vertices, width, height);

var test = [[8,1],[7,1],[6,1], [5,1], [4,1], [3,1], [2,1]];

//var test = [[3,1], [2,1]];

console.log(merge_sort(test));


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

d3.timer(update);

function update() {
  for (var i = 0; i < n; i++) {
    context.fillRect(vertices[i][0], vertices[i][1], 5, 5)
  }
  if (n != 0) {
    make_voronoi(vertices);
  }
}

function make_voronoi(vertices) {
  voronoi.reset();
  voronoi.compute_voronoi(vertices);
}

function draw_voronoi() {
  continue
}

function add_point(x, y) {
  vertices[n] = [x+ Math.random() - .5, y + Math.random() - .5];
  n++;

  console.log(vertices[n-1])
}