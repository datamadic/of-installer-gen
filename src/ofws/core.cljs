(ns ofws.core
  (:require ))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(def installer-url-def "https://dl.openfin.co/services/download?fileName=OpenfinPOC&config=https://demoappdirectory.openf.in/desktop/config/apps/OpenFin/HelloOpenFin/app.json")

(def installer-url "https://dl.openfin.co/services/download?fileName=$0&config=$1")

(def hof-config "https://demoappdirectory.openf.in/desktop/config/apps/OpenFin/HelloOpenFin/app.json")

(def installer-map {:base "https://dl.openfin.co/services/download?fileName="
                    :file-name "demo"
                    :config hof-config})

(defn main
  "entry point and wireup"
  []
  (let [name-box (js/document.getElementById "name-box")
        dest-box (js/document.getElementById "dest-box")
        submit (js/document.getElementById "submit")
        link (js/document.getElementById "link")]
    (println  name-box.id)
    (.addEventListener submit
                       "click"
                       #(set! (.-innerHTML link)
                              (str (:base installer-map)
                               name-box.value
                               "&config="
                                   dest-box.value))
                       false)))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(main)
