echo -e "\e[34mBuilding image...\e[0m"
docker build -t cocktails-react:0.3.0 .
echo -e "\e[34mStopping current container(if it exists)...\e[0m"
docker stop cocktails-react-app
echo -e "\e[34mRemoving current container(if it exists)...\e[0m"
docker rm cocktails-react-app
echo -e "\e[34mRunning a new container...\e[0m"
docker run -d -p 3000:3000 --name cocktails-react-app cocktails-react:0.3.0