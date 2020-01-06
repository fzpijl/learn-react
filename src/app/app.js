const React = require('react')
const ReactDOM = require('react-dom')
export default class Child extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
        console.log('...Child constructor')
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        return 'c'
    }
    render(){
        console.log('...Child render')
        return(
            <div>
                I am child component
                <TestPortal />
                <div dangerouslySetInnerHTML={{__html: 'lslslslsl'}} />
            </div>
        )
    }
    componentDidMount(){
        console.log('...Child componentDidMount')
    }

    shouldComponentUpdate(a, b, c, ) {
        console.log('c',  c)
        return true
    }
    getSnapshotBeforeUpdate(){
        return 'aaa'
    }
    componentDidUpdate(d, e, a) {
        console.log('...Child componentDidUpdate')
    }
}

function TestPortal(props) {
    return ReactDOM.createPortal(
        <div>c插槽</div>,
        document.getElementById('test'),
    )
}