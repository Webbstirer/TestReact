var tiers = // : Tier[] =
    [
        {
            tier: 0,
            sets: [

                {
                    title: "Crossroads",
                    values:
                        [
                            { id: 'special', text: "Max Devotions" },
                            { id: 'crBlue', minText: "Crossroads Blue - +18 Defensive Ability", maxText: "Crossroads Blue - +18 Defensive Ability", da: 18 },
                            { id: 'crRed', minText: "Crossroads Red - +5% Health", maxText: "Crossroads Red - +5% Health", health: .05 },
                            { id: 'crGreen', minText: "Crossroads Green - +18 Offensive Ability", maxText: "Crossroads Green - +18 Offensive Ability" },
                            { id: 'crPurple', minText: "Crossroads Purple - +18 Offensive Ability", maxText: "Crossroads Purple - +18 Offensive Ability" },
                            { id: 'crYellow', minText: "Crossroads Yellow - +5% Health", maxText: "Crossroads Yellow - +5% Health" }
                        ]
                },

            ]
        },
        {
            tier: 1,
            sets: [
                {
                    title: "Anvil", values: [
                        { id: 'anv1', minText: "+15 Defensive Ability", maxText: "+15 Defensive Ability" },
                        { id: 'anv2', minText: "+10 Physique", maxText: "+10 Physique" },
                        { id: 'anv3', minText: "Increases Armor Absorption by 3%", maxText: "Increases Armor Absorption by 3%" },
                        { id: 'anv4', minText: "+15 Defensive Ability, +20% Constitution", maxText: "+15 Defensive Ability, +20% Constitution" },
                        { id: 'anv5', minText: "Targo's Hammer - 0.1 Second skill Recharge, 100% Chance to pass through Enemies, 0.3 Meter Radius, 15% Weapon Damage, 28 Physical Damage, +50% Internal Trauma Damage, 10% Chance of Stun target for 1 Second", maxText: "Targo's Hammer(20/20) - 0.1 Second skill Recharge, 100% Chance to pass through Enemies, 0.3 Meter Radius, 35% Weapon Damage, 168 Physical Damage, +250% Internal Trauma Damage, 50% Chance of Stun target for 1 Second" }
                    ]
                },
                {
                    title: 'Empty Throne',
                    values:
                        [
                            { id: 'et1', minText: "15% reduced Stun Duration", maxText: "15% reduced Stun Duration" },
                            { id: 'et2', minText: "8% Pierce Resistance, Bonus to All Pets: 8% Pierce Resistance", maxText: "8% Pierce Resistance, Bonus to All Pets: 8% Pierce Resistance" },
                            { id: 'et3', minText: "8% Chaos Resistance, Bonus to All Pets: 8% Chaos Resistance", maxText: "8% Chaos Resistance, Bonus to All Pets: 8% Chaos Resistance" },
                            { id: 'et4', minText: "8% Aether Resistance, Bonus to All Pets: 8% Aether Resistance", maxText: "8% Aether Resistance, Bonus to All Pets: 8% Aether Resistance" },
                        ]
                },
                {
                    title: 'Falcon',
                    values:
                        [
                            { id: 'falc1', minText: "+15% Physical Damage", maxText: "+15% Physical Damage" },
                            { id: 'falc2', minText: "+24% Bleeding Damage", maxText: "+24% Bleeding Damage" },
                            { id: 'falc3', minText: "+15 Cunning", maxText: "+15 Cunning" },
                            { id: 'falc4', minText: "+24% Physical Damage", maxText: "+24% Physical Damage" },
                            { id: 'falc5', minText: "Falcon Swoop - 2 Second Skill Recharge, 3 Projectile(s), 100% Chance to pass through Enemies, 0.1 Meter Radius, 6% Weapon Damage, 28 Physical Damage 150 Bleeding Damage over 3 Seconds", maxText: "Falcon Swoop(20/20) - 2 Second Skill Recharge, 6 Projectile(s), 100% Chance to pass through Enemies, 0.1 Meter Radius, 20% Weapon Damage, 98 Physical Damage 405 Bleeding Damage over 3 Seconds" }
                        ]
                },
                {
                    title: 'Hammer',
                    values:
                        [
                            { id: 'hamr1', minText: "+15% Physical Damage", maxText: "+15% Physical Damage" },
                            { id: 'hamr2', minText: "+30% Internal Trauma Damage, +8 Defensive Ability", maxText: "+30% Internal Trauma Damage, +8 Defensive Ability" },
                            { id: 'hamr3', minText: "+15% Physical Damage, +30% Internal Trauma Damage", maxText: "+15% Physical Damage, +30% Internal Trauma Damage" }
                        ]
                },
                {
                    title: 'Harpy',
                    values:
                        [
                            { id: 'harp1', minText: "+15% Pierce Damage, +15% Cold Damage", maxText: "+15% Pierce Damage, +15% Cold Damage" },
                            { id: 'harp2', minText: "+10 Cunning, +1.5 Energy regenerated per Second", maxText: "+10 Cunning, +1.5 Energy regenerated per Second" },
                            { id: 'harp3', minText: "5-10 Piercing Damage, +24% Pierce Damage, +24% Cold Damage", maxText: "5-10 Piercing Damage, +24% Pierce Damage, +24% Cold Damage" },
                            { id: 'harp4', minText: "+15 Offensive Ability, 10% Bleeding Resistance", maxText: "+15 Offensive Ability, 10% Bleeding Resistance" }
                        ]
                },
                {
                    title: 'Harpy',
                    values:
                        [
                            { id: 'harp1', minText: "+8 Cunning, Bonus to All Pets: +15% to All Damage", maxText: "+8 Cunning, Bonus to All Pets: +15% to All Damage" },
                            { id: 'harp2', minText: "10% Elemental Resistance, Bonus to All Pets: 10% Elemental Resistance", maxText: "10% Elemental Resistance, Bonus to All Pets: 10% Elemental Resistance" },
                            { id: 'harp3', minText: "33 Bleeding Damage over 3 seconds, Bonus to All Pets: 12 Bleeding Damage over 3 seconds, +25% to All Damage", maxText: "33 Bleeding Damage over 3 seconds, Bonus to All Pets: 12 Bleeding Damage over 3 seconds, +25% to All Damage" },
                            { id: 'harp4', minText: "+35% Bleeding Damage, Bonus to All Pets: 24 Bleeding Damage over 3 seconds, +60% Bleeding Damage, +5% Attack Speed", maxText: "+35% Bleeding Damage, Bonus to All Pets: 24 Bleeding Damage over 3 seconds, +60% Bleeding Damage, +5% Attack Speed" }
                        ]
                }
        
            
        
                
            ]
        }
    ];

