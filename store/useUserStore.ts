import { create } from "zustand";

type UserState = {
    isOnBoardingFinished: boolean;
    toggleOnBoarding: () => void;
}

export const useUserStore = create<UserState>((set) => {
    return {
        isOnBoardingFinished: false,
        toggleOnBoarding: () => {
            set((state) => {
                return {
                    ...state,
                    isOnBoardingFinished: !state.isOnBoardingFinished
                }
            })
        }
    }
})