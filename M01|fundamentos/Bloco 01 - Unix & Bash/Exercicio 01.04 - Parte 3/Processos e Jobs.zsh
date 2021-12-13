ps
sleep 30 &
kill 12911
sleep 30
^Z
bg
sleep 300 &
sleep 200
^Z
sleep 100
^Z
jobs
fg %1
^Z
bg %3
jobs
ps | grep sleep
kill 12912
kill 12913
kill 12914
clear