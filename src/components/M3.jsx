
import React from 'react';


class M3 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {x: 3};
     
    }

    //  const [count, set3x] = useState(3);
    // function setState === function set3x

    set3x = () => {
        return x + 3;
    }

    do3 = () => {
        localStorage.setItem('xxx', this.state.x + 3);
        this.setState((state) => ({x: state.x +=3}));
        
    }

    componentDidMount() {
        const x = localStorage.getItem('xxx');
       
        if (null === x) {
            return;
        }
        this.setState({
            x: parseInt(x)
        });
    }
  
    render() {
      return (
        <button className = "mygtukas" onClick={this.do3}>
            {this.state.x}X
        </button>
      );
    }
  }

  export default M3;
