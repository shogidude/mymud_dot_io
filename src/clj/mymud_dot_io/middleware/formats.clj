(ns mymud-dot-io.middleware.formats
  (:require
    [luminus-transit.time :as time]
    [muuntaja.core :as m]
    
    [mymud-dot-io.db.core :as database]))

(def instance
  (m/create
    (-> m/default-options
        (update-in
          [:formats "application/transit+json" :decoder-opts]
          (partial merge time/time-deserialization-handlers))
        (update-in
          [:formats "application/transit+json" :encoder-opts]
          (partial merge time/time-serialization-handlers)))))
