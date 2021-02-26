# SVELTE
SVELTE_FILE="./svelte-app/public/*.js"
SVELTE_SIZE="$(du -ch $SVELTE_FILE | grep total | awk '{print $1}')"

sed -i "s/.*Svelte Bundle size:.*/- Svelte Bundle size: $SVELTE_SIZE/g" ./README.md

# REACT
REACT_FILES='./react-app/build/static/js/*.js'
REACT_SIZE="$(du -ch $REACT_FILES | grep total | awk '{print $1}')"
sed -i "s/.*React Bundle size:.*/- React Bundle size: $REACT_SIZE/g" ./README.md