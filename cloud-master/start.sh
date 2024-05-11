#!/bin/sh

if [ $var -eq 12 ]; then
    echo "This is a numeric comparison if example"
fi

if [ "$var" = "12" ]; then
    echo "This is a string if comparison example"
fi

if [[ "$var" = *12* ]]; then
    echo "This is a string regular expression if comparison example"
fi