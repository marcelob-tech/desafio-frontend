import './Input.scss';
import React from 'react';
import { Search } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/esm/Col';

const Input = (props) => {
	return (
		<div className={`col-12`}>
			<input
				className={`col-${props.cols} Input`}
				placeholder={props.placeholder}
				type={props.type}
			/>{' '}
			<button className="col-1 btn-search" onClick={props.busca}>
				<Search fontSize={26} color="#333" />
			</button>
		</div>
	);
};

export default Input;
