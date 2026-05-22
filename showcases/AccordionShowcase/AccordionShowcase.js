import { IoPersonCircleOutline, IoSettingsOutline, IoInformationCircleOutline } from "react-icons/io5";
import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel } from "../../ionic-replica";
function AccordionShowcase() {
  return <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Accordion</IonCardSubtitle>
          <IonCardTitle>Collapsible Content</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Accordions provide collapsible sections of content to reduce screen clutter.
        </IonCardContent>
      </IonCard>

      <div className="mx-4 my-4 rounded-xl overflow-hidden shadow-sm border border-[rgba(0,0,0,0.04)] dark:border-[#38383A]">
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" lines="none">
              <IoPersonCircleOutline className="w-6 h-6 mr-4 text-[#3880FF]" />
              <IonLabel>Personal Info</IonLabel>
            </IonItem>
            <div slot="content" className="text-[15px] leading-relaxed text-[#48484A] dark:text-[#EBEBF5]">
              This is the personal information section. It contains details about the user's profile and account settings. You can place any complex form or list inside here.
            </div>
          </IonAccordion>

          <IonAccordion value="second">
            <IonItem slot="header" lines="none">
              <IoSettingsOutline className="w-6 h-6 mr-4 text-[#2dd36f]" />
              <IonLabel>Preferences</IonLabel>
            </IonItem>
            <div slot="content" className="text-[15px] leading-relaxed text-[#48484A] dark:text-[#EBEBF5]">
              Adjust your notification settings, display preferences, and accessibility options in this section.
            </div>
          </IonAccordion>

          <IonAccordion value="third">
            <IonItem slot="header" lines="none">
              <IoInformationCircleOutline className="w-6 h-6 mr-4 text-[#eb445a]" />
              <IonLabel>About</IonLabel>
            </IonItem>
            <div slot="content" className="text-[15px] leading-relaxed text-[#48484A] dark:text-[#EBEBF5]">
              Version 1.0.0. Built with React and Tailwind CSS simulating the native iOS experience.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </div>
    </>;
}
export {
  AccordionShowcase as default
};
