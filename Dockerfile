FROM adoptopenjdk:11-jre-hotspot
#TODO: Not sure what this app directory is for, or if it is needed. Check and maybe remove if not needed.
RUN mkdir /opt/app

COPY target/uberjar/mymud_dot_io.jar /mymud_dot_io/app.jar

EXPOSE 3000
EXPOSE 7000

ENTRYPOINT ["java"]
CMD ["-Dconf=/mmdata/config.edn", "-jar" , "/mymud_dot_io/app.jar"]

#COMMANDS FOR BUILDING, DEPLOYING, AND RUNNING mymud_dot_io

#docker build -t mymud_dot_io .
#docker run -it -v "$(pwd)"/mmdata:/mmdata --name mymud_dot_io -p 3000:3000 -p 7000:7000 --rm --name mymud_dot_io mymud_dot_io

#docker tag local-image:tagname new-repo:tagname
#docker push new-repo:tagname
