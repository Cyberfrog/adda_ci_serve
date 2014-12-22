git rev-parse head > prev_head
git pull
npm install
mkdir tests/data
node scripts/initialize_db.js tests/data/adda.db 
sqlite3 tests/data/adda.db < scripts/fill_sample_data.sql 
cp tests/data/adda.db tests/data/adda.db.backup
node run_tests.js
rm -rf tests/data/
echo "done"
 