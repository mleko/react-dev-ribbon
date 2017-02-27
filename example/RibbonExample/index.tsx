import * as React from "react";
import {Ribbon} from "../../";

export class RibbonExample extends React.PureComponent<void, State> {

	public constructor(props) {
		super(props);
		this.state = {
			text: "DEVELOPMENT"
		};
	}

	public render(): JSX.Element {
		return (
			<div>
				<label>Ribbon text:
					<input value={this.state.text} onChange={this.changeText}/>
				</label>
				<Ribbon>{this.state.text}</Ribbon>
			</div>
		);
	}

	private changeText = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({text: event.currentTarget.value});
	};
}

interface State {
	text?: string;
}
