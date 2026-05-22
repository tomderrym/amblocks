import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTabBar, IonTabButton } from "../../ionic-replica";
import { IoCalendarOutline, IoMapOutline, IoPersonCircleOutline } from "react-icons/io5";
import { useState } from "react";
function TabBarShowcase() {
  const [selected, setSelected] = useState("schedule");
  return <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Tabs</IonCardSubtitle>
          <IonCardTitle>Bottom Tab Bar</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Tabs are a top-level navigation component to implement a tab-based navigation.</p>
        </IonCardContent>
      </IonCard>

      <div className="mx-4 my-8 relative rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)] h-[400px] flex flex-col bg-[#F2F2F7] dark:bg-black">
        <div className="flex-1 overflow-y-auto w-full flex items-center justify-center">
          <div className="text-gray-500 font-medium">Selected: {selected}</div>
        </div>
        
        <IonTabBar>
          <IonTabButton selected={selected === "schedule"} onClick={() => setSelected("schedule")}>
            <IoCalendarOutline className={`w-6 h-6 mb-1 ${selected === "schedule" ? "text-[#3880FF]" : "text-[#8e8e93]"}`} />
            <span className="text-[10px] font-medium tracking-wide">Schedule</span>
          </IonTabButton>
          
          <IonTabButton selected={selected === "map"} onClick={() => setSelected("map")}>
            <IoMapOutline className={`w-6 h-6 mb-1 ${selected === "map" ? "text-[#3880FF]" : "text-[#8e8e93]"}`} />
            <span className="text-[10px] font-medium tracking-wide">Map</span>
          </IonTabButton>
          
          <IonTabButton selected={selected === "about"} onClick={() => setSelected("about")}>
            <IoPersonCircleOutline className={`w-6 h-6 mb-1 ${selected === "about" ? "text-[#3880FF]" : "text-[#8e8e93]"}`} />
            <span className="text-[10px] font-medium tracking-wide">About</span>
          </IonTabButton>
        </IonTabBar>
      </div>
    </>;
}
export {
  TabBarShowcase as default
};