const BonusNav = props =>
(

                <nav className="navbar navbar-expand-lg">
                    <div className="nav-item">
                        DA {props.da}
                    </div>
                    <div className="nav-item">
                        OA {props.oa}
                    </div>
                    {/* <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div> */}
                </nav>
);
const SetDisplay = props =>
    (
        <div className="panel border col">
            <b>{props.title}</b>
            {props.values.map(v =>
                (
                    <DevChkBox
                        key={v.id}
                        id={v.id}
                        text={v.text ? v.text : props.getChecked('special') ? v.maxText : v.minText}
                        onChange={props.onChange.bind(null, v)}
                        textstyle={props.getChecked(v.id) ? { fontStyle: 'normal' } : { fontStyle: 'italic' }}
                    />
                ))}
        </div>
    );

const DevChkBox = props =>
    // use the standard dev
    <div>
        <input id={props.id} type="checkbox" checked={props.checked} onChange={props.onChange} />
        <span style={props.textstyle}>{props.text}</span>
    </div>

class Devotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checkedItems: {}, useMax: false };
        // this.onChange=this.onChange.bind(this);
        // this.getChecked=this.getChecked.bind(this);
        // this.changeChecked=this.changeChecked.bind(this);
        Object.getOwnPropertyNames(Devotes.prototype).filter(x => x != "constructor").map(x => {
            if (typeof (this[x]) === "function")
                this[x] = this[x].bind(this);
        });
    }
    getChecked(id) {
        return this.state.checkedItems[id] === true;
    }
    changeChecked(id, value, oldState) {
        if (value !== true && value !== false) throw ('bad value' + value);
        var setting = {};
        setting[id] = value;
        var nextChecked = Object.assign({}, oldState, setting);
        return nextChecked;
    }
    onChange(e) {
        if (!e.id) {
            return;
        }
        var nextChecked = this.changeChecked(e.id, !this.getChecked(e.id), this.state.checkedItems);
        this.setState({ checkedItems: nextChecked, useMax: this.getChecked('special') });
    }

    render() {
        var bonusTotal = {da:0,oa:0};
        var keys = Object.keys(bonusTotal);
        var incrementer = (d,k) => {
            console.log('checking x for y', d, k);
          if(d[k] != null) bonusTotal[k] += d[k];
        };
        var allSets = window.allSets = tiers.reduce((acc,v) => acc.concat(v.sets),[]);
        var allDevos = window.allDevos = allSets.reduce((acc,v)=> acc.concat(v.values),[]);
        var checked = window.checked = allDevos.filter(d=> this.getChecked(d.id));

        checked.map(d =>keys.map(k => incrementer(d,k)));

        

        return (<div>
        <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar navbar-fixed-top">

            <div>
                <BonusNav oa={bonusTotal.oa} da={bonusTotal.da} />
            </div>
        </header>
        <div className="fluid-container">
            <u><b>Starting Constellation</b></u><br></br>
            {
                tiers.map(t =>
                    <div key={t.tier} className="panel border col">
                        <div>Tier {t.tier}</div>
                        {t.sets.map(ds => <SetDisplay key={ds.title} title={ds.title} values={ds.values} onChange={this.onChange} getChecked={this.getChecked} />)}
                    </div>
                )
            }
            <b>Falcon</b>
            {values4.map(v4 =>
                (<DevChkBox
                    key={v4.id}
                    id={v4.id}
                    text={v4.text ? v4.text : this.getChecked('special') ? v4.maxText : v4.minText}
                    onChange={this.onChange.bind(null, v4)}
                    textstyle={this.getChecked(v4.id) ? { fontStyle: 'normal' } : { fontStyle: 'italic' }}
                />)
            )
            }
            <b>Hammer</b>
            {values5.map(v5 =>
                (<DevChkBox
                    key={v5.id}
                    id={v5.id}
                    text={v5.text ? v5.text : this.getChecked('special') ? v5.maxText : v5.minText}
                    onChange={this.onChange.bind(null, v5)}
                    textstyle={this.getChecked(v5.id) ? { fontStyle: 'normal' } : { fontStyle: 'italic' }}
                />)
            )
            }
            <b>Harpy</b>
            {values6.map(v6 =>
                (<DevChkBox
                    key={v6.id}
                    id={v6.id}
                    text={v6.text ? v6.text : this.getChecked('special') ? v6.maxText : v6.minText}
                    onChange={this.onChange.bind(null, v6)}
                    textstyle={this.getChecked(v6.id) ? { fontStyle: 'normal' } : { fontStyle: 'italic' }}
                />)
            )
            }
            <b>Nighttalon</b>
            {values7.map(v7 =>
                (<DevChkBox
                    key={v7.id}
                    id={v7.id}
                    text={v7.text ? v7.text : this.getChecked('special') ? v7.maxText : v7.minText}
                    onChange={this.onChange.bind(null, v7)}
                    textstyle={this.getChecked(v7.id) ? { fontStyle: 'normal' } : { fontStyle: 'italic' }}
                />)
            )
            }
            <b>Bonuses</b>
            {

            }
        </div>
        </div>)
    }
}



ReactDOM.render(<Devotes />, document.getElementById("app"));