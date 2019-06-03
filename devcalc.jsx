var DevChkBox = props =>(
	<div>
	<input id={props.id} type="checkbox" checked={props.checked} onChange={props.onChange} />
		<span style={props.textstyle}>{props.text}</span>
		</div>
);


class Devotes extends React.Component {
  constructor(props) {
    super(props);
		this.state = {checkedItems:{}};
		this.onChange=this.onChange.bind(this);
		this.getChecked=this.getChecked.bind(this);
		this.changeChecked=this.changeChecked.bind(this);
		//this.render=this.render.bind(this);
	}
	getChecked(id){
		return this.state.checkedItems[id]===true;
	}
	changeChecked(id,value,oldState){
		if(value !== true && value !== false) throw('bad value' + value);
		var setting = {};
		setting[id] = value;
		var nextChecked=Object.assign({},oldState,setting);
		return nextChecked;
	}
	onChange(e){
		if(!e.id){
			return;
		}
		var nextChecked = this.changeChecked(e.id,!this.getChecked(e.id),this.state.checkedItems);	
		this.setState({checkedItems:nextChecked});
	}
	render(){
		var self = () => this;
		var values = [
			{id:'crBlue',minText:"Crossroads Blue - +18 Defensive Ability",maxText:"Crossroads Blue - +24 Defensive Ability"}
		]
		
		return (<div>Hello
				{ values.map( v => (<DevChkBox 
															key={v.id} 
															id={v.id}
															text={this.getChecked(v.id)?v.minText:v.maxText} 
															onChange={this.onChange.bind(null,v)} 
															textstyle={this.getChecked(v.id)?{fontStyle:'italic'}:{fontStyle:'normal'}}
															/>))}
				
				</div>)
	}
}

ReactDOM.render(<Devotes />, document.getElementById("app"));
