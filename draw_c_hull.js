var ratio = window.devicePixelRatio || 1,
    width = 960 * ratio,
    height = 480 * ratio,
    n = 0,
    vertices = [],
    hcl = d3.hcl(Date.now() % 360, 27, 83),
    voronoi = new Voronoi(vertices, width, height),
    hull = [];

var canvas = d3.select("#graph").append("canvas")
    .attr("width", width)
    .attr("height", height)
    .style("width", width / ratio + "px")
    .style("height", height / ratio + "px")
    .on("click", function() {
      var mouse = d3.mouse(this);
      add_point(mouse[0] * ratio, mouse[1] * ratio);
      update();
    });

var context = canvas.node().getContext("2d");
context.fillStyle = "#000";
context.lineWidth = .5 * ratio;
context.strokeStyle = "#000";

//d3.timer(update);

function update() 
{
  context.clearRect(0, 0, width, height);
  for (var i = 0; i < n; i++) {
    context.fillRect(vertices[i][0], vertices[i][1], 5, 5)
  }
  if (n != 0) {
    hull = convex_hull(vertices);
    console.log(hull);
    draw_hull();
  }
}

function draw_hull() 
{
  context.beginPath();
  context.moveTo(hull[0][0], hull[0][1]);
  for (var i = 0; i < hull.length; i++) {
    context.lineTo(hull[i][0], hull[i][1]);
  }
  context.lineTo(hull[0][0], hull[0][1]);
  context.stroke();
}

function add_point(x, y) 
{
  vertices[n] = [x+ Math.random() - .5, y + Math.random() - .5];
  n++;
}
