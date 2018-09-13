import React from "react";
const AntButton = require("antd/lib/button");

export default class Button extends React.Component {
	render() {
		const props = { type: "dashed", ...this.props };
		console.log(this.props);
		return <AntButton {...props} />;
	}
}
