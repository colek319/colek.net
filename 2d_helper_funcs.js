/////////////////////
/* GENERAL METHODS */
/////////////////////

merge_sort = function(array) 
{
	var length = array.length;
	if (length == 1) {
		return array;
	}
	var l_array = merge_sort(array.slice(0, Math.floor(length/2)));
	var r_array = merge_sort(array.slice(Math.floor(length/2), length));
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
		result = result.concat(l_array.slice(i));
	}
	if (j != r_array.length) {
		result = result.concat(r_array.slice(j));
	}
	return result;
}

/* returns true if area is positive, false if
 	are is negative. This can also check if 
 	points are collinear. This is when area is
 	0 										  	*/
left_turn = function(p_1, p_2, p_3) {
	var A = p_1[0] * (p_2[1] - p_3[1]);
	var B = p_2[0] * (p_1[1] - p_3[1]);
	var C = p_3[0] * (p_1[1] - p_2[1]);

	var area = .5 * (A - B + C);

	if (area >= 0) {
		return true;
	}
	else {
		return false;
	}
}

reverse = function(list) {
	var length = list.length,
		temp;
	for (var i = 0; i < length / 2; i++) {
		temp = list[i];
		list[i] = list[length - 1 - i];
		list[length - 1 - i] = temp;
	}
	return list;
}