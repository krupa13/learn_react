import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy location"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/krupa13");

        const json = await data.json();

        this.setState({
            userInfo: json
        });
        console.log(json);
    }

    render() {

        const { name, location} = this.props;

        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: github/krupa13</h4>
            </div>
        )
    }
}

export default UserClass;