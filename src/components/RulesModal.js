import {useState} from 'react';
import {Fade, Modal} from '@mui/material';
import Close from '../images/icon-close.svg';
import RulesImage from '../images/image-rules.svg';

export default function RulesModal() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<section>
			<button className='rules-button' onClick={handleOpen}>
				RULES
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Fade in={open}>
					<div className='rules-container'>
						<div className='rules-header'>
							<h2>RULES</h2>
							<button className='close-button' onClick={handleClose}>
								<img src={Close} alt='close-button' />
							</button>
						</div>
						<div className='rules-image'>
							<img src={RulesImage} alt='game rules' />
						</div>
					</div>
				</Fade>
			</Modal>
		</section>
	);
}
