const DevChkBox = props =>
    // use the standard dev
    <div>
        <input id={props.id} type="checkbox" checked={props.checked} onChange={props.onChange} />
        <span style={props.textstyle}>{props.text}</span>
    </div>

class Devotes extends React.Component {
    constructor(props){
        super(props);
        this.state={checkedItems:{},useMax:false};
        // this.onChange=this.onChange.bind(this);
        // this.getChecked=this.getChecked.bind(this);
        // this.changeChecked=this.changeChecked.bind(this);
        Object.getOwnPropertyNames(Devotes.prototype).filter(x => x != "constructor").map(x => {
            if (typeof (this[x]) === "function")
                this[x] = this[x].bind(this);
        });
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
        this.setState({checkedItems:nextChecked,useMax:this.getChecked('special')});
    }
    render(){
        var values = [
            {id:'special',text:"Max Devotions"}
            {id:'crBlue',minText:"Crossroads Blue - +18 Defensive Ability",maxText:"Crossroads Blue - +18 Defensive Ability"},
            {id:'crRed',minText:"Crossroads Red - +5% Health",maxText:"Crossroads Red - +5% Health"},
            {id:'crGreen',minText:"Crossroads Green - +18 Offensive Ability",maxText:"Crossroads Green - +18 Offensive Ability"},
            {id:'crPurple',minText:"Crossroads Purple - +18 Offensive Ability",maxText:"Crossroads Purple - +18 Offensive Ability"},
            {id:'crYellow',minText:"Crossroads Yellow - +5% Health",maxText:"Crossroads Yellow - +5% Health"},
        ]

        return (<div>Hello
                { values.map( v =>
                    (<DevChkBox
                        key={v.id}
                        id={v.id}
                        text={v.text? v.text : this.getChecked('special')?v.maxText:v.minText}
                        onChange={this.onChange.bind(null,v)}
                        textstyle={this.getChecked(v.id)?{fontStyle:'normal'}:{fontStyle:'italic'}}
                        />)
                    )
                }

                </div>)
    }
}

ReactDOM.render(<Devotes />, document.getElementById("app"));