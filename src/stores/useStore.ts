import {create} from 'zustand';


interface StoreState {
    isX: boolean;
    squares: string[];
    turnCount: number;
    setIsX: (isX: boolean) => void;
    setSquares: (squares: string[]) => void;
    setTurnCount: (turnCount: number) => void;

}

export const useStore = create<StoreState>((set) => ({
    turnCount: 1,
    setTurnCount: (turnCount: number) => set({ turnCount }),
    isX: true,
    setIsX: (isX: boolean) => set({ isX }),
    squares: Array(9).fill(''),
    setSquares: (squares: string[]) => set({ squares }),
}));    