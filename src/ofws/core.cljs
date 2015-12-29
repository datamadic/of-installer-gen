(ns ofws.core
  (:require ))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(def installer-url-def "https://dl.openfin.co/services/download?fileName=OpenfinPOC&config=https://demoappdirectory.openf.in/desktop/config/apps/OpenFin/HelloOpenFin/app.json")

(def installer-url "https://dl.openfin.co/services/download?fileName=$0&config=$1")


(def hof-config "https://demoappdirectory.openf.in/desktop/config/apps/OpenFin/HelloOpenFin/app.json")
(def base "https://dl.openfin.co/services/download?")
(def installer-map {:file-name ["fileName="]
                    :config ["config="]})

(def nv {:file-name "whatEver"
         :config "http://yo.gurt"})

(reduce (fn
          [prev curr]
          (let [idx (get curr 0)
                val (get curr 1)]
            (update-in prev  [idx] conj val)))
        installer-map
        nv )


(defn update-all
  "given 2 maps and an operation perform the updating"
  [base-map val-map action]
  (reduce (fn
            [prev curr]
            (let [idx (get curr 0)
                  val (get curr 1)]
              (update-in prev  [idx] action val)))
          base-map
          val-map))

(def r1 (update-all installer-map nv conj))

(defn combine-as-url
  "given a map of key -> vec reduce on the vecs and combine
  with an & to create a url query string"
  [val-map]
  (reduce (fn
          [prev curr]
          (str prev
               (reduce (fn
                         [prev curr]
                         (str prev curr))  "" (get curr 1))
               "&"))
        ""
        r1))


(reduce (fn
          [prev curr]
          (str prev
               (reduce (fn
                         [prev curr]
                         (str prev curr))  "" (get curr 1))
               "&"))
        ""
        r1)



;; (def install-params [["fileName="] ])


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
