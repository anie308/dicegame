// import React from 'react'
import { Dialog, DialogPanel } from "@headlessui/react";
import { GoPlus } from "react-icons/go";


type HowToProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function HowTo({ isOpen, setIsOpen }: HowToProps) {
  function close() {
    setIsOpen(false);
  }

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed font-grotesk inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-[40%] rounded-xl p-[60px_40px] bg-[#FFFEFE3B]  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col items-center"
          >
            <div className="flex items-center justify-between w-full">
              <p className="flex-1  flex items-center justify-center mr-[-5%] font-[800] text-white text-[24px]">
                Game Rules and How to Play
              </p>
              <div className="z-5 cursor-pointer" onClick={close}>
              <GoPlus className="rotate-45 text-[35px] text-white" />
              </div>
            </div>
            <div className="text-[18px] mt-[20px] text-white">
              <p>
                Two treasure chests guarded by a Dragon and a Dwarf are waiting
                for two winners. Win the treasure by rolling the dice:
                <ul className="list-disc list-inside text-white mt-[20px]">
                  <li>
                    If you roll dragon eyes (both dice showing “1”), you win the
                    Dragon’s chest.
                  </li>
                  <li>
                    If you roll any doubles except dragon eyes and double sixes
                    (2-2, 3-3, 4-4, 5-5), you get an extra dice roll.
                  </li>
                  <li>
                    If you roll the first highest number among all participants,
                    you will win the Dwarf’s chest. The first double six (6-6)
                    guarantees a win.
                  </li>
                </ul>
                <p className="mt-[20px]">The treasure value in both chests will keep increasing with
                every roll until someone wins the Dragon’s chest by rolling
                dragon eyes. Then, a new round will start.</p>
              </p>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default HowTo;