import {useState} from 'react';
import {Modal} from '@mui/material';
import Close from '../images/icon-close.svg';

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
				<div className='rules'>
					<div>
						<h3>RULES</h3>
						<button className='close-button' onClick={handleClose}>
							<img src={Close} alt='close-button' />
						</button>
					</div>
				</div>
			</Modal>
		</section>
	);
}
