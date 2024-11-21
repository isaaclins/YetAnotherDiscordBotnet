# step 1: go to location
cd yetanotherfrontend
# step 2: install dependencies if not existed
if ! command -v neu &> /dev/null
then
    npm install -g @neutralinojs/neu
fi
npm install
# step 3: build the project
npm run dev
