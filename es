#!/bin/bash

#Elasticsearch start and stop bash script
#written by M.Yakhyan(Sassiz)

case "$1" in
    start)
        bash /var/elasticsearch-6.1.2/bin/elasticsearch -d
    ;;
    stop)
        kill -9 `jps | grep -i elastic | awk '{print $1}'`
    ;;
esac
exit 0
