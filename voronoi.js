// I need a  doubly connected edge list
// I need a balanced binary search tree

function Voronoi(sites, width, height) 
{
	this.sites = sites; // 

	this.edge_list = new DCEL();

	this.width = width;
	this.height = height;
}

// Takes left and right end point of vertex array
// return reference to 
/*
	The goal is figure out if I want to merge a copy of a voronoi or 


*/
Voronoi.prototype.compute_voronoi = function(sites) 
{
	var length = sites.length;
	console.log(length);
	console.log(merge_sort(sites));
	if (sites.length == 1) {
		return this.base_case(sites);
	}
	l_array = sites.slice(0, Math.floor(length / 2));
	r_array = sites.slice(Math.floor(length / 2), length);
	l_voronoi = this.compute_voronoi(l_array);
	r_voronoi = this.compute_voronoi(r_array);
	return this.voronoi_merge(l_voronoi, l_array, r_voronoi, r_array);
};

Voronoi.prototype.voronoi_merge = function(l_voronoi, l_array, 
											r_voronoi, r_array) 
{
	return;
};

// can eithe
Voronoi.prototype.base_case = function(sites)
{
	var new_DCEL = new DCEL();
	new_DCEL.create_vertex(sites[0]);
	console.log(new_DCEL.vertices[0].point[0]);
	return new_DCEL;
};

Voronoi.prototype.convex_hull = function(point_set) {
	if (point_set.length == 1) {
		return point_set;
	}
	else if (point_set.length == 2) {

	}
};

Voronoi.prototype.reset = function() 
{
	this.edge_list.recycle();
};

// Computes the perpendicular bisector of the line segment v_1v_2
// returns list [slope, intercept]
// m is slope of v_1v_2, m_bi is slope of bisector
Voronoi.prototype.perp_bisect = function(v_1, v_2) 
{
	var m = (v_2[1]-v_1[1])/(v_2[0]-v_1[0]);
	var m_bi = -1/m;
};

////////////////DCEL////////////////
// The client is who will handle the nuances of this.
// I just need to facilitate its use however it needs to be used
// State DCEL invariants
// Perhaps a better solutoin would be to ONLY provide infrastructure
// for future use. I can finish this tonight, and I think that I should 
function DCEL() 
{
	// only have edge and use that???
	// pros:
	// 		 - easy removal and adding
	// 		 - easy traversal
	this.edges = [];
  	this.vertices = [];
 	this.faces = [];

 	this.recyled_edges = [];
 	this.recyled_vertices = [];
 	this.recyled_faces = [];
}

// p_l: origin of left faced half_edge
// p_r: origin of right faced half_edge
DCEL.prototype.create_edge = function(v_l, v_r)
{
	var new_edge = this.recyled_edges.pop();
	/*  Assumes half edges will be removed in pairs */
	if (new_edge == undefined) {
		new_edge = new edge();
	}
	new_edge.left.set_origin(v_l);
	new_edge.right.set_origin(v_r);
	this.edges.push(new_edge);

	return new_edge;
};

DCEL.prototype.remove_edge = function(edge) 
{
	left = edge.get_left();
	right = edge.get_right();

	if (left == left.get_face().get_edge()) {
		left.get_face().set_face();
	}
};

DCEL.prototype.remove_half_edge = function(half_edge) 
{

};

DCEL.prototype.create_vertex = function(vertex) 
{
	var new_vertex = this.recyled_vertices.pop();
	if (new_vertex == undefined) {
		new_vertex = new Vertex(vertex);
	}
	new_vertex.set_coordinates(vertex);
	this.vertices.push(new_vertex);
	return new_vertex;
};

DCEL.prototype.remove_vertex = function() 
{

};

DCEL.prototype.recycle = function() 
{
	for (var i = 0; i < this.edges.length; i++) {
		this.recyled_edges[i] = edges.pop();
		this.recyled_edges[i].clear();
	}
	for (var i = 0; i < this.vertices.length; i++) {
		this.recyled_vertices[i] = vertices.pop();
		this.recyled_vertices[i].clear();
	}
	for (var i = 0; i < this.faces.length; i++) {
		this.recyled_faces[i] = faces.pop();
		this.recyled_faces[i].clear();
	}
};

///////////////////
/* EDGES METHODS */
///////////////////

Edge = function() 
{
	left = null;
	v_l = null;

	right = null;
	v_r = null;
};

Edge.prototype.set_half_edges = function(v_l, v_r) 
{

};

Edge.prototype.get_left = function() 
{

};

Edge.prototype.get_right = function() 
{

};

Edge.prototype.clear = function() 
{

};

///////////////////////
/* HALF EDGE METHODS */
///////////////////////

Half_Edge = function() 
{
  this.twin = null;
  this.next_edge = null;
  this.prev_edge = null;
  this.origin = null;
  this._face = null;
};

Half_Edge.prototype.set_twin = function(twin) 
{
	this.twin = twin;
};

Half_Edge.prototype.get_twin = function() 
{
	return this.twin;
};

Half_Edge.prototype.set_next_edge = function(next_edge) 
{
	this.next_edge = next_edge;
};

Half_Edge.prototype.get_next_edge = function() 
{
	return this.next_edge;
};

Half_Edge.prototype.set_prev_edge = function(next_edge) 
{
	this.prev_edge = prev_edge;
};

Half_Edge.prototype.get_prev_edge = function() 
{
	return this.prev_edge;
};

Half_Edge.prototype.set_origin = function(origin) 
{
	this.origin = orogin;
};

Half_Edge.prototype.get_origin = function() 
{
	return this.origin;
};

Half_Edge.prototype.set_face = function(_face) 
{
	this._face = face;
};

Half_Edge.prototype.get_face = function() 
{
	return this._face;
};

Half_Edge.prototype.clear = function() 
{
  this.twin = null;
  this.next_edge = null;
  this.prev_edge = null;
  this.origin = null;
  this._face = null;
};

////////////////////
/* VERTEX METHODS */
////////////////////

Vertex = function() 
{
	this.point = []; 
	this.half_edge = null;
};

Vertex.prototype.set_coordinates = function(vertex) 
{
	this.point = vertex;
};

Vertex.prototype.add_root_edge = function(half_edge) 
{
	this.half_edge = half_edge;
};

Vertex.prototype.clear = function() 
{
	this.point.length = 0;
};

//////////////////
/* FACE METHODS */
//////////////////
Face = function() 
{
	this.edge = null;
};

Face.prototype.set_edge = function(edge) 
{
	this.edge = edge;
};

Face.prototype.get_edge = function() 
{
	return this.edge;
};

Face.prototype.clear = function() 
{
	this.edge = null;
};

/////////////////////
/* GENERAL METHODS */
/////////////////////

merge_sort = function(array) 
{
	//console.log(array);
	var length = Math.floor(array.length);
	if (length == 1) {
		return array;
	}

	var l_array = merge_sort(array.slice(0,length/2));
	var r_array = merge_sort(array.slice(length/2, length));
	return merge(l_array, r_array);	
}

merge = function(l_array, r_array) 
{
	var i = 0,
		j = 0,
		result = [];

	while (i != l_array.length && j != r_array.length) {
		if (l_array[i][0] <= r_array[j][0]) {
			result.push(l_array[i]);
			i++
		}
		else {
			result.push(r_array[j]);
			j++;
		}
	}
	if (i != l_array.length) {
		result = result.concat(l_array.slice(i, l_array.length));
	}
	if (j != r_array.length) {
		result = result.concat(r_array.slice(j, r_array.length));
	}
	return result;
}