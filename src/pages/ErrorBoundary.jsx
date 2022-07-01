import React , {Component} from 'react'

export class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null
        }
    }

    componentDidCatch(error,errorInfo){
      console.log({error,errorInfo})
    }

    static getDerivedStateFromError(error){
     return {error}
    }

    render(){

      return  this.state.error ? <div className='w-full flex items-center justify-center'><p>Ooops! Something went wrong 😒</p></div> : this.props.children

    }
}