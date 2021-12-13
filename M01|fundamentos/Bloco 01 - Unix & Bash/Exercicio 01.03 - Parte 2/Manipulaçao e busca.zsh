cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
cat countries.txt
more countries.txt
/Zambia
grep Brazil countries.txt
grep -i brazil countries.txt
cat > phrases.txt
'Um socó só para vinte socó coçar'
'Três tigres tigrados comem trigo no triagal'
'O rato roeu a roupa do rei de Roma'
'O rei de Roma roxo de raiva roeu o resto'
'Sapo dentro do saco, saco com sapo dentro'
'Sapo fazendo papo, papo cheio de vento'
^D 
grep -v fox phrases.txt
wc -w phrases.txt
wc -l phrases.txt
touch empty.tbt
touch empty.pdf
ls -l
ls -l *txt
ls -l *t?t
man ls
clear