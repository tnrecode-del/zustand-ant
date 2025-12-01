import { persist } from 'zustand/middleware';
import { create } from 'zustand';


interface StoreState {
    isX: boolean;
    squares: string[];
    turnCount: number;
    setIsX: (isX: boolean) => void;
    setSquares: (squares: string[]) => void;
    setTurnCount: (turnCount: number) => void;
    reset: () => void;
}

const initialState = {
    isX: true,
    squares: Array(9).fill(''),
    turnCount: 0,
};

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            ...initialState,
            setIsX: (isX: boolean) => set({ isX }),
            setSquares: (squares: string[]) => set({ squares }),
            setTurnCount: (turnCount: number) => set({ turnCount }),
            reset: () => set({ ...initialState }),
        }),
        {
            name: 'tic-tac-toe-storage', // unique name
        }
    )       
);    