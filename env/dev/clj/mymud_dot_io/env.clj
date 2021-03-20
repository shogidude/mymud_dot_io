(ns mymud-dot-io.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [mymud-dot-io.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[mymud_dot_io started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[mymud_dot_io has shut down successfully]=-"))
   :middleware wrap-dev})
