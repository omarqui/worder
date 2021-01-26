import { changeTabSelected } from "../actions";
import { mainTabReducer, initialState } from "../reducers";
import { IMainTabActions, IMainTabState } from "../types";

describe("MainTab's reducer", () => {
    it("should return default state when unknow action", () => {
        const unknownAction: IMainTabActions = <IMainTabActions><unknown>{
            type: "",
            newTabIndex: 0
        }
        expect(mainTabReducer(undefined, unknownAction)).toEqual(initialState)
    })

    describe("generate new state", () => {
        const newState: IMainTabState = {
            tabSelected: 1
        }
        it("when previous state is empty", () => {
            expect(mainTabReducer(undefined, changeTabSelected(1))).toEqual(newState)
        })

        const previousState: IMainTabState = {
            tabSelected: 2
        }

        it("when previous state is no empty", () => {
            expect(mainTabReducer(previousState, changeTabSelected(1))).toEqual(newState)
        })
    })
})