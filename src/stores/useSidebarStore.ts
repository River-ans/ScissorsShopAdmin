import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false, // 기본적으로 사이드바가 닫혀 있음
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
