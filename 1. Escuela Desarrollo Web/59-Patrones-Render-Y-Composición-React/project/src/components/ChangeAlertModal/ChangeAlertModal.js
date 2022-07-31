import React from 'react';
import ReactDOM from 'react-dom';
import './ChangeAlertModal.css'
import withStorageListener from './withStorageListener';

const ChangeAlertModal = ({ synchronizedState, setSynchronizedState }) => {

    if (synchronizedState) return null
    else {

        return ReactDOM.createPortal(

            <dialog className='change-alert-modal-container' open={!synchronizedState}>

                <div className='change-alert-modal'>

                    <p className='change-alert-modal__message'>Your <span>Tasks</span> are not synchronized!</p>
                    <button className='change-alert-modal__button' onClick={() => setSynchronizedState(true)}>Refresh</button>

                </div>

            </dialog>,

            document.getElementById('modal')
        );
    }


}

const ChangeAlertModalwithStorageListener = withStorageListener(ChangeAlertModal);

export default ChangeAlertModalwithStorageListener;
