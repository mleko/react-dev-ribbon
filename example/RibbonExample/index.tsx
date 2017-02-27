import * as React from "react";
import {Ribbon} from "../../";

export class RibbonExample extends React.PureComponent<void, State> {

	public constructor(props) {
		super(props);
		this.state = {
			text: "DEVELOPMENT",
			width: ""
		};
	}

	public render(): JSX.Element {
		return (
			<div>
				<label>Ribbon text:
					<input value={this.state.text} onChange={this.changeText}/>
				</label>
				<label>Ribbon width:
					<input type="number" value={this.state.width} onChange={this.changeWidth}/>
				</label>
				<Ribbon width={+this.state.width} angle={45}>{this.state.text}</Ribbon>
			</div>
		);
	}

	private changeText = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({text: event.currentTarget.value});
	};
	private changeWidth = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({width: event.currentTarget.value});
	};
}

interface State {
	text?: string;
	width?: string;
}
