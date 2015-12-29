(ns ofws.core
  (:require ))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(def installer-url-def "https://dl.openfin.co/services/download?fileName=OpenfinPOC&config=https://demoappdirectory.openf.in/desktop/config/apps/OpenFin/HelloOpenFin/app.json")


(def base "https://dl.openfin.co/services/download?")

(def installer-map {:file-name ["fileName="]
                    :config ["config="]})

(defn update-all
  "given 2 maps and an operation perform the updating"
  [base-map action val-map]
  (reduce (fn
            [prev curr]
            (let [idx (get curr 0)
                  val (get curr 1)]
              (update-in prev  [idx] action val)))
          base-map
          val-map))


(defn combine-as-url
  "given a map of key -> vec reduce on the vecs and combine
  with an & to create a url query string"
  [val-map]
  (reduce (fn [prev curr]
            (str prev
                 (reduce
                  (fn [prev curr]
                    (str prev curr))  "" (get curr 1))
                 "&"))
          ""
          val-map))


(defn butlast-str
  "return all but the last character in a string"
  [the-string]
  (subs the-string 0 (dec (count the-string))))


(defn main
  "entry point and wireup"
  []
  (let [name-box (js/document.getElementById "name-box")
        dest-box (js/document.getElementById "dest-box")
        submit (js/document.getElementById "submit")
        link (js/document.getElementById "link")
        text (js/document.getElementById "text")]
    
    (.addEventListener
     submit
     "click"
     #(let [link-text (-> {:file-name name-box.value
                           :config dest-box.value}
                          ((partial update-all installer-map conj))
                          combine-as-url
                          butlast-str
                          ((partial str base)))]
        (set! (.-innerHTML link) link-text)
        (set! (.-href link) link-text)
        (set! (.-innerHTML text) link-text))
     false)))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(main)
