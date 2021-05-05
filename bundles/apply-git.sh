#!/bin/bash

for DIR in $(ls);
do
    echo "$DIR"
    if [ -e "$DIR/.git" ]
    then
            echo "updating location: " "$DIR";
            cd "$DIR" || exit
            # your commands here...
            git add -u 
            git add .
            git commit -m 'Updated requires for the new core directory.'

            cd ..
    fi
done