#!/bin/bash

# Switch to gh-pages branch
git checkout gh-pages

# Pull the latest changes from the remote repository
git pull origin gh-pages

# Merge the latest changes from the main branch
git merge main

# Minify CSS and JavaScript files
# Ensure you have cssnano and terser installed globally, or you can use npx for local execution

echo "Minifying CSS and JavaScript files..."

# Minify CSS
npx cssnano css/global_styles.css css/global_styles.min.css

# Minify JavaScript
npx terser js/script.js -o js/script.min.js

# Get the current version from a version.txt file (or create it if it doesn't exist)
VERSION_FILE="version.txt"

if [ ! -f $VERSION_FILE ]; then
    echo "1.0" > $VERSION_FILE
fi

# Read the current version number
VERSION=$(cat $VERSION_FILE)

# Split version into major and minor parts
MAJOR=$(echo $VERSION | cut -d. -f1)
MINOR=$(echo $VERSION | cut -d. -f2)

# Increment the minor version number
NEW_MINOR=$((MINOR + 1))
NEW_VERSION="$MAJOR.$NEW_MINOR"

# Update version.txt with the new version number
echo $NEW_VERSION > $VERSION_FILE

# Add all files (including version.txt and minified files)
git add .

# Commit the changes with the version number
git commit -m "Website Deployed (Ver.$NEW_VERSION)"

# Push the changes to the gh-pages branch
git push origin gh-pages

# Switch back to the main branch
git checkout main

echo "Website deployed with version $NEW_VERSION"
