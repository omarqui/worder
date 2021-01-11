export const CHANGE_TAB_SELECTED = "CHANGE_TAB_SELECTED";

export interface IMainTabState {
    tabSelected: number
}

interface IChangeTabSelectedAction {
    type: typeof CHANGE_TAB_SELECTED,
    newTabIndex: number
}

export type IMainTabActions = IChangeTabSelectedAction;
