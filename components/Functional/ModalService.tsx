import { ReactElement } from "react";

export type ModalSignature = {
    id: string,
    title: string,
    modalClass?: string,
    options?: ModalControls[],
    element: ReactElement<any,any>,
    close: Function
}

export enum ModalControls{
    EXIT_CROSS, CLOSE_TAB
}

export type ModalValues = {
    modals: ModalSignature[];

    open?: Function;
    close?: Function;
}


var MODAL_SERVICE: ModalValues

export const OPEN = "OPEN"
export const CLOSE = "CLOSE"

interface ModalOperator{
    modalUpdated: Function
}

var operator: ModalOperator

export function RegisterOperator(op: ModalOperator){
    operator = op
}

export function GetModalService() : ModalValues {   
    
    if(MODAL_SERVICE) return MODAL_SERVICE;

    var modalService: ModalValues = {
        modals: []
    }

    modalService.open = (modal: ModalSignature) => {
        var resultModal = {
            id: modal.id,
            title: modal.title,
            modalClass: modal.modalClass,
            options: modal.options??[ModalControls.EXIT_CROSS],
            element: modal.element,
            close: modal.close??function(){}
        }

        modalService.modals.push(resultModal);

        operator.modalUpdated(OPEN)

        return resultModal
    }

    modalService.close = () => {        
        var modal = modalService.modals.pop();
        modal?.close()

        operator.modalUpdated(CLOSE)
    }

    return MODAL_SERVICE = modalService
}