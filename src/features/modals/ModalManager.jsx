import React from 'react'
import {connect } from 'react-redux'
import TestModal from './TestModal'

const modalLookup = {
    TestModal
}

const mapState = (state) => ({
    currentModal: state.modals
})

const ModalManager = ({currentModal}) => {
    let renderModal
    if(currentModal) {
        const {modalType, modalProps} =currentModal
        const ModalComponent = modalLookup[modalType]

        renderModal = <ModalComponent {...modalProps} />
    }
    return <spam>{renderModal}</spam>
}

export default connect(mapState)(ModalManager)