!#/bin/bash

if test "$#" -ne 2; then
    echo "Usage: ./run.sh [local_volume_dir] [local_port]"
    exit 1
fi

echo "Running mongo on port ${2}"
docker run -d \
  --name dangdb \
  -v $1:/data/db \
  -p $2:27017 \
  -e MONGO_INITDB_ROOT_USERNAME="dang" \
  -e MONGO_INITDB_ROOT_PASSWORD="dang" \
  mongo:3.4.2

echo "$(docker logs dangdb)"
