import * as constants from '../constants'

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface CurrentPhoto {
    type: constants.CURRENT_PHOTO;
    id: number
}

export interface OverturnPhoto {
    type: constants.OVERTURN_PHOTO;
    turnOver: boolean
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

export type GalleryAction = CurrentPhoto | OverturnPhoto;

export function currentPhoto(index:number): CurrentPhoto {
    return {
        type: constants.CURRENT_PHOTO,
        id: index
    }
}

export function overturnPhoto(turnOver:boolean): OverturnPhoto {
    return {
        type: constants.OVERTURN_PHOTO,
        turnOver: turnOver
    }
}