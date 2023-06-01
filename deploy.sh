set -e

# build
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
github.com/pox21/alef-form
git init
git checkout -b deploy
git add -A
git commit -m 'deploy'