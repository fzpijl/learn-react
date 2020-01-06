const React = require('react')
const ReactDOM = require('react-dom')
import Child from './app/app.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = ''
        console.log('*** App constructor ***')
    }
    handleClick(e){
        console.log(e)
    }
    render() {
        console.log('*** App render***')
        return (<div>
            <h2>App title</h2>
            <Child />
            <button onClick={this.handleClick.bind(this)}>button</button>
        </div>)
    }
    componentDidMount(){
        console.log(typeof this.state, 'state')
        setTimeout(() => {
            this.setState({
                foo: ''
            })
            // this.forceUpdate()
        }, 5000) 
        console.log('*** App componentDidMount ***')
    }
    componentDidUpdate() {
        console.log('*** App componendtDidUpdate***')
    }
}

ReactDOM.render(<App />, 
    document.getElementById('root')
    )

function tick() {
    setInterval(function(){
        ReactDOM.render(<App />, document.getElementById('root'))
    }, 10000)
}
// tick()

if(module.hot) {
    module.hot.accept('./app/app.js', function(){
        console.log('更新过了')
    })
}