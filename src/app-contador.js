class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.resetear = this.resetear.bind(this)
        this.state = {
            count: 0
        }
    }
    incrementar() {
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            }
        })
        
    }
    decrementar() {
        this.setState((prevState)=>{
            return{
                count:prevState.count - 1
            }
        })
        
    }
    resetear() {
        this.setState((prevState)=>{
            return{
                count:0
            }
        })
        
    }
    render() {
        return (
            <div>
                <h1>Contador</h1>
                <p>{this.state.count}</p>
                <button onClick={this.incrementar}>+1</button>
                <button onClick={this.decrementar}>-1</button>
                <button onClick={this.resetear}>Reset</button>
            </div>
        )
    }
}



ReactDOM.render(<CounterApp />, document.querySelector('#appRoot'))