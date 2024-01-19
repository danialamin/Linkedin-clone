import React from 'react';
import { Modal, Button } from 'antd';
import "./index.scss"

// eslint-disable-next-line react/prop-types
const ModalComponent  = ({modalOpen, setModalOpen, status, setStatus, sendStatus}) => {

  return (
    <>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          // eslint-disable-next-line react/prop-types
          <Button 
          key="submit" 
          type="primary" 
          // eslint-disable-next-line react/prop-types
          disabled={status.length > 0 ? false : true}
          onClick={sendStatus}>
            Post
          </Button>
        ]}
      >
        <input 
        className='modal-input'
        placeholder='What do you want to talk about?'
        onChange={(event) => setStatus(event.target.value)}
        value={status}/>
      </Modal>
    </>
  );
};
export default ModalComponent;