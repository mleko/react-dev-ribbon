import * as React from "react";
import {Ribbon} from "../../../";

export class Playground extends React.Component<void, State> {
	public constructor(props) {
		super(props);
		this.state = {
			text: "DEVELOPMENT",
			width: "190",
			angle: "45",
			overflowHidden: true
		};
	}

	public render(): JSX.Element {
		return (
			<div style={{textAlign: "center"}}>
				<div>
					<label>Ribbon text:
						<input value={this.state.text} onChange={this.changeText}/>
					</label>
				</div>
				<div>
					<label>Ribbon width:
						<input type="number" value={this.state.width} onChange={this.changeWidth}/>
					</label>
				</div>
				<div>
					<label>Ribbon angle:
						<input type="number" value={this.state.angle} onChange={this.changeAngle}/>
					</label>
				</div>
				<div>
					<label>Overflow hidden:
						<input type="checkbox" checked={this.state.overflowHidden} onChange={this.changeOverflowHidden}/>
					</label>
				</div>
				{this.renderRibbon()}
			</div>
		);
	}

	public renderRibbon() {
		const cStyle: React.CSSProperties = {
			height: 300,
			width: 300,
			background: "#f5f5f5",
			marginTop: 50,
			overflow: this.state.overflowHidden ? "hidden" : null,
			display: "inline-block",
			transform: "translate(0)"
		};
		const props = {
			width: +this.state.width,
			angle: +this.state.angle
		};
		return (
			<div style={cStyle}>
				{React.createElement(Ribbon, props, this.state.text)}
			</div>
		);
	}

	private changeText = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({text: event.currentTarget.value});
	};
	private changeWidth = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({width: event.currentTarget.value});
	};
	private changeAngle = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({angle: event.currentTarget.value});
	};
	private changeOverflowHidden = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({overflowHidden: event.currentTarget.checked});
	};
}

interface State {
	text?: string;
	width?: string;
	angle?: string;
	overflowHidden?: boolean;
}
