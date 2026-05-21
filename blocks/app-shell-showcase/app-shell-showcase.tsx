import React from 'react';
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonApp, 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonSplitPane,
  IonRouterOutlet,
  IonList,
  IonItem
} from '../../ionic-replica';

export default function AppShellShowcase() {
  return (
    <>
      <div className="mb-4 px-4 text-sm text-gray-500">
        <p>App Shells define the main structural navigation of your application. Here are simulated previews of common App Shell patterns.</p>
      </div>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>1. Tabbed Interface</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4 text-sm">A common mobile pattern using IonTabs and IonTabBar fixed to the bottom.</p>
          <div className="relative w-full h-[400px] border-[8px] border-gray-800 rounded-[32px] overflow-hidden shadow-xl bg-black">
            <IonApp>
              <IonTabs>
                <IonRouterOutlet>
                  <IonPage>
                    <IonHeader>
                      <IonToolbar>
                        <IonTitle>Home Tab</IonTitle>
                      </IonToolbar>
                    </IonHeader>
                    <IonContent className="p-4">
                      <div className="p-4 rounded-xl bg-white/10 m-4 flex flex-col items-center justify-center h-32">
                        <IonIcon icon="<svg viewBox='0 0 512 512'><path d='M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z'/></svg>" className="w-12 h-12 text-blue-500 mb-2" />
                        <IonLabel>Home Content</IonLabel>
                      </div>
                    </IonContent>
                  </IonPage>
                </IonRouterOutlet>
                <IonTabBar>
                  <IonTabButton selected>
                    <IonIcon icon="<svg viewBox='0 0 512 512'><path d='M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z'/></svg>" />
                    <IonLabel>Tab 1</IonLabel>
                  </IonTabButton>
                  <IonTabButton>
                    <IonIcon icon="<svg viewBox='0 0 512 512'><path d='M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z'/></svg>" />
                    <IonLabel>Tab 2</IonLabel>
                  </IonTabButton>
                  <IonTabButton>
                    <IonIcon icon="<svg viewBox='0 0 512 512'><path d='M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z'/></svg>" />
                    <IonLabel>Tab 3</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            </IonApp>
          </div>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>2. Side Menu (Open State)</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4 text-sm">Showing IonMenu with IonRouterOutlet holding the main content.</p>
          <div className="relative w-full h-[400px] border-[8px] border-gray-800 rounded-[32px] overflow-hidden shadow-xl bg-black">
            <IonApp>
              <IonMenu contentId="main" className="translate-x-0">
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent>
                  <IonList>
                    <IonItem button>Inbox</IonItem>
                    <IonItem button>Outbox</IonItem>
                    <IonItem button>Favorites</IonItem>
                    <IonItem button>Archived</IonItem>
                  </IonList>
                </IonContent>
              </IonMenu>
              <IonRouterOutlet className="transform translate-x-[70%] md:translate-x-0 opacity-50 md:opacity-100 pointer-events-none transition-transform pointer-events-none md:pointer-events-auto shadow-2xl">
                <IonPage>
                  <IonHeader>
                    <IonToolbar>
                      <IonButtons slot="start">
                        <IonMenuButton />
                      </IonButtons>
                      <IonTitle>Content</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent className="p-4" color="light">
                    <p className="p-4 bg-white dark:bg-[#1c1c1e] m-4 rounded-xl shadow-sm text-center">
                      Main Content Area
                    </p>
                  </IonContent>
                </IonPage>
              </IonRouterOutlet>
            </IonApp>
          </div>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>3. Split Pane</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4 text-sm">Typically used on tablet/desktop to display menu permanently alongside content.</p>
          <div className="relative w-full h-[400px] border-[8px] border-gray-800 rounded-[32px] overflow-hidden shadow-xl bg-black">
            <IonApp>
              <IonSplitPane contentId="split-content">
                <IonMenu contentId="split-content" className="relative w-1/3 md:w-64 max-w-[30%] block translate-x-0 !shadow-none !border-r" disabled={false}>
                  <IonHeader>
                    <IonToolbar>
                      <IonTitle>Navigation</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent>
                    <IonList>
                      <IonItem button color="light">Dashboard</IonItem>
                      <IonItem button>Settings</IonItem>
                      <IonItem button>Profile</IonItem>
                    </IonList>
                  </IonContent>
                </IonMenu>
                
                <IonRouterOutlet className="flex-1 w-full relative">
                  <IonPage>
                    <IonHeader>
                      <IonToolbar>
                        <IonTitle>Dashboard</IonTitle>
                      </IonToolbar>
                    </IonHeader>
                    <IonContent className="p-4" color="light">
                      <div className="p-4 bg-white dark:bg-[#1c1c1E] rounded-xl shadow-sm m-4">
                        <h2 className="text-xl font-bold mb-2">Welcome Back</h2>
                        <p className="text-gray-500">This is the main panel detail view of the split pane.</p>
                      </div>
                    </IonContent>
                  </IonPage>
                </IonRouterOutlet>
              </IonSplitPane>
            </IonApp>
          </div>
        </IonCardContent>
      </IonCard>
    </>
  );
}
