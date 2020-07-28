import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ModalDescription, ModalComponent, ModalTitle } from './styled';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CheckoutModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <ModalComponent style={modalStyle} className={classes.paper}>
      <ModalTitle id="simple-modal-title">Obrigado pela compra</ModalTitle>
      <ModalDescription id="simple-modal-description">
        Aproveite seu Pokémon!
      </ModalDescription>
      <ModalDescription id="simple-modal-description">
        Você Recebeu <b>R$ {props.cartTotalValue}</b> de cash back!
      </ModalDescription>
    </ModalComponent>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}