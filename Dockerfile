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
#docker run -it -v "$(pwd)"/mmdata:/mmdata -v "$(pwd)"/log:/log --name mymud_dot_io -p 3000:3000 -p 7000:7000 --rm --name mymud_dot_io mymud_dot_io

#remotely build and deploy
#lein uberjar
#commit everything
#git tag v0.0.1 -a -m "Initial commit. Nothing works yet."
#git push origin --tags