import { IoAddOutline, IoArrowBackOutline, IoHeartOutline, IoSearchOutline } from "react-icons/io5";
import { IonCard, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonFooter } from "../../ionic-replica";
function ToolbarShowcase() {
  return <IonCard className="bg-gray-100 dark:bg-gray-900 border-none shadow-none">
      <div className="p-4 pt-6">
        <h2 className="text-[22px] font-bold text-black dark:text-white mb-2">Toolbar</h2>
        <p className="text-gray-500 mb-6 font-medium">Headers, footers, and titles</p>

        <div className="flex flex-col gap-8">
          {
    /* Default Toolbar */
  }
          <div className="relative overflow-hidden rounded-xl border border-[rgba(0,0,0,0.1)] dark:border-[#38383A] shadow-sm h-32 bg-[#F2F2F7] dark:bg-black flex flex-col">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Default Title</IonTitle>
              </IonToolbar>
            </IonHeader>
            <div className="flex-1" />
          </div>

          {
    /* With Buttons */
  }
          <div className="relative overflow-hidden rounded-xl border border-[rgba(0,0,0,0.1)] dark:border-[#38383A] shadow-sm h-32 bg-[#F2F2F7] dark:bg-black flex flex-col">
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton fill="clear">
                    <IoArrowBackOutline className="w-6 h-6 mr-1" />
                    Back
                  </IonButton>
                </IonButtons>
                <IonTitle>Edit Post</IonTitle>
                <IonButtons slot="end">
                  <IonButton fill="clear" color="primary">
                    Save
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <div className="flex-1" />
          </div>

          {
    /* With Icons */
  }
          <div className="relative overflow-hidden rounded-xl border border-[rgba(0,0,0,0.1)] dark:border-[#38383A] shadow-sm h-32 bg-[#F2F2F7] dark:bg-black flex flex-col justify-between">
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton fill="clear">
                    <IoSearchOutline className="w-6 h-6" />
                  </IonButton>
                </IonButtons>
                <IonTitle>Bookmarks</IonTitle>
                <IonButtons slot="end">
                  <IonButton fill="clear">
                    <IoHeartOutline className="w-6 h-6" />
                  </IonButton>
                  <IonButton fill="clear">
                    <IoAddOutline className="w-6 h-6" />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <div className="flex-1" />
            <IonFooter>
              <IonToolbar>
                <IonTitle>Footer</IonTitle>
              </IonToolbar>
            </IonFooter>
          </div>

        </div>
      </div>
    </IonCard>;
}
export {
  ToolbarShowcase as default
};
