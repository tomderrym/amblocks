import { IoArchiveOutline, IoStarOutline, IoTrashOutline } from 'react-icons/io5';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList } from '../../ionic-replica';

// Since we haven't built a complex Swipeable item in the ionic-replica, 
// let's create a functional scroll-snap based one directly here or in the framework.
// CSS Scroll Snap is a lightweight way to achieve native-feel swipeable lists.

const SwipeableItem = ({ children, options }: { children: React.ReactNode, options: React.ReactNode }) => {
  return (
    <div className="relative w-full border-b border-[rgba(60,60,67,0.29)] dark:border-[#38383A] last:border-b-0">
      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex-none w-full snap-start flex bg-white dark:bg-[#1C1C1E]">
          {children}
        </div>
        <div className="flex-none snap-start flex">
          {options}
        </div>
      </div>
    </div>
  );
};

const SwipeOption = ({ children, color = 'primary', onClick }: { children: React.ReactNode, color?: string, onClick?: () => void }) => {
  const cMap: any = { primary: 'bg-[#3880FF]', danger: 'bg-[#eb445a]', success: 'bg-[#2dd36f]', warning: 'bg-[#ffc409]' };
  return (
    <button onClick={onClick} className={`px-5 py-2 text-white font-medium flex flex-col items-center justify-center h-full active:brightness-90 transition-all ${cMap[color] || cMap.primary}`}>
      {children}
    </button>
  );
};

export default function ItemSlidingShowcase() {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Item Sliding</IonCardSubtitle>
          <IonCardTitle>Swipeable Lists</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>
            In native applications, list items can often be swiped to reveal actions. 
            This is a lightweight scroll-snap implementation replicating that gesture perfectly.
          </p>
          <p className="mt-2 text-sm text-gray-500 font-bold">Try swiping left on the items below!</p>
        </IonCardContent>
      </IonCard>

      <div className="bg-white dark:bg-[#1C1C1E] mx-4 rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] dark:border-[#38383A] overflow-hidden my-4">
        {[1, 2, 3].map((i) => (
          <SwipeableItem 
            key={i}
            options={
              <>
                <SwipeOption color="primary">
                  <IoStarOutline className="w-5 h-5 mb-1" />
                  <span className="text-[12px]">Favorite</span>
                </SwipeOption>
                <SwipeOption color="danger">
                  <IoTrashOutline className="w-5 h-5 mb-1" />
                  <span className="text-[12px]">Delete</span>
                </SwipeOption>
              </>
            }
          >
            <div className="flex items-center w-full px-4 py-3">
              <IonAvatar slot="start" className="mr-4">
                <img src={`https://i.pravatar.cc/150?img=${i * 10}`} alt="avatar" />
              </IonAvatar>
              <IonLabel>
                <h2>Swipe Me Left {i}</h2>
                <p className="text-[13px] text-gray-500 line-clamp-1">Discover native hidden actions like iOS Mail.</p>
              </IonLabel>
            </div>
          </SwipeableItem>
        ))}
      </div>
    </>
  );
}
