/* Make sure point_set sorted first */
convex_hull = function(point_set) 
{
	var length = point_set.length,
		left_set = undefined,
		right_set = undefined,
		left_hull = undefined,
		right_hull = undefined,
		hull = undefined;

	if (length < 3) {
		point_set = merge_sort(point_set);
		return point_set
	} else if (length == 3) {
		point_set = merge_sort(point_set);
		if (!left_turn(point_set[0], point_set[1], point_set[2])) {
			var temp = point_set[2];
			point_set[2] = point_set[1];
			point_set[1] = temp;
		}
		return point_set;
	}
	var left_set = point_set.slice(0, Math.floor(length / 2));
	var right_set = point_set.slice(Math.floor(length / 2), length);
	var left_hull = convex_hull(left_set);
	var right_hull = convex_hull(right_set);
	var hull = merge_hull(left_hull, right_hull);
	return hull;
}


/* I need to merge differently :/ 
	Invariants:
		a convex hull is always counterclockwise 
		from leftmost element
												*/

merge_hull = function(left_hull, right_hull) 
{
	var l_max = right_extreme(left_hull),
		r_max = right_extreme(right_hull),
		p_min = min_x(left_hull[0], right_hull[0]),
		p_max = max_x(left_hull[l_max], right_hull[r_max]),
		left_l = left_hull.slice(0, l_max),
		left_u = reverse(left_hull.slice(l_max, left_hull.length)),
		right_l = right_hull.slice(0, r_max),
		right_u = reverse(right_hull.slice(r_max, right_hull.length)),
		lower_set = merge(left_l, right_l),
		upper_set = merge(left_u, right_u),
		point_set = merge(lower_set, upper_set),
		lower_hull = [],		
		upper_hull = [],
		hull = [];


	lower_hull.push(p_min);
	upper_hull.push(p_min);
	for (var i = 1; i < point_set.length - 1; i++) {
		if (left_turn(p_min, p_max, point_set[i])) {
			upper_hull.push(point_set[i]);
		}
		else {
			lower_hull.push(point_set[i]);
		}
	}
	lower_hull.push(p_max);
	upper_hull.push(p_max);

	lower_hull = graham_scan(lower_hull);
	lower_hull.pop();
	upper_hull = graham_scan(reverse(upper_hull));
	upper_hull.pop();

	return lower_hull.concat(upper_hull);
}

/*
	Assumes that the point_set is sorted by slope
*/
graham_scan = function(point_set) 
{
	var hull = [];

	for (var i = 0; i < point_set.length; i++) {
		var len = hull.length;
		if (len >= 2) {
			while (!left_turn(hull[len - 2], hull[len - 1], point_set[i])) {
				hull.pop();
				len = len - 1;
				if (len < 2) {
					break;
				}
			}
		}
		hull.push(point_set[i]);
	}

	return hull;
}

/*
	Returns a tuple of two points
	Assumes that the hulls are disjoint
*/
lower_support = function(l_hull, r_hull) 
{
	var l_max = right_extreme(l_hull),
		l_len = l_hull.length,
		r_min = left_extreme(r_hull),
		r_len = r_hull.length,
		line = [];

	var i = l_max,
		j = r_min;

	while (l_hull[i][1] > clockwise(l_hull, i)[1]) {
		i = ((i - 1) + l_len) % l_len;
	}

	while (r_hull[j][1] > c_clockwise(r_hull, j)) {
		j = ((j + 1) + r_len) % r_len;
	}

	line.push(l_hull[i]);
	line.push(r_hull[j]);

	return line;
}

/*
	returns a tuple of two points
	Assumes that the hulls are disjoint
*/
upper_support = function(l_hull, r_hull)
{

}

left_extreme = function(point_set) 
{
	var i = 0,
		length = point_set.length,
		found = 0,
		left,
		right;

	while (!found) {
		found = 1;
		/* Gets index clockwise to i */
		left = ((i - 1) + length) % length;
		/*  Gets index counter clockwise to i */
		right = ((i + 1) + length) % length;

		if (point_set[i][0] > point_set[left][0]
			|| point_set[i][0] > point_set[right][0]) {
			i = i + 1;
			found = 0;
		}
	}
	return i;
}

/*
	NOTE: CHANGE HOW I GET LEFT TO FUNCTION CLOCKWISE
*/
right_extreme = function(point_set) 
{
	var i = 0,
		length = point_set.length,
		found = 0,
		left,
		right;

	while (!found) {
		found = 1;
		/* Gets index clockwise to i */
		left = ((i - 1) + length) % length;
		/*  Gets index counter clockwise to i */
		right = ((i + 1) + length) % length;

		if (point_set[i][0] < point_set[left][0]
			|| point_set[i][0] < point_set[right][0]) {
			i = i + 1;
			found = 0;
		}
	}
	return i;
}

/*
	returns the point in a 
*/
clockwise = function(hull, index) 
{
	var length = hull.length,
		left = ((index - 1) + hull.length) % hull.length;

	return hull[left]
}

c_clockwise = function(hull, index)
{
	var length = hull.length,
		right = ((index + 1) + hull.length) % hull.length;

	return hull[right]
}

min_x = function(p_1, p_2) 
{
	if (p_1[0] <= p_2[0]) {
		return p_1;
	}
	else {
		return p_2;
	}
}

min_y = function(p_1, p_2) 
{
	if (p_1[1] <= p_2[1]) {
		return p_1;
	}
	else {
		return p_2;
	}
}

max_x = function(p_1, p_2) 
{
	if (p_1[0] >= p_2[0]) {
		return p_1;
	}
	else {
		return p_2;
	}
}

max_y = function(p_1, p_2) 
{
	if (p_1[1] >= p_2[1]) {
		return p_1;
	}
	else {
		return p_2;
	}
}