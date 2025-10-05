#!/bin/bash

DEV=$(ip route | grep default | awk '{print $5}')


IP=$(ip -4 addr show $DEV | grep -oP '(?<=inet\s)\d+(\.\d+){3}')


if ! docker info 2>/dev/null | grep -q "Swarm: active"; then
    echo "Initializing Docker Swarm on $IP ($DEV)..."
    docker swarm init --advertise-addr $IP
else
    echo "Docker Swarm is already active."
fi
