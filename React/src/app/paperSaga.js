import { call, put, select, takeLatest } from "redux-saga/effects"
import {
    selectPaper,
    getPapers,
    getPapersFail,
    load,
    load2,
    requestGetGift,
    getGiftById,
    getGiftByIdFails,
} from "./paper"
import { defaultAxios } from "./AxiosApi"

function* postPaper(data) {
    try {
        console.log(data)
        console.log(data.payload)
        yield call(defaultAxios, "/paper", "post", data.payload)
        alert("작성이 완료되었습니다")
    } catch (error) {
        yield put(getPapersFail(error))
        console.error(error)
    }
}

function* handleGetAllPaper() {
    try {
        const paper = yield call(defaultAxios, "/paper", "get", null)
        yield put(getPapers(paper.data))
    } catch (error) {
        console.error(error)
        yield put(getPapersFail(error))
    }
}
function* handleGetPaperById() {
    try {
        console.log("handle start")
        const id = yield select((state) => state.user.me.uid)

        const paper = yield call(defaultAxios, `/paper/${id}`, "get", null)
        yield put(getPapers(paper.data))
    } catch (error) {
        console.error(error)
        yield put(getPapersFail(error))
    }
}
function* handleGetGiftById(data) {
    try {
        const giftId = data.payload.giftId
        console.log(data.payload)
        console.log(giftId)
        if (giftId !== 0 && giftId !== undefined) {
            // yield call(defaultAxios, `/peper/)
            // put result
            yield put(
                getGiftById({
                    id: 1,
                    price: 35000,
                    content: "투썸플레이스의 초콜릿 케이크",
                    popularity: 0,
                    date: "2022-05-13",
                    name: "스트로베리 초콜릿 생크림",
                })
            )
        }
    } catch (error) {
        console.error(error)
        yield put(getGiftByIdFails(error))
    }
}

export function* watchGetPaper() {
    yield yield takeLatest(load2, postPaper)
    yield yield takeLatest(load, handleGetPaperById)
    yield yield takeLatest(requestGetGift, handleGetGiftById) //여기 있는것들을 보고 있다.-> 쓸수 있다.
}
