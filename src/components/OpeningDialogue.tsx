import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import EarthPointCloudComponent from './EarthPointCloud';

interface OpeningDialogueProps {
    onDialogueClosed: (dialogueClosed: boolean) => void;
  }
  
  const OpeningDialogue: FC<OpeningDialogueProps> = ({ onDialogueClosed }) => {
    const [open, setOpen] = useState(true);
    const [dialogReady, setDialogReady] = useState(false);
  
    useEffect(() => {
      if (open) {
        setDialogReady(true);
        const timer = setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 100);
        return () => clearTimeout(timer);
      }
    }, [open]);
  
    const onBegin = () => {
      console.log("START ACTION");
      setOpen(false);
      onDialogueClosed(true);
    }
  
    return (
      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align="center">
          {`Climate Data & AI In Service of a Thriving Planet`}
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography paragraph align="left">
              Our vision is a world in which shared data is used to improve decision making at all levels of society.
              Increasing shared understanding of our world through community-led initiatives that make data easier to access and use.
            </Typography>
            
            {dialogReady && <EarthPointCloudComponent width="300px" height="300px" />}
            
            <Typography variant="body1" paragraph align="left" sx={{ mt: 2 }}>
              The future of our species depends on our ability to develop sustainable methods of sharing data with one another. Shared access to data allows humans to develop a fact-based and shared understanding of our world, which is necessary for us to collaboratively address global challenges. Expanding access to data about our planet is necessary to empower more people to perform scientific research, reduce the cost of research and product development, enable reproducibility of research, and foster collaboration among institutions.
            </Typography>

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onBegin}>
            Begin
          </Button>
        </DialogActions> 
      </Dialog>
    );
  }

  export default OpeningDialogue;