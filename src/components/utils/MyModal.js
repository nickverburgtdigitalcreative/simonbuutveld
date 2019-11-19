import React, { PureComponent } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
    }
};

class MyModal extends PureComponent {
    state = {
        showModal: false,
        once: false,
    }
    componentDidMount() {
        if( !window.sessionStorage.getItem("show") ) {
            window.sessionStorage.setItem("show", "true");
        }

        setTimeout(() => {
            this.openOrCloseModal()
        }, 5000);


        window.addEventListener('resize', () => {
            this.openOrCloseModal()
        }, false)
    }

    viewportWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth;
    }

    openOrCloseModal = () => {
        if (window.orientation === undefined){
            return
        }

        if (window.orientation === 90 || window.orientation === -90) {
            this.closeModal()
            document.body.classList.add('landscape')
            document.body.classList.remove('portrait')
            this.setState({
                once: false,
            })
        } else {
            if(!this.state.once){
                this.openModal()
            }
            document.body.classList.remove('landscape')
            document.body.classList.add('portrait')
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        },() => {
            window.sessionStorage.setItem("show", "false")
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            once: true,
        })
    }


    render() {
        if( window.sessionStorage.getItem("show") === "true") {
            return (
                <Modal
                    style={customStyles}
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    className='my_modal'
                    overlayClassName='my_modal_overlay'
                >
                    <p><strong>Hello. </strong>For the full experience this site is best viewed on desktop. On mobile it is better with your device rotated to landscape.</p>
                    <button onClick={this.closeModal}></button>
                </Modal>
            )
        } else {
            return false
        }
    }
}

export default MyModal;