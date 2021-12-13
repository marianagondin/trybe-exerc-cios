mkdir unix_tests
cd unix_tests
touch trybe.txt
cp trybe.txt trybe_backup.txt
mv trybe.txt outro_nome.txt
mkdir backup
mv trybe_backup.txt backup/
mkdir backup2
cd backup
mv trybe_backup ../backup2
cd ..
rmdir backup
mv backup2 backup
pwd
ls -l .
rm -rd backup
clear
cat > skills.txt
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
^D
tail -n 4 skills.txt
rm *.txt