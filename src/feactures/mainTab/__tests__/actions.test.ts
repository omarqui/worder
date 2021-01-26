import { changeTabSelected } from "../actions";
import { CHANGE_TAB_SELECTED, IMainTabActions } from "../types";

describe("MainTab actions", () => {
    it("should create CHANGE_TAB_SELECTED action",()=>{
        const newTabIndex = 1;
        const expectedAction : IMainTabActions = {
            type: CHANGE_TAB_SELECTED,
            newTabIndex
        }
        expect(changeTabSelected(newTabIndex)).toEqual(expectedAction)
    })
})
