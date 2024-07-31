import { useState } from 'react';
import type { FC } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

interface OpeningDialogueProps {
    onDialogueClosed: (dialogueClosed: boolean) => void;
  }
  
  const OpeningDialogue: FC<OpeningDialogueProps> = ({ onDialogueClosed }) => {
    const [open, setOpen] = useState(true);

    const onBegin = () => {
        console.log("START ACTION");
        setOpen(false);
        onDialogueClosed(true);
    }
  
    return (
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Climate Data & AI In Service of a Thriving Planet`}
          </DialogTitle>
          <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Welcome to the Syntropic Futures Climate Data & AI experience.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={onBegin}>
                Begin
            </Button>
            </DialogActions> 
        </Dialog>
      </div>
    );
  }

  export default OpeningDialogue;