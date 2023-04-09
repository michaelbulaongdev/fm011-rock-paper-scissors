import {useState} from 'react';
import {Modal} from '@mui/material';

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
					<p>Modal Content Here</p>
				</div>
			</Modal>
		</section>
	);
}
