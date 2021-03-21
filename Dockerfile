FROM adoptopenjdk:11-jre-hotspot
#TODO: Not sure what this app directory is for, or if it is needed. Check and maybe remove if not needed.
RUN mkdir /opt/app

COPY target/uberjar/mymud_dot_io.jar /mymud_dot_io/app.jar

EXPOSE 3000
EXPOSE 7000

ENTRYPOINT ["java"]
CMD ["-Dconf=/mmdata/config.edn", "-jar" , "/mymud_dot_io/app.jar"]

#COMMANDS FOR BUILDING, DEPLOYING, AND RUNNING mymud_dot_io

#locally build and deploy
#docker build -t mymud_dot_io .
#docker run -it -v "$(pwd)"/mmdata:/mmdata -v "$(pwd)"/log:/log -p 3000:3000 -p 7000:7000 --rm --name mymud_dot_io mymud_dot_io

#remotely build and deploy
#lein uberjar
#commit everything
#git tag v0.0.1 -a -m "Initial commit. Nothing works yet."
#git push origin --tags

#Pulling the latest version off Docker Hub
#Remember to create 'log' and 'mmdata' directory. 'mmdata' needs a 'config.edn' based off 'example-config.edn'
#docker pull tgenedavis/mymud_dot_io
#docker run -it -v "$(pwd)"/mmdata:/mmdata -v "$(pwd)"/log:/log -p 3000:3000 -p 7000:7000 --rm --name mymud_dot_io tgenedavis/mymud_dot_io

#Shutdown with command 'lein repl :connect localhost:7000' followed by '(System/exit 0)'