import { useState } from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList } from "../../ionic-replica";
import { Search } from "lucide-react";
function InputShowcase() {
  const [variant, setVariant] = useState("default");
  const [labelPlacement, setLabelPlacement] = useState("stacked");
  const [showIcon, setShowIcon] = useState(false);
  const [clearBtn, setClearBtn] = useState(false);
  const [text, setText] = useState("");
  return <div className="w-full">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Configurable Input</IonCardTitle>
          <IonCardSubtitle>Single interactive component</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-6 text-sm text-gray-500">
            Use the controls below to mutate the properties of this single input component.
          </p>
          
          <div className="p-6 bg-[#F2F2F7] dark:bg-[#000000] rounded-2xl mb-8 flex justify-center border border-gray-200 dark:border-gray-800">
             <div className="w-full max-w-sm">
                <IonItem lines={variant === "bordered" || variant === "none" ? "none" : "inset"}>
                  <IonInput
    value={text}
    onChange={(e) => setText(e.target.value)}
    label="Username"
    placeholder="Enter your username"
    variant={variant}
    labelPlacement={labelPlacement}
    leftIcon={showIcon ? <Search className="w-5 h-5" /> : void 0}
    clearButtonMode={clearBtn ? "always" : "never"}
    onClear={() => setText("")}
  />
                </IonItem>
             </div>
          </div>

          <IonList className="bg-transparent">
             <IonItem>
                <div className="w-full py-2">
                   <div className="text-sm font-semibold mb-2">Variant</div>
                   <div className="flex gap-2">
                      {["default", "bordered", "none"].map((v) => <button key={v} onClick={() => setVariant(v)} className={`px-4 py-1.5 rounded-full text-xs font-medium border ${variant === v ? "bg-blue-500 text-white border-blue-500" : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300"}`}>
                            {v}
                         </button>)}
                   </div>
                </div>
             </IonItem>
             <IonItem>
                <div className="w-full py-2">
                   <div className="text-sm font-semibold mb-2">Label Placement</div>
                   <div className="flex gap-2">
                      {["stacked", "floating", "start"].map((l) => <button key={l} onClick={() => setLabelPlacement(l)} className={`px-4 py-1.5 rounded-full text-xs font-medium border ${labelPlacement === l ? "bg-blue-500 text-white border-blue-500" : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300"}`}>
                            {l}
                         </button>)}
                   </div>
                </div>
             </IonItem>
             <IonItem lines="none">
                <div className="w-full py-2 flex items-center justify-between gap-4">
                   <div className="flex-1">
                     <div className="text-sm font-semibold mb-2">Features</div>
                     <div className="flex gap-2">
                        <button onClick={() => setShowIcon(!showIcon)} className={`px-4 py-1.5 rounded-full text-xs font-medium border ${showIcon ? "bg-blue-500 text-white border-blue-500" : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300"}`}>
                           Left Icon
                        </button>
                        <button onClick={() => setClearBtn(!clearBtn)} className={`px-4 py-1.5 rounded-full text-xs font-medium border ${clearBtn ? "bg-blue-500 text-white border-blue-500" : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300"}`}>
                           Clear Button
                        </button>
                     </div>
                   </div>
                </div>
             </IonItem>
          </IonList>

        </IonCardContent>
      </IonCard>
    </div>;
}
export {
  InputShowcase as default
};
