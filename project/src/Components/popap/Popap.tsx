

import React from 'react'
import './popapStyle.css';
import closeImg from '../../asserts/images/close.svg';

type Props = {
	modalActivee: boolean;
	setModalActivee: (active: boolean) => void;
	inputValuee: string;
	setInputValuee: (active: string) => void;
}
// inputValue, setInputValue
const Popap = ({ modalActivee, setModalActivee, inputValuee, setInputValuee }: Props) => {


	const handleChange = (event: any) => {
		if (event.target.value.length >= 0) {
			setInputValuee(event.target.value);
		}
	}
	const handleSaveClick = () => {
		if (inputValuee.length > 0) {
			setInputValuee(inputValuee)
			deletePopap()
		}
	}
	const deletePopap = () => {
		setModalActivee(false)
	}

	return (
		<div className={modalActivee ? 'modaler active' : 'modaler'}>

			<div className={modalActivee ? 'modaler__content  active' : 'modaler__content '}>
				<h1>Впишите имя автора</h1>
				<form action="#" className='autor-container'>
					<input value={inputValuee} type="text" placeholder='your name' className='inputse' onChange={(event) => handleChange(event)} />
					<button className='btn' onClick={() => handleSaveClick()}>Готово</button>
				</form>
				<img src={closeImg} onClick={() => deletePopap()} className="close__popap" alt="" />
			</div>
		</div>)
}
export default Popap;