# 960/2 = 480 480/2=240
# (0,0) = (240,480)

import random
import math

random.seed()
# n: num points
# c: center
# r: radius
def circle_cloud(n,c,r):
    x,y = c
    points = []
    for i in range(n):
        theta = 2*math.pi*random.random()
        s = r*random.uniform(.75, 1.25)
        points.append((x+s*math.cos(theta), y+s*math.sin(theta)))
    return points

def output_file(filename, point_set):
	with open(filename, "w") as f:
		for i in range(len(point_set)):
			f.write(str(point_set[i][0]) + " " + str(point_set[i][1]) + "\n")

def main():
	circle = circle_cloud(700, [480,240], 120)
	sub_circle = circle_cloud(300, [480,240], 120)
	circle.extend(sub_circle)
	output_file("rings.txt", circle)

if __name__ == "__main__":
	main()
