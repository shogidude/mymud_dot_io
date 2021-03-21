# mymud_dot_io
A modern SaaS Multi-User Dungeon (MUD) written in  Clojure and deployed as a Docker container.

Very EARLY stages of development. Keep checking back.

Docker containers are at https://hub.docker.com/r/tgenedavis/mymud_dot_io. Releases tagged 'latest' are developer builds, and may not be stable. Specify a version you want to build, rather than the 'latest' unless you are okay with potentially unstable cutting edge builds.

Create 'log' and 'mmdata' directory in the directory you intend to run the Docker container from. 'mmdata' needs a 'config.edn' based off 'example-config.edn'.

If you have Docker desktop installed, 

`docker pull tgenedavis/mymud_dot_io`<br/>

`docker run -it -v "$(pwd)"/mmdata:/mmdata -v "$(pwd)"/log:/log -p 3000:3000 -p 7000:7000 --rm --name mymud_dot_io tgenedavis/mymud_dot_io`

Then to shutdown the server.

`lein repl :connect localhost:7000`<br/>

`(System/exit 0)`
