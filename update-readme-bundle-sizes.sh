# VANILLA
VANILLA_FILE="./vanillajs/bundle.js"
VANILLA_SIZE="$(du -cbsh $VANILLA_FILE | grep total | awk '{print $1}')"
sed -i "s/.*Vanilla JS Bundle size:.*/- Vanilla JS Bundle size: $VANILLA_SIZE/g" ./README.md

# SVELTE
SVELTE_FILE="./svelte-app/public/*.js"
SVELTE_SIZE="$(du -cbsh $SVELTE_FILE | grep total | awk '{print $1}')"
sed -i "s/.*Svelte Bundle size:.*/- Svelte Bundle size: $SVELTE_SIZE/g" ./README.md

# REACT
REACT_FILES='./react-app/build/static/js/*.js'
REACT_SIZE="$(du -cbsh $REACT_FILES | grep total | awk '{print $1}')"
sed -i "s/.*React Bundle size:.*/- React Bundle size: $REACT_SIZE/g" ./README.md

# VUE
VUE_FILES='./vue/dist/js/*.js'
VUE_SIZE="$(du -cbsh $VUE_FILES | grep total | awk '{print $1}')"
sed -i "s/.*Vue Bundle size:.*/- Vue Bundle size: $VUE_SIZE/g" ./README.md