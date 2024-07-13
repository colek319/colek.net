# Variables
DOCKER_IMAGE_NAME := personal-website
DOCKER_IMAGE_TAG := latest
DOCKER_CONTAINER_NAME := personal-website-prod
DOCKER_PORT := 8080

# Phony targets
.PHONY: all build run stop clean test logs help

# Default target
all: build

# Build the Docker image
build:
	docker build -t $(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_TAG) .

# Run the Docker container
run:
	docker run -d --name $(DOCKER_CONTAINER_NAME) -p $(DOCKER_PORT):8080 $(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_TAG)

# Stop and remove the Docker container
stop:
	docker stop $(DOCKER_CONTAINER_NAME) || true
	docker rm $(DOCKER_CONTAINER_NAME) || true

# Remove the Docker image
clean: stop
	docker rmi $(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_TAG) || true

# Run tests in a temporary container
test:
	docker build --target test-stage -t $(DOCKER_IMAGE_NAME):test .
	docker run --rm $(DOCKER_IMAGE_NAME):test go test -v ./...

# View logs of the running container
logs:
	docker logs -f $(DOCKER_CONTAINER_NAME)