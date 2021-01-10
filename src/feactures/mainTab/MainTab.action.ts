import { CHANGE_TAB_SELECTED, IMainTabActions } from "./MainTab.types";

export function changeTabSelected(newTabIndex:number): IMainTabActions{
    return {
        type: CHANGE_TAB_SELECTED,
        newTabIndex
    }
}