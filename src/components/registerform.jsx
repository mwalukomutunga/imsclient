// import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react';
import FormData from './form';
import { Button, Modal } from 'semantic-ui-react';

const Register = () => {
    const [open, setOpen] = useState(false)
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<button className="label label-button">Register</button>}
        >
            <Modal.Header>Register</Modal.Header>
            <Modal.Content>
               <FormData/>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    content="close"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>

    );
}

export default Register;